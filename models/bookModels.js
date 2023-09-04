const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const booksSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    pages: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    isAvailable: {
      type: Boolean,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Books", booksSchema);
