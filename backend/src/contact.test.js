import test from "node:test";
import assert from "node:assert/strict";
import express from "express";
import contactRoutes from "./routes/contactRoutes.js";
import { Contact } from "./models/Contact.js";

test("Contact Routes - router mounts without errors", () => {
  const app = express();
  app.use(express.json());
  app.use("/api/contact", contactRoutes);
  assert.ok(app);
});

test("Contact Controller - createContact rejects missing fields", async () => {
  const { createContact } = await import("./controllers/contactController.js");

  let statusCode = null;
  let responseData = null;

  const req = {
    body: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  };

  const res = {
    status(code) {
      statusCode = code;
      return this;
    },
    json(data) {
      responseData = data;
      return this;
    },
  };

  await createContact(req, res);

  assert.equal(statusCode, 400);
  assert.equal(responseData.success, false);
  assert.match(responseData.message, /Please provide all required fields/);
});

test("Contact Model - schema validates email and required fields", () => {
  const invalidDoc = new Contact({
    name: "John",
    email: "not-an-email",
    // phone missing
    // message missing
  });

  const error = invalidDoc.validateSync();
  assert.ok(error);
  assert.ok(error.errors.email);
  assert.ok(error.errors.phone);
  assert.ok(error.errors.message);
});
