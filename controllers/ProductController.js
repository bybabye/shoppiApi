import pool from "../database/connection.js";

export const getListProduct = async (req, res) => {
  const query = `SELECT * FROM "product"`;
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


export const getDetailProduct = async(req,res) => {
  try {
    const query = `SELECT * FROM "product" WHERE id = '${req.params.id}'`;
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
}