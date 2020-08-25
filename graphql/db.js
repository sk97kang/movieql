export const people = [
  {
    id: "0",
    name: "kan",
    age: 18,
    gender: "male",
  },
  {
    id: "1",
    name: "kan",
    age: 18,
    gender: "male",
  },
  {
    id: "2",
    name: "kan",
    age: 18,
    gender: "male",
  },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => person.id === String(id));
  return filteredPeople[0];
};
