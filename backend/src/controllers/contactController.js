import { Contact } from "../models/Contact.js";

/**
 * @desc    Submit a new contact message
 * @route   POST /api/contact
 * @access  Public
 */
export const createContact = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields: name, email, phone, and message.",
      });
    }

    // Save contact submission to MongoDB
    const newContact = await Contact.create({
      name,
      email,
      phone,
      subject: subject || "General Inquiry",
      message,
    });

    return res.status(201).json({
      success: true,
      message: "Thank you for contacting us! Our team will get in touch with you shortly.",
      data: newContact,
    });
  } catch (error) {
    console.error("[Contact Controller Error - createContact]:", error);

    // Mongoose validation error handling
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({
        success: false,
        message: messages.join(", "),
      });
    }

    return res.status(500).json({
      success: false,
      message: "Server error occurred while saving contact message. Please try again later.",
    });
  }
};

/**
 * @desc    Get all contact messages
 * @route   GET /api/contact
 * @access  Public
 */
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts,
    });
  } catch (error) {
    console.error("[Contact Controller Error - getContacts]:", error);
    return res.status(500).json({
      success: false,
      message: "Server error occurred while fetching contacts.",
    });
  }
};

/**
 * @desc    Get a single contact by ID
 * @route   GET /api/contact/:id
 * @access  Public
 */
export const getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact message not found.",
      });
    }

    return res.status(200).json({
      success: true,
      data: contact,
    });
  } catch (error) {
    console.error("[Contact Controller Error - getContactById]:", error);
    return res.status(500).json({
      success: false,
      message: "Server error occurred while fetching contact.",
    });
  }
};

/**
 * @desc    Delete a contact by ID
 * @route   DELETE /api/contact/:id
 * @access  Public
 */
export const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact message not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Contact message removed successfully.",
    });
  } catch (error) {
    console.error("[Contact Controller Error - deleteContact]:", error);
    return res.status(500).json({
      success: false,
      message: "Server error occurred while deleting contact.",
    });
  }
};

