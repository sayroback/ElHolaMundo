const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hola soy orders");
});
router.get("/:id", (req, res) => {
  res.send(red.params.id);
});
router.post("/", (req, res) => {
  res.send("soy post");
});
router.put("/:id", (req, res) => {
  res.send("soy put");
});
router.delete("/:id", (req, res) => {
  res.send("soy delete");
});

module.exports = router;
