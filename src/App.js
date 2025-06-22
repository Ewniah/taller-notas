import React, { useState } from 'react';
import FormularioAlumno from './components/FormularioAlumno';
import ListadoAlumnos from './components/ListadoAlumnos';

function App() {
  // Estado para guardar el arreglo de alumnos.
  const [alumnos, setAlumnos] = useState([]);
  
  // Estado para guardar el alumno que se está editando. Si es null, no estamos editando.
  const [alumnoEnEdicion, setAlumnoEnEdicion] = useState(null);

  // Esta función agrega un nuevo alumno al arreglo 'alumnos'.
  const agregarAlumno = (alumno) => {
    setAlumnos([...alumnos, alumno]);
  };

  // Esta función elimina un alumno del arreglo usando su id.
  const eliminarAlumno = (id) => {
    // Pide confirmación al usuario antes de eliminar.
    const confirmacion = window.confirm("¿Estás seguro de que deseas eliminar a este alumno?");
    if (confirmacion) {
      const nuevosAlumnos = alumnos.filter(alumno => alumno.id !== id);
      setAlumnos(nuevosAlumnos);
    }
  };
  
  // Esta función actualiza los datos de un alumno que ya existe en el arreglo.
  const modificarAlumno = (alumnoActualizado) => {
    const nuevosAlumnos = alumnos.map(alumno => 
      alumno.id === alumnoActualizado.id ? alumnoActualizado : alumno
    );
    setAlumnos(nuevosAlumnos);
    setAlumnoEnEdicion(null); // Limpia el estado de edición para volver al modo "agregar".
  };

  // Esta función calcula la nota final ponderada de un alumno.
  const calcularNotaFinalIndividual = (notas) => {
    const ponderaciones = {
      nota1: 0.15, // Ponderación de nota 1: 15%
      nota2: 0.25, // Ponderación de nota 2: 25%
      nota3: 0.30, // Ponderación de nota 3: 30%
      nota4: 0.30, // Ponderación de nota 4: 30%
    }; // Se ponderan las notas según la guía de trabajo.

    const notaFinal = 
      (notas.nota1 * ponderaciones.nota1) +
      (notas.nota2 * ponderaciones.nota2) +
      (notas.nota3 * ponderaciones.nota3) +
      (notas.nota4 * ponderaciones.nota4);
    
    return notaFinal;
  };

  // Esta función hace calcula el promedio de las notas finales de todos los alumnos.
  const calcularPromedioGeneral = () => {
    if (alumnos.length === 0) return 0;
  
    const sumaDeNotasFinales = alumnos.reduce((total, alumno) => {
      return total + calcularNotaFinalIndividual(alumno.notas);
    }, 0);
  
    return (sumaDeNotasFinales / alumnos.length).toFixed(2);
  };

  // Calculamos el promedio general una vez para usarlo en la vista.
  const promedioGeneral = calcularPromedioGeneral();

  return (
    <div className="container mt-4">
      <h1 className="text-center text-primary mb-4">Aplicación de Gestión de Alumnos</h1>
      
      <div className="row">
        <div className="col-md-5">
          <FormularioAlumno 
            agregarAlumno={agregarAlumno}
            modificarAlumno={modificarAlumno}
            alumnoEnEdicion={alumnoEnEdicion}
            setAlumnoEnEdicion={setAlumnoEnEdicion}
          />
        </div>

        <div className="col-md-7">
          {alumnos.length > 0 && (
            <h2 className="text-center">
              Promedio Final de la Asignatura: 
              <span className={`badge ${promedioGeneral < 4 ? 'bg-danger' : 'bg-success'}`}>
                {promedioGeneral}
              </span>
            </h2>
          )}
          <ListadoAlumnos 
            alumnos={alumnos}
            eliminarAlumno={eliminarAlumno}
            setAlumnoEnEdicion={setAlumnoEnEdicion}
            calcularNotaFinal={calcularNotaFinalIndividual}
          />
        </div>
      </div>
    </div>
  );
}

export default App;