const db = require('../models');
const express = require('express');
const router = express.Router();


const getUsers = async (req, res) => {
  try {
    const users = await db.User.findAll();
      res.status(200).json(users)
      
    } catch (error) {
      console.error('Error retrieving data:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = getUsers;