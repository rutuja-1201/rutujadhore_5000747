const express = require("express");
const routing = express.Router();
const book = require("../service/details");

routing.get("/getbook", (req, res) => {
  result = book.retrievebook();
  res.json(result);
});
routing.get("/getbook/particular", (req, res) => {
  bid = req.params.bid;
  console.log(bid);
  result = book.retrievebookdetail(bid);
  if (result) res.json(result);
  else res.json(" no book detsils found");
});

routing.post("/books", (req, res) => {
  var BOOK = JSON.stringify(req.body);
  result = book.addbookdetail(BOOK);
  if (result) res.json("succcessfully added book detail");
  else res.json("error");
});

routing.delete("/delbooks", (req, res) => {
  bid = req.params.bid;
  result = book.deletbookdetail(bid);
  if (result) res.json("successfully deleted the book");
  else res.json("Error");
});

routing.put("/:id", (req, res) => {

    const book = req.body;
  bookdetail.update(parseInt(req.params.id), book);
  res.status(200).send();

    /*
  bid = req.params.bid;
  key = req.params.key;
  value = req.params.value;
  result = book.updatedetail(bid, key, value);

  if (result) res.json(" successfully updated the book");
  else res.json("error");*/
});

module.exports = routing;
