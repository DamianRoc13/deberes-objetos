## Semana 3

Video de youtube: https://youtu.be/zbqYiML2K7k 

**Exercism: Lap**

```typescript
export function isLeap(year: number): boolean {
  return (
        (year % 4 === 0 ) && (year % 100 !== 0 || year % 400 === 0)
    )
}
```

- Hacemos la función si es bisiesto en este caso `isLeap`.
- Le damos un parametro `year` de tipo `number`, y a esto le damos yn tipo `boolean` que nos devuelva true o false.
- En el return especificamos que el año tienen que ser divisible sobre 4, con un operador de comparacion especificamos que no debe tener residuos.
- Utilizamos el operador lógico `&&`para que si las dos formulas son verdaderas devuelva true.
-En la segunda formula especificamos que el año no debe ser divisible para 100 el cual devolvera true y que cuando el año sea divisible para 400 devuelva true. 
Utilizamos un OR para que si uno de los dos es true devuelva true.

**Exercism: RNA Transcription**

```typescript
let rna: Record<string, string> = {
  G: "C",
  C: "G",
  T: "A",
  A: "U",
};

export function toRna(dnaStrand: string): string | false {
  let rnaStr = "";

  for (const char of dnaStrand) {
    if (rna[char]) {
      rnaStr += rna[char];
    } else {
      throw new Error("Invalid input DNA.");
    }
  }
  return rnaStr;
}
```

- `export function toRna(dnaStrand: string): string | false {`: Aquí se declara una función llamada `toRna` que acepta un parámetro `dnaStrand` de tipo `string`. La función puede devolver un valor de tipo `string` o `false`.

- `let rnaStr = "";`: Se inicializa una variable `rnaStr` como una cadena vacía, que se utilizará para construir la cadena de ARN correspondiente al ADN de entrada.

- `for (const char of dnaStrand) {`: Se inicia un bucle `for-of` que itera sobre cada carácter (`char`) en la cadena `dnaStrand`.

- `if (rna[char]) {`: Dentro del bucle, se verifica si el carácter actual (`char`) de `dnaStrand` está presente como una clave en el objeto `rna` que definimos anteriormente.

- `rnaStr += rna[char];`: Si el carácter es reconocido en el objeto `rna`, se concatena el valor correspondiente (la base de ARN) a la cadena `rnaStr`.

- `else {`: Si el carácter no está presente en `rna` (lo cual indica un carácter inválido en la cadena de ADN), se ejecuta la siguiente línea:

- `throw new Error("Invalid input DNA.");`: Esto lanza un error con el mensaje "Invalid input DNA.", indicando que el ADN de entrada contiene un carácter no válido.

- `return rnaStr;`: Después de iterar sobre todos los caracteres en `dnaStrand` y construir `rnaStr` con las bases de ARN correspondientes, la función devuelve la cadena `rnaStr`.
