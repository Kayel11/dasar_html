let gender 
gender = 'Pria'

if (gender == 'Wanita') { 
    console.log('Anda adalah Pria')
} else {
    console.log('Anda adalah Wanita')
}

let username, password

username = 'admin'
password = '123'

const isSuccess = true
const isFailed = false

if (username == 'admin' && password == '123') {
    console.log(isSuccess)
} else if (username == 'admin' && password != '123') {
    console.log(isFailed)
} else if (username != 'admin' && password != '123') {
    console.log(isFailed)
} else {
    console.log(isFailed)
}

//nested if
if (username == 'admin'){
    if (password == '123'){
        console.log(isSuccess)
    } else {
        console.log(isFailed)
    }
}else if (password === '123'){
    console.log(isFailed)
}else {
    console.log(isFailed)
}


//switch case

let grade = 'B'

switch (grade) {
    case 'A':
        console.log('Sangat Baik')
        break
    case 'B':
        console.log('Baik')
        break
    case 'C':
        console.log('Cukup')
        break

    deafult:
        console.log('Tidak Lulus')
        break
}


//operator conditional
let age = 18 

let result = (age >= 18) ? 'Anda sudah dewasa' : 'Anda masih anak-anak'
console.log(result)
