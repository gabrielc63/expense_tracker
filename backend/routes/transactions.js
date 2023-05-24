const router = require("express").Router();
const { addIncome } = require("../controllers/income");

router.post("/add_income", addIncome);

module.exports = router;
