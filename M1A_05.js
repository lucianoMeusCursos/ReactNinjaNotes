// JSX - Significa Javascript XML que é uma forma de representar de uma melhor forma nossos componentes
// Podemos criar um elemento de forma reduzida de algumas formas:

/* ---- */
React.DOM.h1(null, 'Valor qualquer') 
// Essa forma pode ser utilizada mais é uma factory e aceita dois argumentos pode ser que não exista o elemento, 
// sendo assim precisaremos utilizar o método React.createElement().
var $h1 = React.DOM.h1(null, [
    React.DOM.span(null, React.DOM.i(null, 'Itálico')),
    React.DOM.span(null, 'Texto Span 2')
]);
/* ---- */

/* ---- */

// Para utilizarmos o JSX precisamos linkar primeiramente a lib transpiler babel
/* <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.34/browser.js"></script> */

// Dentro do babel existe um módulo para o transpiler do JSX
// A sintaxe para ser escrita é essa o código precisa estar dentro do type='text/babel'

/*
<script type='text/babel'>
    ReactDOM.render(
        <h1>Hello Wold React</h1>,
        document.getElementById('app')
    )

</script>
*/

// Quando for para produção o JSX é renderizado para produção sendo assim não tendo o peso de carregamento da lib babel.

/* ---- */