const Database = require('./config')

const initDb ={ 
    async init(){
        const db = await Database()
        await db.execute(`
        CREATE TABLE rooms(){
            id INTEGER PRIMARY KEY,
            pass TEXT
        }`);

        await db.execute(`
        CREATE TABLE question(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            titulo TEXT,
            read INT
        )`);

        await  db.close();
    }
}

initDb.init();


