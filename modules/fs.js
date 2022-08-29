const fs = require("fs");
const path = require("path");

//Criando uma pasta
// fs.mkdir(path.join(__dirname, "/test"), (error) => {
//   if (error) {
//     return console.log(error);
//   }
//   console.log("Pasta criada com sucesso");
// });

// Criar um arquivo
fs.writeFile(
  path.join(__dirname, "/test", "test.txt"),
  "Hello node!",
  (error) => {
    if (error) {
      return console.log(error);
    }
    console.log("Arquivo criado sucesso");

    //Ateração em arquivo
    fs.appendFile(
      path.join(__dirname, "/test", "test.txt"),

      "Hello word!",
      (error) => {
        if (error) {
          return console.log(error);
        }
        console.log("Aleração criada com sucesso");
      }
    );

    //Ler arquivo
    fs.readFile(
      path.join(__dirname, "/test", "test.txt"),
      "utf-8",
      (error, data) => {
        if (error) {
          return console.log(error);
        }
        console.log(data);
      }
    );
  }
);
