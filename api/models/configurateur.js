const mongoose = require("mongoose");

const ConfigurateurSchema = new mongoose.Schema(
  {
    urlVerge3D: {
      type: String,
      required: [true, "urlVerge3D is required"],
    },
    name: {
      type: String,
      required: [true, "name is required"],
    },
    version: {
      type: String,
      required: [true, "version is required"],
    },
    caractéristiques: {
      type: Object,
      required: [true, "caractéristiques object is required"]
    }
  },
  { timestamps: true }
);

const Configurateur = mongoose.model("Configurateur", ConfigurateurSchema);
module.exports = Configurateur;
