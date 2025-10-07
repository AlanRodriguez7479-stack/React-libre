import { useState } from "react";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");

  // Función para agregar nota
  const addNote = () => {
    if (titulo.trim() === "" && contenido.trim() === "") return;

    const nuevaNota = {
      id: Date.now(),
      titulo: titulo.trim(),
      contenido: contenido.trim(),
      fecha: new Date().toLocaleString(), // fecha y hora
    };

    setNotes((prev) => [...prev, nuevaNota]); // se agrega la nueva nota
    setTitulo("");  // limpiar input
    setContenido(""); // limpiar textarea
  };

  return (
    <div className="notes-container">
      <h2>Notas personales</h2>

      <div className="note-form">
        <input
          type="text"
          placeholder="Título de la nota"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <textarea
          placeholder="Contenido de la nota..."
          value={contenido}
          onChange={(e) => setContenido(e.target.value)}
        />
        <button onClick={addNote}>Guardar nota</button>
      </div>

      <ul className="notes-list">
        {notes.map((n) => (
          <li key={n.id} className="note-item">
            <h3>{n.titulo}</h3>
            <p>{n.contenido}</p>
            <small>Creada: {n.fecha}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notes;
