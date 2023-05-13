import pool from "../database/connect.js";

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
