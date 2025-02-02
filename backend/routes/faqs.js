const express = require("express");
const router = express.Router();
const db = require("../db");
const translate = require("google-translate-api-x");

router.get("/", async (req, res) => {
  const lang = req.query.lang || "en"; 
  const search = req.query.search || "";  
  
  
  const sql = `SELECT * FROM faqs WHERE question LIKE ?`;
  
  db.query(sql, [`%${search}%`], async (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

   
    const translatedFAQs = await Promise.all(
      results.map(async (faq) => {
        if (lang !== "en") {
          const translatedQuestion = await translate(faq.question, { to: lang }).then((res) => res.text);
          const translatedAnswer = await translate(faq.answer, { to: lang }).then((res) => res.text);
          return { ...faq, question: translatedQuestion, answer: translatedAnswer };
        }
        return faq;
      })
    );

    res.json(translatedFAQs);
  });
});


router.post("/", (req, res) => {
  const { question, answer } = req.body;
  if (!question || !answer) return res.status(400).json({ error: "All fields are required" });

  const sql = "INSERT INTO faqs (question, answer) VALUES (?, ?)";
  db.query(sql, [question, answer], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "FAQ added successfully", id: result.insertId });
  });
});


router.put("/:id", (req, res) => {
  const { question, answer } = req.body;
  const { id } = req.params;
  const sql = "UPDATE faqs SET question = ?, answer = ? WHERE id = ?";
  db.query(sql, [question, answer, id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "FAQ updated successfully" });
  });
});


router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM faqs WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "FAQ deleted successfully" });
  });
});

module.exports = router;
