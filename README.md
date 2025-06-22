# Taller Nota Acumulativa

Este proyecto es una aplicación web desarrollada con React para la gestión de notas de alumnos. Permite a los usuarios realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre los registros de los estudiantes, calculando automáticamente el promedio final de cada alumno y el promedio general de la asignatura.

## ✨ Características Principales

* **Ingresar Alumnos:** Formulario para añadir nuevos alumnos con su nombre, apellido, asignatura y cuatro notas correspondientes.
* **Listar Alumnos:** Tabla que muestra todos los alumnos registrados con sus respectivas notas y su promedio final ponderado.
* **Modificar Alumnos:** Funcionalidad para seleccionar un alumno y editar su información a través del mismo formulario.
* **Eliminar Alumnos:** Opción para eliminar el registro de un alumno de la lista, con una solicitud de confirmación.
* **Cálculo de Promedio Individual:** La nota final de cada alumno se calcula automáticamente basándose en las siguientes ponderaciones:
    * Nota 1: **15%**
    * Nota 2: **25%**
    * Nota 3: **30%**
    * Nota 4: **30%**
* **Cálculo de Promedio General:** La aplicación muestra en tiempo real el promedio de las notas finales de todos los alumnos registrados.
* **Estilo Condicional:** La nota final de un alumno y el promedio general de la asignatura se muestran en color rojo si son inferiores a 4.0, y en verde si son iguales o superiores.
* **Interfaz Responsiva:** Diseño limpio y adaptable a diferentes tamaños de pantalla gracias a Bootstrap.

## 🚀 Tecnologías Utilizadas

Este proyecto fue construido utilizando tecnologías modernas del ecosistema de JavaScript para el desarrollo frontend:

* **[React](https://react.dev/):** Biblioteca principal de JavaScript para construir la interfaz de usuario a través de componentes.
* **[Node.js](https://nodejs.org/):** Utilizado como entorno de ejecución para el servidor de desarrollo de React y la gestión de paquetes.
* **[Bootstrap 5](https://getbootstrap.com/):** Framework de CSS para el diseño y la maquetación de la interfaz, facilitando un diseño responsivo y moderno.
* **HTML5 y CSS3:** Para la estructura y estilos personalizados de la aplicación.
* **Git y GitHub:** Para el control de versiones y el respaldo del código en la nube.

## ⚙️ Instalación y Puesta en Marcha

Para ejecutar este proyecto en tu entorno local, sigue estos sencillos pasos:

1.  **Clonar el repositorio (si está en GitHub):**
    ```bash
    git clone [https://github.com/Ewniah/taller-notas.git](https://github.com/Ewniah/taller-notas.git)
    cd taller-notas
    ```

2.  **Instalar las dependencias del proyecto:**
    Este comando leerá el archivo `package.json` e instalará React y todas las librerías necesarias para que el proyecto funcione.
    ```bash
    npm install
    ```

3.  **Ejecutar la aplicación en modo de desarrollo:**
    Este comando iniciará un servidor de desarrollo local (generalmente en `http://localhost:3000`) y abrirá la aplicación en tu navegador web. La página se recargará automáticamente cada vez que hagas un cambio en el código.
    ```bash
    npm start
    ```

4.  **Generar la versión de producción (opcional):**
    Si deseas crear una versión optimizada para desplegar en un servidor, ejecuta:
    ```bash
    npm run build
    ```
    Esto creará una carpeta `build` con todos los archivos estáticos listos para producción.
