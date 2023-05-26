import { useState } from "react";

function MyForm2() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`alamat mu ada di: ${name}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Masukkan alamat:
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

export default MyForm2;