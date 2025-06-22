import React from 'react';

function ListadoAlumnos({ alumnos, eliminarAlumno, setAlumnoEnEdicion, calcularNotaFinal }) {
  if (alumnos.length === 0) {
    return (
      <div className="alert alert-info text-center" role="alert">
        No hay alumnos registrados. Ingresa datos válidos.
      </div>
    );
  }

  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover text-center align-middle">
        <thead className="table-dark">
          <tr>
            <th>Nombre del Alumno</th>
            <th>Asignatura</th>
            <th>Nota 1</th>
            <th>Nota 2</th>
            <th>Nota 3</th>
            <th>Nota 4</th>
            <th>Nota Final</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {alumnos.map((alumno) => {
            const notaFinal = calcularNotaFinal(alumno.notas);

            return (
              <tr key={alumno.id}>
                <td>{`${alumno.nombre} ${alumno.apellido}`}</td>
                <td>{alumno.asignatura}</td>
                <td>{alumno.notas.nota1}</td>
                <td>{alumno.notas.nota2}</td>
                <td>{alumno.notas.nota3}</td>
                <td>{alumno.notas.nota4}</td>
                <td className={`fw-bold ${notaFinal < 4 ? 'text-danger' : ''}`}>
                  {notaFinal.toFixed(2)}
                </td>
                <td>
                  <div className="d-grid gap-2">
                    <button 
                      className="btn btn-warning btn-sm" 
                      onClick={() => setAlumnoEnEdicion(alumno)}>
                      Modificar
                    </button>
                    <button 
                      className="btn btn-danger btn-sm" 
                      onClick={() => eliminarAlumno(alumno.id)}>
                      Eliminar
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ListadoAlumnos;