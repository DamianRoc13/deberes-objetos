Video de YouTube: https://youtu.be/MmC_O23h1W4 

## Ejercicio 14 Robot Name

En este ejercicio tenemos que generar un nombre aleatorio en el formato de dos letras mayúsculas seguidas de tres dígitos.
Los nombres deben ser aleatorios: no deben seguir una secuencia predecible.

```typescript
export class Robot {
	public name: string;

	constructor() {
		this.name = this.createName();
		Robot.releasedNames.push(this.name);
	}

	public resetName(): void {
		this.name = this.createName();
		Robot.releasedNames.push(this.name);
	}

	public static releasedNames: string[] = [];
	public static releaseNames(): void {
		Robot.releasedNames = [];
	}

	private createName(): string {
		let result: string = "";
		do {
			const firstChar: string = String.fromCharCode(this.randomNumber());
			const secondChar: string = String.fromCharCode(this.randomNumber());

			let numberStr: string = Math.floor(Math.random() * 999 + 0).toString();

			if (numberStr.length === 2) numberStr = "0" + numberStr;
			if (numberStr.length === 1) numberStr = "00" + numberStr;


			result = firstChar + secondChar + numberStr;
		} while (Robot.releasedNames.indexOf(result) !== -1);

		return result;
	}
	private randomNumber(from: number = 65, to: number = 90) {
		return Math.floor(Math.random() * (to - from + 1) + from);
	}
}
```

```typescript
export class Robot {
```
Declara la clase `Robot` y la exporta, lo que permite que esta clase sea importada y utilizada en otros módulos.

```typescript
	public name: string;
```
Declara una propiedad pública `name` de tipo `string` que almacenará el nombre del robot.

```typescript
	constructor() {
		this.name = this.createName();
		Robot.releasedNames.push(this.name);
	}
```
Define el constructor de la clase `Robot`. Este constructor se ejecuta al crear una nueva instancia de `Robot` y realiza las siguientes acciones:
- `this.name = this.createName();`: Asigna a la propiedad `name` un nombre generado por el método `createName`.
- `Robot.releasedNames.push(this.name);`: Añade el nombre generado a la lista estática `releasedNames` para llevar un registro de los nombres utilizados.

```typescript
	public resetName(): void {
		this.name = this.createName();
		Robot.releasedNames.push(this.name);
	}
```
Define un método público `resetName` que no retorna nada (`void`). Este método:
- Genera un nuevo nombre mediante `this.createName()`.
- Asigna este nuevo nombre a la propiedad `name`.
- Añade el nuevo nombre a la lista estática `releasedNames`.

```typescript
	public static releasedNames: string[] = [];
```
Declara una propiedad estática `releasedNames` que es un array de strings. Esta propiedad almacena todos los nombres generados para asegurar que cada nombre sea único.

```typescript
	public static releaseNames(): void {
		Robot.releasedNames = [];
	}
```
Define un método estático `releaseNames` que no retorna nada (`void`). Este método reinicia la lista de nombres generados, vaciando el array `releasedNames`.

```typescript
	private createName(): string {
		let result: string = "";
		do {
			const firstChar: string = String.fromCharCode(this.randomNumber());
			const secondChar: string = String.fromCharCode(this.randomNumber());

			let numberStr: string = Math.floor(Math.random() * 999 + 0).toString();

			if (numberStr.length === 2) numberStr = "0" + numberStr;
			if (numberStr.length === 1) numberStr = "00" + numberStr;

			result = firstChar + secondChar + numberStr;
		} while (Robot.releasedNames.indexOf(result) !== -1);

		return result;
	}
```
Define un método privado `createName` que genera y retorna un nombre único en formato de dos letras seguidas de tres dígitos. Aquí está el desglose:
- `let result: string = "";`: Declara una variable `result` para almacenar el nombre generado.
- `do { ... } while (Robot.releasedNames.indexOf(result) !== -1);`: Utiliza un bucle `do-while` para generar nombres hasta encontrar uno que no esté en `releasedNames`.
- `const firstChar: string = String.fromCharCode(this.randomNumber());`: Genera una letra aleatoria.
- `const secondChar: string = String.fromCharCode(this.randomNumber());`: Genera una segunda letra aleatoria.
- `let numberStr: string = Math.floor(Math.random() * 999 + 0).toString();`: Genera un número aleatorio de tres dígitos como string.
- Los bloques `if` aseguran que el número tenga tres dígitos, agregando ceros a la izquierda si es necesario.
- `result = firstChar + secondChar + numberStr;`: Combina las letras y el número para formar el nombre completo.
- El bucle verifica si `result` ya está en `releasedNames` y, de ser así, genera otro nombre.
- `return result;`: Retorna el nombre generado.

```typescript
	private randomNumber(from: number = 65, to: number = 90) {
		return Math.floor(Math.random() * (to - from + 1) + from);
	}
```
Define un método privado `randomNumber` que genera un número aleatorio entre los valores `from` y `to` (por defecto, entre 65 y 90, que corresponden a los códigos ASCII de las letras mayúsculas). Este método es utilizado por `createName` para generar las letras aleatorias.

## Ejercicio 15 Grade School

Este ejercicio pide que implementemos un sistema de gestión de estudiantes en una escuela, donde cada estudiante está asociado a un grado específico. 

```typescript
interface Students {
  [key: number]: string[]
}

export class GradeSchool {
  private students: Students = {}
  
  roster() {
    return JSON.parse(JSON.stringify(this.students))
  }

  add(name: string, grade: number) {
    for(let key in this.students) {
      this.students[key] = this.students[key].filter((student) => student !== name)
    }
    
    this.students[grade] = this.students[grade] ? [...this.students[grade], name] : [name]

    this.students[grade].sort()
  }

  grade(grade: number) {
    return this.students[grade] ? [...this.students[grade]] : []
  }
}
```

1. **Interfaz `Students`:**
   ```typescript
   interface Students {
     [key: number]: string[]
   }
   ```
   - Define una estructura donde las claves son números (representando los grados) y los valores son arrays de strings (nombres de estudiantes).

2. **Clase `GradeSchool`:**
   ```typescript
   export class GradeSchool {
   ```
   - Definimos la clase `GradeSchool`.

3. **Propiedad `students`:**
   ```typescript
   private students: Students = {}
   ```
   - Declaramos una propiedad privada `students` que sigue la estructura de la interfaz `Students` e inicializamos como un objeto vacío.

4. **Método `roster`:**
   ```typescript
   roster() {
     return JSON.parse(JSON.stringify(this.students))
   }
   ```
   - Devuelve una copia profunda del objeto `students` usando JSON.parse y JSON.stringify para evitar la modificación accidental del estado interno.

5. **Método `add`:**
   ```typescript
   add(name: string, grade: number) {
   ```
   - Añade un estudiante a un grado específico.
   
   ```typescript
   for(let key in this.students) {
     this.students[key] = this.students[key].filter((student) => student !== name)
   }
   ```
   - Recorre todos los grados y elimina el nombre del estudiante si ya existe en cualquier grado.

   ```typescript
   this.students[grade] = this.students[grade] ? [...this.students[grade], name] : [name]
   ```
   - Añade el nombre del estudiante al grado especificado. Si el grado ya tiene estudiantes, se añade al array existente. Si no, se crea un nuevo array con el nombre.

   ```typescript
   this.students[grade].sort()
   ```
   - Ordena alfabéticamente los nombres de los estudiantes en el grado especificado.

6. **Método `grade`:**
   ```typescript
   grade(grade: number) {
     return this.students[grade] ? [...this.students[grade]] : []
   }
   ```
   - Devuelve una copia del array de estudiantes de un grado específico si el grado existe. Si no, devuelve un array vacío.

Este código asegura que:
- Un estudiante no puede estar en más de un grado.
- Los estudiantes dentro de cada grado están ordenados alfabéticamente.
- Se puede obtener una lista completa de todos los estudiantes o solo los de un grado específico.