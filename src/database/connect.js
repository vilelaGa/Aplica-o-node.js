const mongoose = require("mongoose");

const connecToDatabase = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.USER_MONGO_DE}:${process.env.SENHA_MONGO_DB}@cursonodejs.mibffn4.mongodb.net/?retryWrites=true&w=majority`,
    (error) => {
      if (error) {
        return console.log("Erro de conexão", error);
      }

      return console.log("Conexão ok");
    }
  );
};

module.exports = connecToDatabase;
