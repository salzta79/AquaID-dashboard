import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Dashboard() {
  const [stats, setStats] = useState({ visitors: 0, payments: 0, proUsers: 0 });
  const [fishList, setFishList] = useState([]);
  const [newFish, setNewFish] = useState({ name: "", sci: "", img: "", notes: "" });

  useEffect(() => {
    // Placeholder stats until API is connected
    setStats({ visitors: 42, payments: 3, proUsers: 3 });
    setFishList([
      {
        name: "Barramundi",
        sci: "Lates calcarifer",
        img: "https://upload.wikimedia.org/wikipedia/commons/4/42/Barramundi.jpg",
        notes: "Popular sportfish and table fish in Australia."
      },
      {
        name: "Snapper",
        sci: "Pagrus auratus",
        img: "https://upload.wikimedia.org/wikipedia/commons/1/19/Snapper_fish.jpg",
        notes: "Highly prized table fish, found in coastal waters."
      }
    ]);
  }, []);

  const addFish = () => {
    if (!newFish.name || !newFish.sci || !newFish.img) return;
    setFishList([...fishList, newFish]);
    setNewFish({ name: "", sci: "", img: "", notes: "" });
  };

  return (
    <div style={{ padding: "1rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>AquaID Dashboard</h1>
      <div style={{ display: "flex", justifyContent: "space-around", margin: "1rem 0" }}>
        <div><strong>Visitors:</strong> {stats.visitors}</div>
        <div><strong>Payments:</strong> {stats.payments}</div>
        <div><strong>Pro Users:</strong> {stats.proUsers}</div>
      </div>

      <div style={{ margin: "2rem 0" }}>
        <h2>Add New Fish</h2>
        <input placeholder="Name" value={newFish.name} onChange={e => setNewFish({ ...newFish, name: e.target.value })} />
        <input placeholder="Scientific Name" value={newFish.sci} onChange={e => setNewFish({ ...newFish, sci: e.target.value })} />
        <input placeholder="Image URL" value={newFish.img} onChange={e => setNewFish({ ...newFish, img: e.target.value })} />
        <input placeholder="Notes" value={newFish.notes} onChange={e => setNewFish({ ...newFish, notes: e.target.value })} />
        <button onClick={addFish}>Add Fish</button>
      </div>

      <div>
        <h2>Fish List</h2>
        <table border="1" cellPadding="5">
          <thead>
            <tr>
              <th>Name</th><th>Scientific</th><th>Image</th><th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {fishList.map((fish, i) => (
              <tr key={i}>
                <td>{fish.name}</td>
                <td>{fish.sci}</td>
                <td><img src={fish.img} alt={fish.name} style={{ width: "80px" }} /></td>
                <td>{fish.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}