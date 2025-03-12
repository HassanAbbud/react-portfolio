const User = require('../models/user.model');

// Create and Save a new User
exports.create = async (req, res) => {
  // Validate request
  if (!req.body.name || !req.body.email || !req.body.password) {
    return res.status(400).send({
      message: "Content cannot be empty!"
    });
  }

  try {
    // Create a User
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });

    // Save User in the database
    const data = await user.save();
    res.status(201).send(data);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the User."
    });
  }
};

// Retrieve all Users from the database
exports.findAll = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving users."
    });
  }
};

// Find a single User with an id
exports.findOne = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send({
        message: `User not found with id ${req.params.id}`
      });
    }
    res.status(200).send(user);
  } catch (err) {
    if (err.kind === 'ObjectId') {
      return res.status(404).send({
        message: `User not found with id ${req.params.id}`
      });
    }
    return res.status(500).send({
      message: `Error retrieving user with id ${req.params.id}`
    });
  }
};

// Update a User by the id in the request
exports.update = async (req, res) => {
  // Validate Request
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, useFindAndModify: false }
    );
    
    if (!user) {
      return res.status(404).send({
        message: `Cannot update User with id=${req.params.id}. Maybe User was not found!`
      });
    }
    
    res.status(200).send({
      message: "User was updated successfully.",
      data: user
    });
  } catch (err) {
    res.status(500).send({
      message: `Error updating User with id=${req.params.id}`
    });
  }
};

// Delete a User with the specified id in the request
exports.delete = async (req, res) => {
  try {
    // Log the ID to verify what's being received
    console.log("Attempting to delete contact with ID:", req.params.id);
    
    // Use findByIdAndDelete instead of findByIdAndRemove
    const contact = await User.findByIdAndDelete(req.params.id);
    
    if (!contact) {
      console.log("User not found");
      return res.status(404).send({
        message: `Cannot delete User with id=${req.params.id}. User was not found!`
      });
    }

    console.log("User deleted successfully:", contact);
    res.status(200).send({
      message: "User was deleted successfully!"
    });
  } catch (err) {
    console.error("Error during deletion:", err);
    res.status(500).send({
      message: `Could not delete User with id=${req.params.id}`,
      error: err.message
    });
  }
};

// Delete all Users from the database
exports.deleteAll = async (req, res) => {
  try {
    const data = await User.deleteMany({});
    res.status(200).send({
      message: `${data.deletedCount} Users were deleted successfully!`
    });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while removing all users."
    });
  }
};