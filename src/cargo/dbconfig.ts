import mysql from 'mysql';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'casillas',
  database: 'dbcartera',
});

export function connectToDatabase() {
  connection.connect((error) => {
    if (error) {
      console.error('Error al conectar a la base de datos:', error);
    } else {
      console.log('Conexión exitosa a la base de datos');
    }
  });
}

export function executeQuery(query: string, params?: any[]) {
  return new Promise<any[]>((resolve, reject) => {
    connection.query(query, params, (error, results) => {
      if (error) {
        console.error('Error al ejecutar la consulta:', error);
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}
