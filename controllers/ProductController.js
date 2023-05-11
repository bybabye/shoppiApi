import { conn } from "../database/connect.js";
import { v4 as uuidv4 } from 'uuid';
 
export const getListProduct = async(req,res) => {
    const query = `SELECT P.ID AS ProductID , P._Name AS Name, 
    Price,Quantity,Color,P._Image AS Image ,_Description AS Description , C._Name AS Category , S.DisplayName AS Supplier
    FROM dbo.Product P 
    JOIN dbo.Category C ON C.ID = P.CategoryID 
    JOIN dbo.Supplier S ON S.ID = P.SupplierID`;
    
    try {
      const pool = await conn;
      return await pool.query(query, (err, data) => {
        if (err) {
          console.log(err);
          return res.status(403).json({ messages: "Forbidden" });
        }
        return res.send({
          status: 200,
          data: data.recordset,
        });
      });
    } catch (error) {
      console.log(error);
      return res.status(403).json({ messages: "Forbidden" });
    }
}


export const addProduct = async (req, res) => {
    const data = req.body;
  
    const query = `INSERT INTO 
    dbo.Product (ID,_Name,_Image,_Description,CategoryID,Color,Price,Quantity,SupplierID) 
    VALUES ('${uuidv4()}',N'${data.name}',N'${data.image}'
    ,N'${data.description}','4IvLY'
    ,N'${data.color}','$${data.price}',${data.quantity},'4fqqv1bixCJERHpTHRzY85BRkTFv')`
    console.log(query);
    try {
      const pool = await conn;
      return await pool.query(query, (err, data) => {
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
  