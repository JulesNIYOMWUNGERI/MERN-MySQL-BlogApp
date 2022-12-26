import mysql from 'mysql2'


export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    port:"3300",
    password:"nmJules77$",
    database:"blog"
})