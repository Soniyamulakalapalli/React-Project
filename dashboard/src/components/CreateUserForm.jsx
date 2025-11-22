import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function CreateUserForm() {
  const { users, setUsers } = useContext(UserContext);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: { name: "" }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, { ...form, id: users.length + 100 }]);
    setForm({ name: "", email: "", phone: "", company: { name: "" } });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        width: "350px",
        margin: "20px auto",
        padding: "20px",
        borderRadius: "10px",
        background: "#fff",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h3 style={{ textAlign: "center", marginBottom: "10px", color: "#333" }}>
        Create New User
      </h3>

      <input
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        style={inputStyle}
      />

      <input
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        style={inputStyle}
      />

      <input
        placeholder="Phone"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        style={inputStyle}
      />

      <input
        placeholder="Company"
        value={form.company.name}
        onChange={(e) =>
          setForm({ ...form, company: { name: e.target.value } })
        }
        style={inputStyle}
      />

      <button
        style={{
          padding: "10px",
          border: "none",
          borderRadius: "6px",
          background: "#007bff",
          color: "white",
          fontSize: "16px",
          cursor: "pointer",
          transition: "0.2s",
        }}
        onMouseOver={(e) => (e.target.style.background = "#0056cc")}
        onMouseOut={(e) => (e.target.style.background = "#007bff")}
      >
        Create
      </button>
    </form>
  );
}

// Reusable input style
const inputStyle = {
  padding: "10px 12px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "14px",
  outline: "none",
  transition: "0.2s",
};
