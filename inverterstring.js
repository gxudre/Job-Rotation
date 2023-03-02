// string de exemplo
let str = "exemplo";

// nova string para armazenar o resultado
let invertedStr = "";

// percorre a string original do fim para o começo
for (let i = str.length - 1; i >= 0; i--) {
  // adiciona cada caractere à nova string
  invertedStr += str[i];
}

// exibe o resultado
console.log(invertedStr); // "olpmexe"