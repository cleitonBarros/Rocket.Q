const sqlite3 = require('sqlite3');
const { open } =require('sqlite')

const db =()=>{
    return open({
        filename: "./src/db/rocketq.sqlite",
        driver: sqlite3.Database

    })
}
module.exports = db