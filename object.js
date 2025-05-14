const people = [
  { name: "Alice", age: 25, city: "New York" },
  { name: "Bob", age: 32, city: "Chicago" },
  { name: "Charlie", age: 28, city: "New York" },
  { name: "Diana", age: 22, city: "Los Angeles" }
];

const filtered = people.filter(person => person.age > 25 && person.city === "New York");

console.log("Filtered people (age > 25 and city == 'New York'):");
filtered.forEach(person => console.log(person));
