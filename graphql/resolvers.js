const kan = {
  name: "kan",
  age: 18,
  gender: "male",
};

const resolvers = {
  Query: {
    person: () => kan,
  },
};

export default resolvers;
