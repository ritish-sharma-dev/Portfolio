import express from "express";
import contactMessage from "../models/contactMessages.js";

export const contactMessagesSubmit = (req, res) => {
  try {
    const { fullName, email, subject, message } = req.body;
    if (!fullName || !email || !subject || !message) {
      return res.json({ success: false, message: "Missing Details" });
    }
    const newContactMessage = new contactMessage({
      fullName,
      email,
      subject,
      message,
    });
    newContactMessage.save();
    console.log(newContactMessage);
    res.json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
