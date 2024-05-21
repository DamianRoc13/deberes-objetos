## Ejercicio 10 Darts

Video de youtube: https://youtu.be/g3cEL1hYS4k 

```typescript
export function score(x: number, y: number): number {
  x = Math.abs(x)
  y = Math.abs(y)
  let d = Math.sqrt(x**2+y**2)
  if(d>10){
    return 0
  }
  else if(d>5){
    return 1
  }
  else if(d>1){
    return 5
  }
  return 10
}
```

1. `export function score(x: number, y: number): number {`:  Aceptamos dos parámetros numéricos, `x` e `y`, que representan las coordenadas cartesianas del punto donde aterriza el dardo. La función devuelve un valor numérico que representa la cantidad de puntos ganados en ese lanzamiento.

2. `x = Math.abs(x)`: Se calcula el valor de la coordenada x del punto de aterrizaje del dardo. Esto asegura que independientemente de si el dardo aterriza a la derecha o a la izquierda del punto central (0, 0), se toma la distancia en términos positivos desde el origen.

3. `y = Math.abs(y)`: De manera similar, se calcula el valor absoluto de la coordenada y del punto de aterrizaje del dardo, para asegurar que se tome la distancia en términos positivos desde el origen.

4. `let d = Math.sqrt(x**2+y**2)`: Se calcula la distancia `d` desde el origen hasta el punto de aterrizaje del dardo utilizando el teorema de Pitágoras, que es la longitud de la hipotenusa de un triángulo rectángulo con los catetos `x` e `y` como las longitudes de los lados.

5. `if(d>10){ return 0 }`: Se verifica si la distancia `d` es mayor que 10 la función devuelve 0 puntos.

6. `else if(d>5){ return 1 }`: Si la distancia `d` no es mayor que 10 pero es mayor que 5 la función devuelve 1 punto.

7. `else if(d>1){ return 5 }`: Si la distancia `d` no es mayor que 5 pero es mayor que 1, la función devuelve 5 puntos.

8. `return 10`: Si ninguna de las condiciones anteriores se cumple, significa que la distancia `d` es menor o igual a 1, lo que indica que el dardo aterrizó en el círculo interno. En este caso, la función devuelve 10 puntos.


## Ejercicio 11 Pangram

```typescript
export function isPangram(pangram: string): boolean {
  return new Set(
    pangram.toLowerCase().split('').filter(char => char.match(/[a-z]/g))
  ).size === 26;
}
```

1. La función `isPangram` toma una cadena `pangram` como entrada y devuelve `true` si es un pangrama y `false` si no lo es.
2. Convierte la cadena a minúsculas para hacerla insensible a mayúsculas y minúsculas.
3. Filtra solo los caracteres que son letras del alfabeto en minúsculas.
4. Almacena estas letras en un conjunto para eliminar duplicados.
5. Verifica si el tamaño del conjunto es 26, lo que indica que todas las letras del alfabeto están presentes.
6. Devuelve `true` si es un pangrama y `false` si no lo es.