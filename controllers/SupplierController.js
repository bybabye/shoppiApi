import pool from "../database/connect.js";




export const registerSupplier =  (req, res) => {
    const data = req.body;
    const uid = res.locals.uid ;
  
    const query = `INSERT INTO supplier
    (id , displayname,iduser) 
    SELECT '${data.uid}', N'${data.displayName}', '${uid}'
    WHERE NOT EXISTS (
        SELECT 1 FROM supplier WHERE iduser = '${uid}'
    )
    `;
    try {
      return  pool.query(query, (err, results) => {
        if (err) {
          console.log(err);
          return res.status(403).json({ messages: "Forbidden" });
        }
        return res.send({
          status: 200,
          data: "Success",
        });
      });
    } catch (error) {
      console.log(error);
      return res.status(403).json({ messages: "Forbidden" });
    }
    
  };
  