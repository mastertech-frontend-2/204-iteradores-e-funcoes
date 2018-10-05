// Escopo global. Variáveis criadas aqui existem pelo resto do código.
let a = 10;
let b = 5;
if(true){
    //Um novo escopo começa aqui. A variável c só existe dentro desse bloco, e a variável b criada aqui com let não é a mesma da linha 3. A variável a, que não existe nesse escopo, é buscada no escopo anterior.
    let c;
    let b = 8;
    console.log(a);
    console.log(b);
    c = b;
    let k = 7;
    if(true){
        // Mais um escopo. A variável c criada aqui não é a mesma da linha 6. A variável k, que não existe nesse escopo, está sendo atualizada no escopo anterior. A variável a, que não existe nesse escopo, é buscada no escopo anterior.
        let c = 9;
        console.log(b);
        console.log(a);
        k = 177;
    }
    // Aqui acaba o escopo do if da linha 12. Com ele se vai a variável local c que existia lá. Mas aqui ainda existe uma variável local c.
    a = 20;
    console.log(c);
    console.log(k);
}

// De volta ao escopo global, não existe variável k. Por isso, a última linha resulta em um erro (not defined)
console.log(a);
console.log(b);
console.log(k);