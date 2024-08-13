// String literal types
type Direction = 'North' | 'South' | 'East' | 'West';

function move(direction: Direction) {
    console.log(`Moving towards ${direction}`);
}

move('North'); // Valid
move('South'); // Valid
// move('Up'); // Error: Argument of type '"Up"' is not assignable to parameter of type 'Direction'.

// Numeric literal types
type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;

function rollDice(): DiceRoll {
    const roll = Math.floor(Math.random() * 6) + 1 as DiceRoll;
    return roll;
}

const rollResult = rollDice();
console.log(`You rolled a ${rollResult}`);

// Boolean literal types
type IsLoading = true | false;

let loading: IsLoading = true;
loading = false; // Valid
// loading = 'true'; // Error: Type '"true"' is not assignable to type 'IsLoading'.


enum DiceRolls {
    One = 1,
    Two,
    Three,
    Four,
    Five,
    Six
}


// Why not use enum


// Use union of literal types for simplicity and when you only need a few specific values.
// Use enum for better readability, extensibility, and when you need to associate additional properties or methods