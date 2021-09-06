var express = require("express");
const ClientController = require("../controllers/client");
var router = express.Router();

/* GET clients listing. */
router.get("/", async (req, res) => {
  try {
    const response = await ClientController.getAllClients();
    res.status(response.code).send(response.data);
  } catch (error) {
    res.status(500).send(error);
  }
});

 /* GET client by ID. */
// router.get("/:id", async (req, res) => {
//   try {
//     const id = req.params.id.toString();
//     const response = await ClientController.getClientById(id);
//     res.status(response.code).send(response.data);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

/* GET client by ID AUTH0. */
router.get("/:auth_id", async (req, res) => {
  try {
    const auth_id = req.params.auth_id.toString();
    const response = await ClientController.getClientByAuth_id(auth_id);
    res.status(response.code).send(response.data);
  } catch (error) {
    res.status(500).send(error);
  }
});

/* POST a new client. */
router.post("/", async (req, res) => {
  try {
    const response = await ClientController.createClient(req, res);
    res.status(response.code).send(response.data);
  } catch (error) {
    res.status(500).send(error);
  }
});

/* UPDATE client by ID. */
router.patch("/:id", async (req, res) => {
  try {
    const id = req.params.id.toString();
    const response = await ClientController.updateClientById(id, req);
    res.status(response.code).send(response.data);
  } catch (error) {
    res.status(500).send(error);
  }
});

/* DELETE client by ID. */
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id.toString();
    const response = await ClientController.deleteClientById(id);
    res.status(response.code).send(response.data);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
