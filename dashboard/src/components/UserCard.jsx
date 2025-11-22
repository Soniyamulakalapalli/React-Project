import axios from "axios";
import { Link } from "react-router-dom";

export default function UserCard({ user }) {
  return (
    <Link
      to={`/user/${user.id}`}
      style={cardStyle}
    >
      <h3 style={titleStyle}>{user.name}</h3>

      <p style={textStyle}>📧 {user.email}</p>
      <p style={textStyle}>📞 {user.phone}</p>
      <p style={textStyle}>🏢 {user.company?.name}</p>
    </Link>
  );
}

const cardStyle = {
  display: "block",
  padding: "18px",
  margin: "12px 0",
  background: "#ffffff",
  borderRadius: "10px",
  textDecoration: "none",
  color: "#333",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  transition: "0.3s ease",
  fontFamily: "Arial, sans-serif",
  cursor: "pointer",
};

const titleStyle = {
  margin: "0 0 10px 0",
  color: "#007bff",
  fontSize: "20px",
  fontWeight: "bold",
};

const textStyle = {
  margin: "5px 0",
  fontSize: "14px",
  color: "#555",
};

