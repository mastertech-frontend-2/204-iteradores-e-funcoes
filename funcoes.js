// A assinatura da função é composta pelo seu nome (quadrado) e pelos seus argumentos. Aqui o único argumento se chama número.
function quadrado(numero){
  // Os argumentos são criados automaticamente como variáveis locais da função, e são preenchidos com os valores dos parâmetros da chamada.
  let resultado = numero ** 2;

  // Quando a função retorna, o escopo se encerra e o valor de retorno volta para o escopo anterior.
  return resultado;

  // Código escrito após o retorno nunca é executado. Esse console.log não serve para nada.
  console.log('lalalalalala');
}


// Como a função tem um único argumento, passamos um único parâmetro ao chamá-la.
quadrado(2); // Retorna 4.

quadrado(5); // Retorna 25.

// Se você não passar parâmetros suficientes, as variáveis locais são criadas mesmo assim, mas seu valor fica undefined.
quadrado(); // Retorna NaN. undefined ** 2 é igual a NaN.

// Se você passar mais parâmetros do que o número de argumentos, os parâmetros extras são ignorados.
quadrado(4, 5, 70); // Retorna 16.

quadrado(0, 4) // Retorna 0.