const personalInfo = {
  firstName: "Rizky",
  lastName: "Firmansyah",
  status: "Mahasiswa",
  state: "Depok",
  zipCode: 15617
};

const { firstName, lastName, status, state, zipCode } = personalInfo;
personalInfo.state = "Jakarta";

console.log(personalInfo);
