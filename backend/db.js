const sqlite3 = require('sqlite3').verbose();


const db = new sqlite3.Database('./database.db', (err) => {
if (err) {
console.error('Error al conectar con la BD', err.message);
} else {
console.log('Base de datos conectada correctamente');
}
});


db.serialize(() => {
db.run(`CREATE TABLE IF NOT EXISTS usuarios (
id INTEGER PRIMARY KEY AUTOINCREMENT,
nombre TEXT,
email TEXT
)`);
});


module.exports = db;