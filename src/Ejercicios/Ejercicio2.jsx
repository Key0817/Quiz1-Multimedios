import React, { useState } from 'react';


function Ejercicio2() {
  const [nombre, setNombre] = useState("No definido");

  const handleChange = (event) => {
    setNombre(event.target.value);
  };

  return (
    <div className="container">
      <h1>Ingresa tu nombre</h1>
      <input
        type="text"
        value={nombre}
        onChange={handleChange}
        placeholder="Escribe tu nombre aquí"
      />
      <p>Tu nombre es: {nombre}</p>
    </div>
  );
}

export default Ejercicio2;
