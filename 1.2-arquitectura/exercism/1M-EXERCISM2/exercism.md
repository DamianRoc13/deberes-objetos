*Video de YouTube:**https://youtu.be/zbqYiML2K7k 


## Ejercicio 3

```typescript
export const colorCode = (color: string) => {
  return COLORS.indexOf(color.toLowerCase());
};

export const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];
```

Esta función toma un parámetro color que es un string representando un color en minúsculas. Dentro de la función:

`color.toLowerCase()`: Convierte el color recibido a minúsculas. Esto asegura que la comparación de colores sea insensible a mayúsculas/minúsculas.

`COLORS.indexOf(color.toLowerCase())`: Busca el índice de color en el array COLORS. indexOf retorna el índice del elemento si es encontrado en el array, o -1 si no se encuentra. Por lo tanto, si el color es encontrado en el array COLORS, la función devuelve su índice. Si no es encontrado, devuelve -1.

## Ejercicio 4

```typescript
export enum valoresResistencia {
  black = 0,
  brown = 1,
  red = 2,
  orange = 3,
  yellow = 4,
  green = 5,
  blue = 6,
  violet = 7,
  grey = 8,
  white = 9,
}

type Color = keyof typeof valoresResistencia;

export function decodedValue([first, second]: Color[]): number {
  return Number(`${valoresResistencia[first]}${valoresResistencia[second]}`)
}
```
Esta función decodedValue toma un array destructurado [first, second] de dos elementos de tipo Color (es decir, dos nombres de colores). La función entonces:

- Usa valoresResistencia[first] para obtener el valor numérico asociado al primer color (first) del array.

- Usa valoresResistencia[second] para obtener el valor numérico asociado al segundo color (second) del array.

- Concatena estos dos valores numéricos como un string `(``${valoresResistencia[first]}${valoresResistencia[second]}``)`.
Convierte este string concatenado a un número usando Number(), lo cual devuelve el valor numérico correspondiente al código de resistencia compuesto por los dos colores dados.


## Ejercicio 5

```typescript
export type Color = 'black' | 'brown' | 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'violet' | 'grey' | 'white';

const colorValues: Record<Color, number> = {
    black: 0, 
    brown: 1, 
    red: 2, 
    orange: 3, 
    yellow: 4,
    green: 5, 
    blue: 6, 
    violet: 7, 
    grey: 8, 
    white: 9
};

const ohmsPrefixes = [
  [1_000_000_000, 'giga'], 
  [1_000_000, 'mega'], 
  [1_000, 'kilo']] as const;

export function decodedResistorValue(colors: Color[]): string {
    const value = (colorValues[colors[0]] * 10 + colorValues[colors[1]]) * 10 ** colorValues[colors[2]];
    const [divisor, prefix] = ohmsPrefixes.find(([d]) => value >= d) ?? [1, ''];
    return `${value / divisor} ${prefix}ohms`;
}
```

### Definición del Tipo Color

El tipo Color se define para representar los colores utilizados en los códigos de resistencias. Los colores incluidos son: black, brown, red, orange, yellow, green, blue, violet, grey y white.

### Objeto colorValues

Se utiliza un objeto colorValues para asignar valores numéricos a cada color definido en el tipo Color. Estos valores representan los dígitos asociados a cada color en el código de resistencias.

### Array ohmsPrefixes

El array ohmsPrefixes contiene tuplas que representan los multiplicadores y prefijos utilizados para representar los múltiplos de ohms, como kiloohms (k), megaohms (M) y gigaohms (G).

### Función decodedResistorValue

La función decodedResistorValue toma un array de colores (Color[]) que representan las bandas de color de una resistencia. Esta función calcula el valor de la resistencia en ohms combinando los valores numéricos asociados a los colores y aplicando el multiplicador adecuado según el valor calculado. Finalmente, devuelve el valor de la resistencia formateado con el prefijo correspondiente (si es necesario).