import pool from "../database/connect.js";
  

export const getListCategory = async (req, res) => {
  const query = `SELECT * FROM "category"`;
  try {
    pool.query(query, (error, results) => {
      if (error) {
        return res.status(403).json({ messages: "Forbidden", error });
      }
      return res.send({
        status: 200,
        data: results.rows,
      });
    });
  } catch (error) {
    return res.status(403).json({ messages: "Forbidden2" });
  }
};


// export const updateCategory = async (req,res) => {

//   const category = req.body;

//   const query = `UPDATE Category SET _Image = '${category.Image}'where ID = '${category.ID}'`
//   console.log(query);
//   const pool = await conn;
//   return await pool.query(query, (err, data) => {
//     try {
//       if (err) {
//         console.log(err);
//         return res.status(403).json({ messages: "Forbidden" });
//       }
//       return res.send({
//         "status" : 200,
//         "data" : category
//       });
//     } catch (error) {
//       return res.status(403).json({ messages : "Error" });
//     }
//   });
// }
