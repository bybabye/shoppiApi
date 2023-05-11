import mssql  from "mssql"; 



const config = {
    server : "DESKTOP-9FVDQLR\\HUYBUI",
    user : 'sa',
    password : '1234',
    database : "QLBH",
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true // change to true for local dev / self-signed certs
    },
    port : 1433
    
}


export const conn = new mssql.connect(config).then(pool  => {
    console.log("Connected to MSSQL");
    
    return pool;
}).catch(err => console.log("Database Connection Failed! Bad Config: ", err));


