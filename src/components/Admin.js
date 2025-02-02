import React, { useState, useEffect } from "react";
import axios from "axios";
import './admin.css';  // Import the CSS file

const Admin = () => {
  const [faqs, setFaqs] = useState([]);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/faqs")
      .then((res) => setFaqs(res.data))
      .catch((err) => console.error("Error fetching FAQs:", err));
  }, []);

  const handleSubmit = () => {
    if (!question || !answer) return alert("Both fields are required");

    const url = editId
      ? `http://localhost:5000/api/faqs/${editId}`
      : "http://localhost:5000/api/faqs";
    const method = editId ? axios.put : axios.post;

    method(url, { question, answer })
      .then(() => {
        setQuestion("");
        setAnswer("");
        setEditId(null);
        window.location.reload();
      })
      .catch((err) => console.error("Error saving FAQ:", err));
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/api/faqs/${id}`)
      .then(() => window.location.reload())
      .catch((err) => console.error("Error deleting FAQ:", err));
  };

  const handleEdit = (faq) => {
    setEditId(faq.id);
    setQuestion(faq.question);
    setAnswer(faq.answer);
  };

  return (
    <div className="admin-container">
      <h1>Admin Panel</h1>

      <div className="faq-form">
        <input
          className="input-field"
          type="text"
          placeholder="Enter Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <textarea
          className="answer-textarea"
          placeholder="Enter Answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        ></textarea>
        <button onClick={handleSubmit}>{editId ? "Update" : "Add"} FAQ</button>
      </div>

      <div className="faq-list">
        {faqs.map((faq) => (
          <div className="faq-item" key={faq.id}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
            <button onClick={() => handleEdit(faq)}>Edit</button>
            <button onClick={() => handleDelete(faq.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
