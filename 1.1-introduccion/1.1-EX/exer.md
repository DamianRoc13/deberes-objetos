**EJERCICIO 1**

```typescript
export function hello(): string {
  return 'Hello, World!'
}
```

- export function hello(): string {

Esto define una función llamada hello que está marcada para ser exportada desde este módulo TypeScript. La función no espera recibir ningún argumento y devuelve una cadena de texto (string).
- return 'Hello, World!'

La función devuelve la cadena de texto 'Hello, World!' cuando se llama.


**EJERCICIO 2**

Esta función toma un parámetro opcional `name`, y si no se proporciona ningún nombre, utiliza por defecto el valor `'you'`.

Código:

```typescript
// Definición de la función `twoFer`
export function twoFer(name = 'you'): string {

  //devuelve "One for {name}, one for me."
  return `One for ${name}, one for me.`;
}
```

Explicación:

```typescript
export function twoFer(name = 'you'): string {
```

Aquí estamos definiendo una función llamada twoFer que exportamos (para que pueda ser utilizada fuera de este módulo si se importa). La función toma un parámetro name que es opcional (si no se proporciona, su valor predeterminado es 'you') y devuelve una cadena (string).

```typescript
return `One for ${name}, one for me.`;
```

Esta es la declaración de retorno de la función. Utiliza template literals (`) en TypeScript para crear una cadena que incluye el valor de name. ${name} se sustituirá con el valor de name que se pasa como argumento a la función. Por ejemplo, si llamas a twoFer('Alice'), devolverá "One for Alice, one for me.". Si no se proporciona ningún argumento, name será 'you', por lo que devolverá "One for you, one for me.".