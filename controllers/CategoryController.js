import { conn } from "../database/connect.js";

export const getListCategory = async (req, res) => {
  const query = "SELECT ID, _Name AS Name,_Image AS Image FROM Category";

  // console.log(res.locals.uid);
  try {
    const pool = await conn;
    return await pool.query(query, (err, data) => {
      if (err) {
        return res.status(403).json({ messages: "Forbidden" });
      }
      return res.send({
        status: 200,
        data: data.recordset,
      });
    });
  } catch (error) {
    return res.status(403).json({ messages: "Forbidden" });
  }
};

export const updateCategory = async (req, res) => {
  const category = req.body;

  const query = `UPDATE Category SET _Image = '${category.Image}'where ID = '${category.ID}'`;
  console.log(query);
  const pool = await conn;
  return await pool.request().query(query, (err, data) => {
    try {
      if (err) {
        console.log(err);
        return res.status(403).json({ messages: "Forbidden" });
      }
      return res.send({
        status: 200,
        data: category,
      });
    } catch (error) {
      return res.status(403).json({ messages: "Error" });
    }
  });
};
