const Contact = require('../models/contact.model');

// Create and Save a new Contact
exports.create = async (req, res) => {
  // Validate request
  if (!req.body.firstname || !req.body.lastname || !req.body.email) {
    return res.status(400).send({
      message: "Content cannot be empty!"
    });
  }

  try {
    // Create a Contact
    const contact = new Contact({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email
    });

    // Save Contact in the database
    const data = await contact.save();
    res.status(201).send(data);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the Contact."
    });
  }
};

// Retrieve all Contacts from the database
exports.findAll = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).send(contacts);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving contacts."
    });
  }
};

// Find a single Contact with an id
exports.findOne = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).send({
        message: `Contact not found with id ${req.params.id}`
      });
    }
    res.status(200).send(contact);
  } catch (err) {
    if (err.kind === 'ObjectId') {
      return res.status(404).send({
        message: `Contact not found with id ${req.params.id}`
      });
    }
    return res.status(500).send({
      message: `Error retrieving contact with id ${req.params.id}`
    });
  }
};

// Update a Contact by the id in the request
exports.update = async (req, res) => {
  // Validate Request
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  try {
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, useFindAndModify: false }
    );
    
    if (!contact) {
      return res.status(404).send({
        message: `Cannot update Contact with id=${req.params.id}. Maybe Contact was not found!`
      });
    }
    
    res.status(200).send({
      message: "Contact was updated successfully.",
      data: contact
    });
  } catch (err) {
    res.status(500).send({
      message: `Error updating Contact with id=${req.params.id}`
    });
  }
};

// Delete a Contact with the specified id in the request
exports.delete = async (req, res) => {
  try {
    // Log the ID to verify what's being received
    console.log("Attempting to delete contact with ID:", req.params.id);
    
    // Use findByIdAndDelete instead of findByIdAndRemove
    const contact = await Contact.findByIdAndDelete(req.params.id);
    
    if (!contact) {
      console.log("Contact not found");
      return res.status(404).send({
        message: `Cannot delete Contact with id=${req.params.id}. Contact was not found!`
      });
    }

    console.log("Contact deleted successfully:", contact);
    res.status(200).send({
      message: "Contact was deleted successfully!"
    });
  } catch (err) {
    console.error("Error during deletion:", err);
    res.status(500).send({
      message: `Could not delete Contact with id=${req.params.id}`,
      error: err.message
    });
  }
};

// Delete all Contacts from the database
exports.deleteAll = async (req, res) => {
  try {
    const data = await Contact.deleteMany({});
    res.status(200).send({
      message: `${data.deletedCount} Contacts were deleted successfully!`
    });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while removing all contacts."
    });
  }
};