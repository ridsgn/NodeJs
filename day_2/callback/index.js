// function detikSatu() {
//   setTimeout(() => {
//     console.log(`detik 1`);
//   }, 1000);
// }

// function detikDua() {
//   setTimeout(() => {
//     console.log(`detik 2`);
//   }, 500);
// }

// detikSatu();
// detikDua();

let kelas3 = [
  { nis: 1, nama: "Winnerdy" },
  { nis: 2, nama: "Setiabudi" }
];

// ANCHOR Callback

// function tambahSiswa(siswa, callback) {
//   kelas3.push(siswa);
//   console.log("Selesai Push");
//   callback();
// }

// function getKelas() {
//   console.log("Kelas3 dalam getClass ():", kelas3);
// }

// //getKelas();
// tambahSiswa({ nis: 3, nama: "Budiawan" }, getKelas);

// ANCHOR Promise Callback

function tambahSiswa(siswa) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      kelas3.push(siswa);

      const err = true;

      if (!err) {
        resolve();
      } else {
        reject(`Ada sesuatu yang error.. Apa hayo ?`);
      }
    }, 1000);
  });
}

function getKelas() {
  console.log(`kelas3 dalam getClass ():`, kelas3);
}

tambahSiswa({ nis: 3, nama: "Budiawan" })
  .then(getKelas)
  .catch(err => console.log(err));
