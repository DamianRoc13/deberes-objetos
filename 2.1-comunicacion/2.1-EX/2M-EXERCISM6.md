Video de YouTube: https://www.youtube.com/watch?v=g3cEL1hYS4k 

## Ejercicio 12

Este ejercicio es una simulación de un programa que determina las respuestas de un personaje llamado Bob. Bob tiene respuestas predefinidas para diferentes tipos de interacciones

```typescript
export function hey(message: string): string {
  message = message.trim()
  if (message === '') {
    return 'Fine. Be that way!';
  }

  const isYelling = /[A-Z]+/.test(message) && message == message.toUpperCase() ? 2 : 0
  const isQuestion = message.endsWith('?')
  if (isQuestion && isYelling) {
    return "Calm down, I know what I'm doing!";
  }
  
  if (isYelling) {
    return 'Whoa, chill out!';
  }
  
  if (isQuestion) {
    return 'Sure.';
  }
  
  return 'Whatever.';
}
```
Explicación linea por linea

```typescript
export function hey(message: string): string {
```

- Se define una función llamada `hey` que toma un parámetro `message` de tipo `string` y devuelve un valor de tipo `string`.

```typescript
  message = message.trim()
```

- Se eliminan los espacios en blanco al principio y al final del mensaje para asegurarse de que no haya espacios innecesarios.

```typescript
  if (message === '') {
    return 'Fine. Be that way!';
  }
```

- Si el mensaje está vacío, la función devuelve 'Fine. Be that way!' (¡Está bien, así sea!).

```typescript
  const isYelling = /[A-Z]+/.test(message) && message == message.toUpperCase() ? 2 : 0
```

- Se determina si el mensaje está gritando, es decir, si está escrito completamente en mayúsculas. Si es así, `isYelling` se establece en 2; de lo contrario, se establece en 0.

```typescript
  const isQuestion = message.endsWith('?')
```

- Se verifica si el mensaje termina con un signo de interrogación, lo que indicaría que es una pregunta.

```typescript
  if (isQuestion && isYelling) {
    return "Calm down, I know what I'm doing!";
  }
```

- Si el mensaje es una pregunta y también está gritando, la función devuelve "Calm down, I know what I'm doing!" (¡Tranquilo, sé lo que estoy haciendo!).

```typescript
  if (isYelling) {
    return 'Whoa, chill out!';
  }
```

- Si el mensaje está gritando pero no es una pregunta, la función devuelve 'Whoa, chill out!' (¡Whoa, cálmate!).

```typescript
  if (isQuestion) {
    return 'Sure.';
  }
```

- Si el mensaje es una pregunta pero no está gritando, la función devuelve 'Sure.' (Claro).

```typescript
  return 'Whatever.';
```

- Si no se cumplen las condiciones anteriores, la función devuelve 'Whatever.' (Lo que sea).


## Ejercicio 13

Se necesita escribir un programa que pueda tomar una cadena que representa una matriz de números y luego producir una lista de las filas y una lista de las columnas de esa matriz.

```typescript
export class Matrix {
  readonly rows: number[][]
  readonly columns: number[][]

  constructor(text: string) {
    this.rows = text.split('\n').map((row) => {
      return row.split(/\s+/).map(Number)
    })

    this.columns = this.rows[0].map((_, i) => {
      return this.rows.map((row) => row[i])
    })
  }
}
```

```typescript
export class Matrix {
```
Aquí estamos definiendo una clase llamada `Matrix` que vamos a exportar para que pueda ser utilizada en otros archivos TypeScript.

```typescript
  readonly rows: number[][];
  readonly columns: number[][];
```
Dentro de la clase, estamos declarando dos propiedades: `rows` y `columns`, ambas son matrices de números (matrices bidimensionales). Utilizamos `readonly` para asegurarnos de que estas propiedades no puedan ser modificadas fuera del constructor de la clase.

```typescript
  constructor(text: string) {
```
Este es el constructor de la clase `Matrix`. Toma un parámetro `text` que es una cadena que representa la matriz de números.

```typescript
    this.rows = text.split('\n').map((row) => {
      return row.split(/\s+/).map(Number);
    });
```
Aquí dividimos la cadena `text` en filas utilizando el carácter de nueva línea (`\n`). Luego, para cada fila, dividimos la fila en números individuales utilizando una expresión regular que busca uno o más espacios en blanco (`\s+`). Después, convertimos cada uno de esos números de cadena en números enteros utilizando `map(Number)`. Esto nos da una matriz bidimensional de números que representan las filas de la matriz original.

```typescript
    this.columns = this.rows[0].map((_, i) => {
      return this.rows.map((row) => row[i]);
    });
```
Aquí estamos creando la matriz de columnas. Primero tomamos la primera fila de la matriz `this.rows` (ya que asumimos que todas las filas tienen la misma longitud) y para cada elemento de esa fila (`_` es una convención para un parámetro que no se usa), obtenemos el elemento correspondiente de cada fila en `this.rows`. Esto se hace utilizando `map((row) => row[i])`, donde `i` es el índice del elemento actual en la fila. Esto nos da una matriz bidimensional de números que representan las columnas de la matriz original.

