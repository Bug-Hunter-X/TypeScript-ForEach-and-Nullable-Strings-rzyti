function printName(name: string | null): void {
  if (name) {
    console.log(name.toUpperCase());
  } else {
    console.log('No name provided');
  }
}

printName(null); // Works fine
printName('John'); // Works fine

const names: (string | null)[] = ['Alice', null, 'Bob'];

names.forEach(printName); // Error: Argument of type 'string | null' is not assignable to parameter of type 'string'.