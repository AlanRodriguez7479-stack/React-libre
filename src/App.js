import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import Calendar from "./components/Calendar";
import Notes from "./components/Notes";
import PersonalInfo from "./components/PersonalInfo";
import "./App.css";

function App() {
  const [view, setView] = useState("tasks");        // Vista actual
  const [darkMode, setDarkMode] = useState(false);  // Modo claro/oscuro
  const [tareas, setTareas] = useState([]);         // Lista de tareas

  // === Función para agregar tarea ===
  const agregarTarea = (texto) => {
    if (!texto || texto.trim() === "") return;
    const nueva = { id: Date.now(), texto: texto.trim() };
    setTareas((prev) => [...prev, nueva]);
  };

  // === Función para eliminar tarea ===
  const eliminarTarea = (id) => {
    setTareas((prev) => prev.filter((t) => t.id !== id));
  };

  // === Función para editar tarea ===
  const editarTarea = (id, nuevoTexto) => {
    setTareas((prev) =>
      prev.map((t) => (t.id === id ? { ...t, texto: nuevoTexto } : t))
    );
  };

  

  // === Renderizar la vista según la sección seleccionada ===
  const renderView = () => {
    switch (view) {
      case "calendar":
        return <Calendar />;
      case "notes":
        return <Notes />;
      case "info":
        return <PersonalInfo />;
      default:
        return (
          <>
            <Form agregarTarea={agregarTarea} />   {/* PASAR FUNCION CORRECTA */}
            <List
              tareas={tareas}
              eliminarTarea={eliminarTarea}
              editarTarea={editarTarea}
            />
          </>
        );
    }
  };

  return (
    <div className={`app-container ${darkMode ? "dark" : "light"}`}>
      <header className="header">
        <h1>Mi Agenda Personal</h1>
        <div className="top-controls">
          <nav>
            <button onClick={() => setView("tasks")}>Tareas</button>
            <button onClick={() => setView("calendar")}>Calendario</button>
            <button onClick={() => setView("notes")}>Notas</button>
            <button onClick={() => setView("info")}>Información</button>
          </nav>
          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀️ Modo Claro" : "🌙 Modo Oscuro"}
          </button>
        </div>
      </header>

      {/* Renderizado dinámico de la sección */}
      {renderView()}
    </div>
  );
}

export default App;
