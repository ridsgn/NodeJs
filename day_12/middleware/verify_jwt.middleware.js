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

		let notadmin = {
			status: 'unauthenticated',
			message: "Sorry, You can't access this, because you're not an admin"
		};

		if (token) {
			jwt.verify(token, process.env.JWT_SECRET, async (err, data) => {
				console.log(typeof req.method);
				if (data.user_permission !== 'Admin') {
					if (req.method !== 'GET') {
						return res.status(401).json(notadmin);
					}
				}
				return next();
			});
		} else {
			return res.status(401).json(unauthenticated);
		}
	};
};
