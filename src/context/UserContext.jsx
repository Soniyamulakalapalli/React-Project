import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      <div style={wrapperStyle}>
        {children}
      </div>
    </UserContext.Provider>
  );
};

// 🔥 Nice inline UI layout style
const wrapperStyle = {
  maxWidth: "900px",
  margin: "0 auto",
  padding: "20px",
  background: "#f9f9f9",
  minHeight: "100vh",
  fontFamily: "Arial, sans-serif",
};
