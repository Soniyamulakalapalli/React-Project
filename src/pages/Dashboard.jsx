import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import UserCard from "../components/UserCard";
import CreateUserForm from "../components/CreateUserForm";

export default function Dashboard() {
  const { users } = useContext(UserContext);
  const [search, setSearch] = useState("");

  const filtered = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={dashboardStyle}>
      <h1 style={titleStyle}>User Dashboard</h1>

      <input
        style={searchStyle}
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <CreateUserForm />

      <div style={gridStyle}>
        {filtered.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

// =================== Inline Styles ===================

const dashboardStyle = {
  maxWidth: "900px",
  margin: "0 auto",
  padding: "20px",
  background: "#f5f6fa",
  minHeight: "100vh",
  fontFamily: "Arial, sans-serif",
};

const titleStyle = {
  textAlign: "center",
  marginBottom: "20px",
  color: "#2c3e50",
  fontSize: "32px",
};

const searchStyle = {
  width: "100%",
  padding: "12px 15px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "16px",
  marginBottom: "20px",
  outline: "none",
  transition: "0.2s",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
  gap: "20px",
  marginTop: "20px",
};
