import pool from "../database/connect.js";

export const addUser =  (req, res) => {
  const data = req.body;

  const query = `INSERT INTO user
  (id , displayName,email,phoneNumber,photoURL,address) 
  SELECT '${data.uid}', N'${data.displayName}', '${data.email}', '${data.phoneNumber}', '${data.photoURL}', ''
  WHERE NOT EXISTS (
      SELECT 1 FROM user WHERE id = '${data.uid}'
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
