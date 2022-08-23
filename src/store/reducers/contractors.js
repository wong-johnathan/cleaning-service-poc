import { faker } from "@faker-js/faker";

const initialState = [...new Array(10)].map((a, i) => ({
  id: faker.datatype.uuid(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  rating: Math.ceil(Math.random() * 5),
  reviews: Math.ceil(Math.random() * 1000),
  profileImg: faker.image.avatar(),
  company: faker.company.name(),
}));

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
