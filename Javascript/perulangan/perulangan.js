//perulangan for
for (let i = 0; i < 5; i++) {
    console.log('perulangan ke-' + i)
}

//perulangan while
let i = 50
while (i <= 55) {
    console.log('perulangan ke-' + i)
    i++
}

//perulangan do while
let j = 1
do {
    console.log('perulangan ke-' +j)
    j++
} while (j <= 5)

//perulangan for of
let data = ['a', 'b', 'c', 'd', 'e']

for (let item of data) {
    console.log(item)
}

//perulangan break and continue
for (let i = 1; i <= 10; i++) {
    if (i == 6) {
        break;
    }
    console.log(i);
}

//perulangan nested loop
let weeks = 3;
let days = 7;
for (let i = 1; i <= weeks; ++i) {
console.log("Week: " + i);
for (let j = 1; j <= days; ++j) {
console.log(" Day: " + j);
}
}
