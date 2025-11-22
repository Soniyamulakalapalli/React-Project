import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => setUser(res.data));
  }, [id]);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="details">
      <Link to="/">⬅ Back</Link>
      <h2>{user.name}</h2>

      <p><b>Email:</b> {user.email}</p>
      <p><b>Phone:</b> {user.phone}</p>
      <p><b>Website:</b> {user.website}</p>

      <h3>Address</h3>
      <p>{user.address.street}, {user.address.city}</p>

      <h3>Location</h3>
      <p>Lat: {user.address.geo.lat}</p>
      <p>Lng: {user.address.geo.lng}</p>
    </div>
  );
}
