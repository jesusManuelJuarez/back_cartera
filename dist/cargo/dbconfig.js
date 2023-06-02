"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.executeQuery = exports.connectToDatabase = void 0;
const mysql_1 = __importDefault(require("mysql"));
const connection = mysql_1.default.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'casillas',
    database: 'dbcartera',
});
function connectToDatabase() {
    connection.connect((error) => {
        if (error) {
            console.error('Error al conectar a la base de datos:', error);
        }
        else {
            console.log('Conexión exitosa a la base de datos');
        }
    });
}
exports.connectToDatabase = connectToDatabase;
function executeQuery(query, params) {
    return new Promise((resolve, reject) => {
        connection.query(query, params, (error, results) => {
            if (error) {
                console.error('Error al ejecutar la consulta:', error);
                reject(error);
            }
            else {
                resolve(results);
            }
        });
    });
}
exports.executeQuery = executeQuery;
