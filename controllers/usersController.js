const { get } = require('express/lib/response');
const db = require('../models');
const express = require('express');
const router = express.Router();
const argon2 = require('argon2')

//GET ALL USER
const getUsers = async (req, res) => {
  try {
    const users = await db.User.findAll();
      res.status(200).json(users)
      
    } catch (error) {
      console.error('Error retrieving data:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
};

//GET SPECIFIC USER
const getUserById = async(req, res) =>{
  try {
      const response = await db.User.findOne({
          attributes:['id','fullName','email','phone'],
          where: {
              id: req.params.id
          }
      });
      res.status(200).json(response);
  } catch (error) {
      res.status(500).json({msg: error.message});
  }
}

//Create New User
const createUser = async(req, res) =>{
  const {fullName, email, password, confPassword, accountType, phone} = req.body;
  if(password !== confPassword) return res.status(400).json({msg: "Password tidak matching"});
  const hashPassword = await argon2.hash(password);
  try {
    await db.User.create({
      fullName: fullName,
      email: email,
      password: hashPassword,
      accountType: accountType,
      phone: phone
    });
    res.status(201).json({msg: "Register Success"});
  } catch (error) {
    res.status(400).json({msg: error.message});
  }
}

//Update Existing User
const updateUser = async(req, res) =>{
  try {
    
  } catch (error) {
    
  }
}

//Delete Existing User
const deleteUser = async(req, res) =>{
  try {
    
  } catch (error) {
    
  }
}



module.exports = {
  getUsers:getUsers, 
  getUserById:getUserById,
  createUser:createUser,
  updateUser:updateUser,
  deleteUser:deleteUser
};