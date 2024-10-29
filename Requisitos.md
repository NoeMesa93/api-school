## API School

## API Students

### Recuperar todos los estudiantes

URL: /api/students
MÉTODO: GET
HEADERS: X
BODY: X

Respuesta:

- Un array con todos los estudiantes.

### Recuperar un estudiante por su ID

URL: /api/students/:id
MÉTODO: GET
HEADERS: X
BODY: X

Respuesta:

- Un objeto con el estudiante encontrado.

### Crear un estudiante

URL: /api/students
MÉTODO: POST
HEADERS: X
BODY: {
"name": "Juan",
"age": 20,
"email": "juan@example.com",
"phone": "1234567890",
"address": "Calle Del Estudiante"
}

Respuesta:

- Un objeto con el estudiante creado.

### Actualizar un estudiante

URL: /api/students/:id
MÉTODO: PUT
HEADERS: X
BODY: {
"name": "Juan",
"age": 21,
"email": "juan@example.com",
"phone": "1234567890",
"address": "Calle Del Estudiante"
}

Respuesta:

- Un objeto con el estudiante actualizado.

### Eliminar un estudiante

URL: /api/students/:id
MÉTODO: DELETE
HEADERS: X
BODY: X

Respuesta:

- Un objeto con el estudiante eliminado.
