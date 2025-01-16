function printName(name: string | null): void {
  if (name) {
    console.log(name.toUpperCase());
  } else {
    console.log('No name provided');
  }
}

const names: (string | null)[] = ['Alice', null, 'Bob'];

names.forEach(name => {
  // Optional Chaining
  console.log(name?.toUpperCase() || 'No name provided');
});

//Or using Type Guard
names.forEach(name => {
  if (name) {
    console.log(name.toUpperCase());
  } else {
    console.log('No name provided');
  }
});