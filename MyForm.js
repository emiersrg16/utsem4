import { useState } from "react";

function MyForm() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Nama mu adalah: ${name}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Masukkan nama mu:
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

export default MyForm;