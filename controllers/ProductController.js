import pool from "../database/connect.js";

export const getListProduct =  (req, res) => {
  const query = `SELECT P.id , P.name AS productName, 
  price,quantity,color,P.image ,description , C.name AS Category , S.displayname AS supplier
  FROM product P 
  JOIN category C ON C.id = P.categoryid 
  JOIN supplier S ON S.id = P.supplierid`;
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
export const getLimitProduct = (req,res) => {
  const limit = Number(req.query.limit);
  if(limit <= 0){
    return res.status(403).json({ messages: "Forbidden2" });
  }
  const query = `SELECT P.id , P.name AS productName, 
  price,quantity,color,P.image ,description , C.name AS Category , S.displayname AS supplier
  FROM product P 
  JOIN category C ON C.id = P.categoryid 
  JOIN supplier S ON S.id = P.supplierid LIMIT ${limit}`;
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
}
export const getProductWithCategory = (req,res) => {


  try {
    const query = `SELECT P.id , P.name AS productName, 
    price,quantity,color,P.image ,description , C.name AS Category , S.displayname AS supplier
    FROM product P 
    JOIN category C ON C.id = P.categoryid 
    JOIN supplier S ON S.id = P.supplierid WHERE P.categoryid = '${req.params.id}'`;
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
    return res.status(403).json({ messages: "Forbidden" });
  }

}

export const getDetailProduct =  (req, res) => {
  try {
    const query = `SELECT P.id , P.name AS productName, 
    price,quantity,color,P.image ,description , C.name AS Category , S.displayname AS supplier
    FROM product P 
    JOIN category C ON C.id = P.categoryid 
    JOIN supplier S ON S.id = P.supplierid WHERE P.id = '${req.params.id}'`;
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
