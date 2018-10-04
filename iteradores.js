let lista = ["João", "José", "Maria", "Ana", "Enzo", "Valentina"];
let objeto = {
    nome: "Kiefer",
    idade: 17,
    vivo: false,
    cargo: "Sub-auxiliar de assistente de designer"
}

let i = 0;

while (i < lista.length){
    console.log(lista[i]);

    i++;
}

console.log('-----------------------');

// For tradicional: exatamente igual ao while, só é escrito de outra forma.
// Sempre preferir quando isso simplificar a leitura do código.
for(let i = 0; i < lista.length; i++){
    console.log(lista[i]);
}

console.log('-----------------------');

// FOR IN: estrutura para percorrer as CHAVES ou ÍNDICES de um objeto ou lista.

for(let i in lista){
    console.log(lista[i]);
}

console.log('-----------------------');

// FOR IN também funciona para objetos, percorrendo as chaves.

for(let chave in objeto){
    console.log(`O valor da chave ${chave} é ${objeto[chave]}`);
}

console.log('-----------------------');

// FOR OF: estrutura para percorrer os VALORES em uma lista.

for(let item of lista){
    console.log(item);
}