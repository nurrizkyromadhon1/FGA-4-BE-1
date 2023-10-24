const os = require('os')
const fs = require('fs')

// // console.log('our first project together')
// const check = fs.readFileSync('./test_test.txt', 'utf8')
// const writeFile = fs.writeFileSync('./write_file/test_person.json', JSON.stringify({
//     "name": "fadhil",
//     "location": "jakarta",
//     "age": 30
// }))
// console.log(check)

// // function PrintName(params) {
// //     return `halo semua binarian`
// // }

// // module.exports = {
// //     PrintName,
// // }
const { Client } = require('pg')
const client = new Client()


async function main() {
    await client.connect()

    const res = await client.query(`SELECT * FROM `)
}