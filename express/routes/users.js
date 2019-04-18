const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/users");

router.get("/", (request, response) => {
  UsersController.getAll().then(results => response.json(results));
});

//use findOneByID create router and function for it as extra practice.

router.get("/:name", (request, response) => {
  UsersController.getOne(request.params.name)
    .then(result => {
      if (!result) throw new Error("No user found");
      response.json(result);
    })
    .catch(err => response.status(404).send(err.message));
});

router.post("/default", (request, response) => {
  UsersController.createDefault().then(() => response.status(204).send());
});

router.post("/", (request, response) => {
  UsersController.createUser(request.body).then(() =>
    response.send("User created")
  );
});

router.put("/:name", (request, response) => {
  console.log(request.body);
  UsersController.updateUser(request.params.name, request.body).then(() =>
    response.status(204).send()
  );
});

router.delete("/:name", (request, response) => {
  UsersController.deleteUser(request.params.name).then(() =>
    response.send("User deleted")
  );
});

//created a delete user id router for practice
// router.delete("/:id", (request, response) => {
//   UsersController.deleteUserId(request.params.id).then(result => {
//     if (result.deletedCount === 0) {
//       response.send("User not found");
//     }
//     response.send("User deleted");
//   });
// });

// //creating a post user id router for extra practice
// router.post("/:id", (request, response) => {
//   UsersController.createUserId(request.body).then(() =>
//     response.send("User id created")
//   );
// });

module.exports = router;
