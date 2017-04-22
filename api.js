const people = [
  { name: 'Nader', age: 36 },
  { name: 'Amanda', age: 15 },
  { name: 'Jason', age: 26 },
];

export default () => new Promise((resolve) => {
  setTimeout(() => resolve(people), 1000);
});
