const path = require("path");

//Nome do arquivo atual
console.log(path.basename(__filename));

//Nome do diretorio
console.log(path.dirname(__dirname));

//Extensão do arquivo
console.log(path.extname(__filename));

//Cria um objeto path
console.log(path.parse(__filename));

//Juntar caminhos de arquivos
console.log(path.join(__dirname, "test"));
