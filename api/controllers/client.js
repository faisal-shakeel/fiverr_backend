const Client = require("../models/client");

module.exports.createClient = async (req, res) => {
  try {
    const newClient = await new Client({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      profile_img: req.body.profile_img
    });

    newClient.save();

    return {
      code: 200,
      data: newClient,
    };
  } catch (error) {
    return {
      code: 500,
      data: {
        error: "Problem creating client",
      },
    };
  }
};

module.exports.getAllClients = async () => {
  try {
    const Clients = await Client.find();

    return {
      code: 200,
      data: Clients,
    };
  } catch (error) {
    return {
      code: 500,
      data: {
        error: "Problem retrieving Clients",
      },
    };
  }
};

// module.exports.getClientById = async (id) => {
//   try {
//     const clientFound = await Client.findById(id);
//     if (!clientFound) return { code: 404, data: { error: "No client found" } };

//     return {
//       code: 200,
//       data: clientFound,
//     };
//   } catch (error) {
//     return {
//       code: 500,
//       data: {
//         error: "Problem retrieving Client",
//       },
//     };
//   }
// };

module.exports.getClientByAuth_id = async (id) => {
  try {
    const clientFound = await Client.find({ auth_id: id });
    if (!clientFound) return { code: 404, data: { error: "No client found" } };

    return {
      code: 200,
      data: clientFound,
    };
  } catch (error) {
    return {
      code: 500,
      data: {
        error: "Problem retrieving Client",
      },
    };
  }
};

module.exports.updateClientById = async (id, req, res) => {
  try {
    const clientFound = await Client.findByIdAndUpdate(id, req.body, {new: true, useFindAndModify: false})
    if (!clientFound) return { code: 404, data: { error: "No client found" } };

    return {
      code: 200,
      data: clientFound,
    };
  } catch (error) {
    return {
      code: 500,
      data: {
        error: "Problem retrieving data",
      },
    };
  }
};

module.exports.deleteClientById = async (id) => {
  try {
    const clientFound = await Client.findByIdAndDelete(id);
    if (!clientFound) return { code: 404, data: { error: "No client found" } };

    return {
      code: 200,
      data: clientFound,
    };
  } catch (error) {
    return {
      code: 500,
      data: {
        error: "Problem retrieving data",
      },
    };
  }
};
