// import { conn } from "../database/connect.js";

// export const addUser = async (req, res) => {
//   const data = req.body;

//   const query = `INSERT INTO _User 
//   (ID , DisplayName,Email,PhoneNumber,PhotoURL,_Address) 
//   SELECT '${data.uid}', N'${data.displayName}', '${data.email}', '${data.phoneNumber}', '${data.photoURL}', ''
//   WHERE NOT EXISTS (
//       SELECT 1 FROM _User WHERE ID = '${data.uid}'
//   )
//   `;
//   const pool = await conn;

//   try {
//     return await pool.request().query(query, (err, data) => {
//       if (err) {
//         console.log(err);
//         return res.status(403).json({ messages: "Forbidden" });
//       }
//       return res.send({
//         status: 200,
//         data: "Success",
//       });
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(403).json({ messages: "Forbidden" });
//   }
  
// };
