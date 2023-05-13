import pg from 'pg'


const pool = new pg.Pool({
    user: 'postgres',
    host: 'containers-us-west-143.railway.app',
    database: 'railway',
    password: 'ZJomQhc0cmKmqmyZOar8',
    port: "7561", // Cổng mặc định của PostgreSQL là 5432
});



export default pool;