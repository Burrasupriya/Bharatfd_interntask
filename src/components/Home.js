import React, { useState, useEffect } from "react";
import axios from "axios";
import './home.css';  // Import the CSS file

const Home = () => {
  const [language, setLanguage] = useState("en");
  const [faqs, setFaqs] = useState([]);
  const [allFaqs, setAllFaqs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/faqs?lang=${language}`)
      .then((res) => {
        setFaqs(res.data);
        setAllFaqs(res.data);
      })
      .catch((err) => console.error("Error fetching FAQs:", err));
  }, [language]);

  useEffect(() => {
    if (searchQuery === "") {
      setFaqs(allFaqs);
    } else {
      setFaqs(
        allFaqs.filter((faq) =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  }, [searchQuery, allFaqs]);

  return (
    <div className="home-container">
      <h1>FAQs</h1>
      <label>Select Language: </label>
      <select
        className="language-dropdown"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="bn">Bengali</option>
      </select>

      <div>
        <input
          type="text"
          className="search-input"
          placeholder="Search for a question..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="faq-list">
        {faqs.map((faq) => (
          <div className="faq-item" key={faq.id}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
