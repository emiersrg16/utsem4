import { useState } from "react";

function MyForm3() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Email mu adalah: ${name}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Masukkan Email:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  )
}

export default MyForm3;