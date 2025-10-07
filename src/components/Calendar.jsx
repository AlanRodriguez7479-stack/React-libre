import { useState, useEffect } from "react";

function Calendar() {
  const [fechaHora, setFechaHora] = useState(new Date());

  // Actualizar cada segundo
  useEffect(() => {
    const timer = setInterval(() => {
      setFechaHora(new Date());
    }, 1000);

    // Limpiar intervalo al desmontar
    return () => clearInterval(timer);
  }, []);

  const opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const opcionesHora = { hour: '2-digit', minute: '2-digit', second: '2-digit' };

  return (
    <div className="clock-container">
      <h2>Fecha y Hora Actual</h2>
      <p className="fecha">{fechaHora.toLocaleDateString(undefined, opcionesFecha)}</p>
      <p className="hora">{fechaHora.toLocaleTimeString(undefined, opcionesHora)}</p>
    </div>
  );
}

export default Calendar;
