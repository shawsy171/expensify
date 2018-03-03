const add = (a, b) => a + b;
const greeting = (name) => `Hello ${name}`;

test('should add two numbers', () => {
  const result = add(3, 4);

  expect(result).toBe(7);
})

test('should say hello with name', () => {
  const result = greeting('Damien');

  expect(result).toBe('Hello Damien');
});