import mssql  from "mssql"; 



const config = {
    server : "DESKTOP-9FVDQLR\\HUYBUI",
    user : 'sa',
    password : '1234',
    database : "QLBH",
    options: {
        encrypt: false, // for azure
        trustServerCertificate: false // change to true for local dev / self-signed certs
    }
}


export const conn = new mssql.connect(config).then(pool  => {
    console.log("Connected to MSSQL");
    try {
        const q = `SELECT ID, _Name AS Name,_Image AS Image FROM Category`;
        pool.query(q,).then(data => console.log(data))
    } catch (error) {
        console.log(error);
    }
    return pool;
}).catch(err => console.log("Database Connection Failed! Bad Config: ", err));


