import React, { useState, useEffect } from 'react';

function FormularioAlumno({ agregarAlumno, modificarAlumno, alumnoEnEdicion, setAlumnoEnEdicion }) {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [asignatura, setAsignatura] = useState('');
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  const [nota3, setNota3] = useState('');
  const [nota4, setNota4] = useState('');

  useEffect(() => {
    if (alumnoEnEdicion) {
      setNombre(alumnoEnEdicion.nombre);
      setApellido(alumnoEnEdicion.apellido);
      setAsignatura(alumnoEnEdicion.asignatura);
      setNota1(alumnoEnEdicion.notas.nota1);
      setNota2(alumnoEnEdicion.notas.nota2);
      setNota3(alumnoEnEdicion.notas.nota3);
      setNota4(alumnoEnEdicion.notas.nota4);
    } else {
      limpiarFormulario();
    }
  }, [alumnoEnEdicion]);

  const limpiarFormulario = () => {
    setNombre('');
    setApellido('');
    setAsignatura('');
    setNota1('');
    setNota2('');
    setNota3('');
    setNota4('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !apellido || !asignatura || nota1 === '' || nota2 === '' || nota3 === '' || nota4 === '') {
      alert('Todos los campos son obligatorios');
      return;
    }

    const datosAlumno = {
      nombre,
      apellido,
      asignatura,
      notas: {
        nota1: parseFloat(nota1),
        nota2: parseFloat(nota2),
        nota3: parseFloat(nota3),
        nota4: parseFloat(nota4),
      },
    };

    if (alumnoEnEdicion) {
      modificarAlumno({ ...datosAlumno, id: alumnoEnEdicion.id });
    } else {
      agregarAlumno({ ...datosAlumno, id: Date.now() });
    }

    limpiarFormulario();
  };

  return (
    <div className="card">
      <div className="card-header fw-bold">
        {alumnoEnEdicion ? 'Modificar Alumno' : 'Ingresar Alumno'}
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Nombre del Alumno" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Apellido del Alumno" value={apellido} onChange={(e) => setApellido(e.target.value)} required />
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Asignatura" value={asignatura} onChange={(e) => setAsignatura(e.target.value)} required />
          </div>
          <div className="mb-3">
            <input type="number" className="form-control" step="0.1" min="1" max="7" placeholder="Nota 1 (15%)" value={nota1} onChange={(e) => setNota1(e.target.value)} required />
          </div>
          <div className="mb-3">
            <input type="number" className="form-control" step="0.1" min="1" max="7" placeholder="Nota 2 (25%)" value={nota2} onChange={(e) => setNota2(e.target.value)} required />
          </div>
          <div className="mb-3">
            <input type="number" className="form-control" step="0.1" min="1" max="7" placeholder="Nota 3 (30%)" value={nota3} onChange={(e) => setNota3(e.target.value)} required />
          </div>
          <div className="mb-3">
            <input type="number" className="form-control" step="0.1" min="1" max="7" placeholder="Nota 4 (30%)" value={nota4} onChange={(e) => setNota4(e.target.value)} required />
          </div>

          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary">
              {alumnoEnEdicion ? 'Guardar Cambios' : 'Agregar Alumno'}
            </button>
            {alumnoEnEdicion && (
              <button type="button" className="btn btn-secondary" onClick={() => setAlumnoEnEdicion(null)}>
                Cancelar Edición
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormularioAlumno;