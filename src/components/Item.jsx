import { useState } from "react";

function Item({ tarea, eliminarTarea, editarTarea }) {
  const [modoEdicion, setModoEdicion] = useState(false);
  const [nuevoTexto, setNuevoTexto] = useState(tarea.texto);

  const guardar = () => {
    if (nuevoTexto.trim() === "") return;
    editarTarea(tarea.id, nuevoTexto.trim());
    setModoEdicion(false);
  };

  return (
    <li className="item">
      {modoEdicion ? (
        <>
          <input
            type="text"
            value={nuevoTexto}
            onChange={(e) => setNuevoTexto(e.target.value)}
          />
          <div className="item-buttons">
            <button onClick={guardar}>💾</button>
            <button onClick={() => setModoEdicion(false)}>❌</button>
          </div>
        </>
      ) : (
        <>
          <span>{tarea.texto}</span>
          <div className="item-buttons">
            <button onClick={() => setModoEdicion(true)}>✏️</button>
            <button onClick={() => eliminarTarea(tarea.id)}>🗑️</button>
          </div>
        </>
      )}
    </li>
  );
}

export default Item;
