const express = require('express');
const db = require('../models');
const { sequelize } = require("../models");

//GET ALL ORDERS FROM 1 USER
const getOrders = async (req, res) => {
    const user_id = req.params.user_id; // Change 'id' to 'user_id'
    try {
      const [order] = await sequelize.query(
        `SELECT * FROM orders JOIN detailProducts ON orders.detail_id = detailProducts.id WHERE orders.user_id = ${user_id};`
      );
  
      return res.status(200).json({
        data: order,
      });
    } catch (error) {
      console.error('Error retrieving data:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  

  //GET SPECIFIC ORDER
  const getOrdersById = async (req, res) => {
    try {
      const response = await db.orders.findOne({
        where: { id: req.params.id },
      });
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  };

//CREATE NEW ORDER
  const createOrder = async(req, res) =>{
    const {user_id, detail_id} = req.body;
    try {
      await db.orders.create({
        user_id: user_id,
        detail_id: detail_id,
      });
      res.status(201).json({msg: "Product Added"});
    } catch (error) {
      res.status(400).json({msg: error.message});
    }
  }

  //Delete Existing Order
const deleteOrder = async(req, res) =>{
    const order = await db.orders.findOne({
        where: {
            id: req.params.id
        }
    });
    if(!order) return res.status(404).json({msg: "No Order Found"});
    try {
        await db.orders.destroy({
            where:{
                id: order.id
            }
        });
        res.status(200).json({msg: "Order Deleted"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
  }

  
module.exports = {
    getOrders:getOrders, 
    getOrdersById:getOrdersById,
    createOrder:createOrder,
    deleteOrder:deleteOrder,
  };