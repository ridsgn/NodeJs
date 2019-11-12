// ANCHOR Array
// let hewan = ["ikan", "kucing", "berbulu", 4];
// console.log(hewan);

// ANCHOR Bongkar nilai cara lama
// console.log(hewan[0]);
// console.log(hewan[1]);

// ANCHOR Bongkar nilai cara baru
// const [makanan, namaHewan, ciri, jmlKaki] = hewan;
// console.log(jmlKaki);

// ANCHOR Rest params
// let [a, b, c] = [1, 2, 3];
// console.log(a);

let [a, b, c, ...test] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]; // variable test berbentuk array
console.log(test);

// ANCHOR Looping array
// let hewan = ["kelinci", "kucing", "anjing", "kuda", "merpati"];
// for (let i = 0, len = hewan.length; i < len; i++) {
//   console.log(hewan[i]);
// }

let arr = [
  {
    firstName: "Dani",
    lastName: "test",
    nilai: 40
  },
  {
    firstName: "Doni",
    lastName: "test1",
    nilai: 60
  },
  {
    firstName: "Dana",
    lastName: "test2",
    nilai: 90
  }
];

// ANCHOR Array method sort
hasil = arr.sort(); // menampilkan list array ke bentuk object
console.log(hasil);
console.log(typeof hasil);

let hewan = ["ikan", "kucing", "ayam"];
// ANCHOR Array method pop
// let x = hewan.pop(); // mengeluarkan nilai terakhir dari array
// ANCHOR Array method push
// let x = hewan.push("test"); // menambahkan nilai array dari belakang
// ANCHOR Array method shift
// let x = hewan.shift(); // mengeluarkan nilai pertama dari array
// ANCHOR Array method splice
// let x = hewan.splice(0, 3); // menghapus nilai dari array dengan parameter (dari, jumlahhapus)
let x = hewan.splice(0, 1, "udang"); // menghapus dan mengganti nilai dari index 0
console.log(x);
console.log(typeof x);
console.log(hewan);
