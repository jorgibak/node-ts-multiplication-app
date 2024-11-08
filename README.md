# Multiplication Table Generator
Este proyecto genera una tabla de multiplicar en función de una base proporcionada y permite guardarla en un archivo de texto en una ubicación especificada. Sigue principios de Clean Code y utiliza la arquitectura basada en casos de uso.

## Características
- Genera tablas de multiplicar en función de una base y un límite.
- Opción para mostrar la tabla generada en la consola.
- Guarda la tabla generada en un archivo .txt en una ubicación específica.
- Control de parámetros mediante yargs.

## Estructura del Proyecto
- app.js: Punto de entrada de la aplicación.
- presentation/server-app.ts: Maneja la ejecución principal de la aplicación.
- domain/use-cases/create-table.use-case.ts: Lógica de negocio para la creación de la tabla de multiplicar.
- domain/use-cases/save-file.use-case.ts: Lógica de negocio para guardar el archivo con la tabla generada.

# Instalación
- Clona el repositorio.
- Instala las dependencias:

```
npm install
```

# Uso
Puedes ejecutar el programa utilizando Node.js. A continuación te mostramos algunos ejemplos de uso.

## Comando básico
Para generar una tabla de multiplicar con base 5 y límite de 10, y guardarla en un archivo:

```
node app --b 5 --l 10 --s --n "mi_tabla" --d "output"
```

### Parámetros
--b (base): Número base de la tabla de multiplicar (obligatorio).
--l (limit): Límite de la tabla (opcional, por defecto 10).
--s (showTable): Muestra la tabla en la consola (opcional).
--n (fileName): Nombre del archivo de salida (opcional, por defecto "table").
--d (fileDestination): Carpeta donde se guardará el archivo (opcional, por defecto "outputs").

Ejemplo
Para generar una tabla de multiplicar de 7 con un límite de 12, mostrarla en la consola, y guardarla en la carpeta output/ con el nombre tabla_7:

```
node app --b 7 --l 12 --s --n "tabla_7" --d "output"

```

## Arquitectura
El proyecto sigue principios de Clean Code y se organiza en capas separadas:

- Presentation Layer: Se encarga de la interfaz entre el usuario y la lógica de negocio. Aquí es donde se recibe la entrada y se controla la ejecución del flujo.
- Domain Layer: Contiene la lógica central de la aplicación, como la generación de la tabla y el guardado en un archivo.
- Config Layer: Aquí es donde se gestionan las configuraciones de plugins y herramientas como yargs.