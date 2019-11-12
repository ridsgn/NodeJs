let kelas3 = [
  { nis: 1, nama: "Winnerdy" },
  { nis: 2, nama: "Setiabudi" }
];

function tambahSiswa(siswa) {
  return new Promise((resolve, reject) => {
    try {
      resolve();
      kelas3.push(siswa);
    } catch {
      console.log(err);
    }
  });
}

function getKelas() {
  console.log("Kelas3 dalam kelas getClass():", kelas3);
}

async function init() {
  await tambahSiswa({ nis: 3, nama: "Benyamin" });
  await getKelas();
}

init();
