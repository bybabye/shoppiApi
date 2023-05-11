import mssql  from "mssql/msnodesqlv8.js"; 



const config = {
    server : "DESKTOP-9FVDQLR\\HUYBUI",
    user : 'sa',
    password : '1234',
    database : "QLBH",
    driver : 'msnodesqlv8',
}


export const conn = new mssql.ConnectionPool(config).connect().then(pool => {
    console.log("Connected to MSSQL");
  
    return pool;
}).catch(err => console.log("Database Connection Failed! Bad Config: ", err));


