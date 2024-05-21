# Semana 4

Video de Youtube: https://youtu.be/uuWMGaqudP4 

## Ejercicio 8

```typescript
const planets: {[name: string]: number} = {
  'mercury': 0.2408467,
  'venus': 0.61519726,
  'mars': 1.8808158,
  'jupiter': 11.862615,
  'saturn': 29.447498,
  'uranus': 84.016846,
  'neptune': 164.79132,
  'earth': 1,
}

export function age(planet: string, seconds: number): number {
  const earthYears = seconds / 31557600
  return Number((earthYears / planets[planet]).toFixed(2))
}
```
- const planets: Esto declara una constante llamada planets, que es un objeto en TypeScript.
- { [name: string]: number }: Esto especifica el tipo del objeto planets. Es un objeto donde las claves son cadenas (string) y los valores son números (number).

Las siguientes líneas asignan cada planeta del sistema solar como clave del objeto planets, junto con su período orbital en años terrestres como valor.

- export function age(planet: string, seconds: number): number {: Esto define una función llamada age que toma dos parámetros: planet (el nombre del planeta) y seconds (el número de segundos vividos). La función devuelve un número.

- const earthYears = seconds / 31557600: Calcula la edad de la persona en años terrestres dividiendo la cantidad de segundos vividos entre el número de segundos en un año terrestre (31557600).

- return Number((earthYears / planets[planet]).toFixed(2)): Calcula la edad de la persona en el planeta especificado. Primero, divide la edad en años terrestres por el período orbital del planeta obtenido del objeto planets[planet]. Luego, toFixed(2) redondea el resultado a dos decimales como se especifica en el ejercicio. Finalmente, Number() convierte el resultado a un número antes de devolverlo.

## Ejercicio 9

```typescript
export class DnDCharacter {
  hitpoints: number;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;

  constructor() {
    this.strength = DnDCharacter.generateAbilityScore();
    this.dexterity = DnDCharacter.generateAbilityScore();
    this.constitution = DnDCharacter.generateAbilityScore();
    this.intelligence = DnDCharacter.generateAbilityScore();
    this.wisdom = DnDCharacter.generateAbilityScore();
    this.charisma = DnDCharacter.generateAbilityScore();
    this.hitpoints= 10 + DnDCharacter.getModifierFor(this.constitution);
  }

  public static generateAbilityScore(): number {
    return 4;
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor( ( abilityValue - 10 ) / 2 );
  }
}
```

- constructor(): Este es el constructor de la clase DnDCharacter, donde se inicializan las propiedades del personaje. Se generan valores aleatorios para las habilidades del personaje llamando al método estático generateAbilityScore(). Luego, se calculan los puntos de golpe iniciales basados en la constitución del personaje utilizando el método estático getModifierFor().

- public static generateAbilityScore(): Este método estático es público y se utiliza para generar valores de habilidad aleatorios para el personaje. Actualmente, devuelve un valor fijo (4) para simplificar la implementación, pero debería generar valores aleatorios adecuados en una implementación completa.

- public static getModifierFor(): Este método estático también es público y se utiliza para calcular el modificador de una habilidad basado en su valor. Implementa la fórmula estándar de Dungeons & Dragons para calcular el modificador.