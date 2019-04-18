const { UsersModel } = require("../../mongo/models");

const defaultUser = {
  name: "Ted",
  age: "24"
};

const getAll = () => {
  return UsersModel.find({});
};

const getOne = name => {
  // find one user by name
  return UsersModel.findOne({ name });
};

const createDefault = () => {
  // insert default user into db
  return UsersModel.create(defaultUser);
};

const createUser = user => {
  // insert user from POST request into db
  return UsersModel.create({ user });
};

const updateUser = (name, updates) => {
  // use name as the query and updates for the updates
  return UsersModel.findOneAndUpdate({ name }, updates);
};

const deleteUser = name => {
  // use name as the
  return UsersModel.deleteOne({ name });
};
// do not need to create ID because most DBs do it for you.
// const createUserId = id => {
//   //extra practice creating user id
//   return UsersModel.create({ id });
// };

// const deleteUserId = id => {
//   //extra practice deleting user id
//   return UsersModel.deleteOne({ id });
// };
//creating a post that creates ids

module.exports = {
  getAll,
  getOne,
  createDefault,
  createUser,
  updateUser,
  deleteUser
  // createUserId,
  // deleteUserId
};
