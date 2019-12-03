const jwt = require('jsonwebtoken');
const { startWith } = require('lodash');
const Role = require('../models/roles.models');

module.exports = () => {
	return async (req, res, next) => {
		let token = req.header('Authorization');

		let unauthenticated = {
			status: 'unauthenticated',
			message: 'Invalid header Token'
		};

		if (token) {
			jwt.verify(token, process.env.JWT_SECRET, async (err, data) => {
				if (data.user_permission === 'User') return res.status(401).json(unauthenticated);
                // console.log(data);
                // console.log(err)
				return next();
			});
		} else {
			return res.status(401).json(unauthenticated);
		}
	};
};
