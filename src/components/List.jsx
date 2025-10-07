import { useState } from "react";

function Tasks() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState("");

  const agregarTarea = () => {
    if (nuevaTarea.trim() === "") return;
    setTareas([...tareas, { id: Date.now(), texto: nuevaTarea, completada: false }]);
    setNuevaTarea("");
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter((t) => t.id !== id));
  };

  const editarTarea = (id, nuevoTexto) => {
    setTareas(tareas.map((t) => (t.id === id ? { ...t, texto: nuevoTexto } : t)));
  };

  return (
    <div className="tareas-container" style={{ textAlign: "center", marginTop: "40px" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>Escribe una nueva tarea</h2>

      <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "30px" }}>
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Agregar..."
          style={{
            width: "60%",
            padding: "12px",
            fontSize: "1.1rem",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={agregarTarea}
          style={{
            padding: "12px 20px",
            fontSize: "1.1rem",
            borderRadius: "8px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Agregar
        </button>
      </div>

      <h3 style={{ fontSize: "1.5rem", marginBottom: "15px" }}>Mis tareas</h3>

      {tareas.length === 0 ? (
        <p style={{ fontSize: "1.1rem", color: "#666" }}>No hay tareas todavía.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {tareas.map((tarea) => (
            <li
              key={tarea.id}
              style={{
                background: "#f9f9f9",
                padding: "10px 15px",
                margin: "8px auto",
                width: "60%",
                borderRadius: "10px",
                fontSize: "1.1rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              {tarea.texto}
              <div>
                <button
                  onClick={() => editarTarea(tarea.id, prompt("Editar tarea:", tarea.texto))}
                  style={{
                    marginRight: "10px",
                    background: "#ffc107",
                    color: "black",
                    border: "none",
                    padding: "6px 10px",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                >
                  ✏️
                </button>
                <button
                  onClick={() => eliminarTarea(tarea.id)}
                  style={{
                    background: "#dc3545",
                    color: "white",
                    border: "none",
                    padding: "6px 10px",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                >
                  🗑️
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Tasks;
