import { useState } from "react";

function PersonalInfo() {
  const [info, setInfo] = useState({
    nombre: "",
    direccion: "",
    telefono: "",
    emergencia: "",
  });

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  return (
    <div className="info-container">
      <h2>Información personal</h2>
      <form className="info-form">
        <label>Nombre completo</label>
        <input name="nombre" value={info.nombre} onChange={handleChange} />

        <label>Dirección</label>
        <input name="direccion" value={info.direccion} onChange={handleChange} />

        <label>Teléfono</label>
        <input name="telefono" value={info.telefono} onChange={handleChange} />

        <label>Contacto de emergencia</label>
        <input name="emergencia" value={info.emergencia} onChange={handleChange} />
      </form>

      <div className="info-preview">
        <h3>Resumen</h3>
        <p><strong>Nombre:</strong> {info.nombre}</p>
        <p><strong>Dirección:</strong> {info.direccion}</p>
        <p><strong>Teléfono:</strong> {info.telefono}</p>
        <p><strong>Emergencia:</strong> {info.emergencia}</p>
      </div>
    </div>
  );
}

export default PersonalInfo;
