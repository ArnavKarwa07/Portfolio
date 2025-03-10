import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // In a real application, you would send this data to your backend
    setSubmitted(true);
    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    // Reset submission status after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            "@media (max-width: 768px)": {
              gridTemplateColumns: "1fr",
            },
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "1.5rem",
                marginBottom: "1.5rem",
              }}
            >
              Get In Touch
            </h3>
            <p
              style={{
                marginBottom: "2rem",
                lineHeight: 1.7,
              }}
            >
              I'm currently looking for new opportunities. Whether you have a
              question or just want to say hi, I'll try my best to get back to
              you!
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <div>
                  <h4 style={{ fontWeight: "bold", marginBottom: "0.2rem" }}>
                    Email
                  </h4>
                  <a
                    href="mailto:arnavkarwa07@gmail.com"
                    style={{
                      color: document.body.classList.contains("dark")
                        ? "#e0e0e0"
                        : "#333333",
                      textDecoration: "none",
                    }}
                  >
                    arnavkarwa07@gmail.com
                  </a>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <div>
                  <h4 style={{ fontWeight: "bold", marginBottom: "0.2rem" }}>
                    LinkedIn
                  </h4>
                  <a
                    href="https://www.linkedin.com/in/arnav-karwa/"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color: document.body.classList.contains("dark")
                        ? "#e0e0e0"
                        : "#333333",
                      textDecoration: "none",
                    }}
                  >
                    linkedin.com/in/arnav-karwa
                  </a>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                <div>
                  <h4 style={{ fontWeight: "bold", marginBottom: "0.2rem" }}>
                    GitHub
                  </h4>
                  <a
                    href="https://github.com/ArnavKarwa07"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color: document.body.classList.contains("dark")
                        ? "#e0e0e0"
                        : "#333333",
                      textDecoration: "none",
                    }}
                  >
                    github.com/ArnavKarwa07
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="card"
            style={{
              padding: "2rem",
            }}
          >
            {submitted ? (
              <div
                style={{
                  textAlign: "center",
                  padding: "2rem",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4CC790"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <h3
                  style={{
                    marginTop: "1.5rem",
                    marginBottom: "1rem",
                  }}
                >
                  Message Sent!
                </h3>
                <p>Thanks for reaching out. I'll get back to you soon!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div
                  style={{
                    marginBottom: "1.5rem",
                  }}
                >
                  <label
                    htmlFor="name"
                    style={{
                      display: "block",
                      marginBottom: "0.5rem",
                      fontWeight: "500",
                    }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "0.8rem",
                      borderRadius: "5px",
                      border: `1px solid ${
                        document.body.classList.contains("dark")
                          ? "#444"
                          : "#ddd"
                      }`,
                      backgroundColor: document.body.classList.contains("dark")
                        ? "#2a2a2a"
                        : "#fff",
                      color: document.body.classList.contains("dark")
                        ? "#e0e0e0"
                        : "#333333",
                      outline: "none",
                    }}
                  />
                </div>
                <div
                  style={{
                    marginBottom: "1.5rem",
                  }}
                >
                  <label
                    htmlFor="email"
                    style={{
                      display: "block",
                      marginBottom: "0.5rem",
                      fontWeight: "500",
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "0.8rem",
                      borderRadius: "5px",
                      border: `1px solid ${
                        document.body.classList.contains("dark")
                          ? "#444"
                          : "#ddd"
                      }`,
                      backgroundColor: document.body.classList.contains("dark")
                        ? "#2a2a2a"
                        : "#fff",
                      color: document.body.classList.contains("dark")
                        ? "#e0e0e0"
                        : "#333333",
                      outline: "none",
                    }}
                  />
                </div>
                <div
                  style={{
                    marginBottom: "1.5rem",
                  }}
                >
                  <label
                    htmlFor="message"
                    style={{
                      display: "block",
                      marginBottom: "0.5rem",
                      fontWeight: "500",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "0.8rem",
                      borderRadius: "5px",
                      border: `1px solid ${
                        document.body.classList.contains("dark")
                          ? "#444"
                          : "#ddd"
                      }`,
                      backgroundColor: document.body.classList.contains("dark")
                        ? "#2a2a2a"
                        : "#fff",
                      color: document.body.classList.contains("dark")
                        ? "#e0e0e0"
                        : "#333333",
                      outline: "none",
                      resize: "vertical",
                    }}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{
                    width: "100%",
                  }}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
