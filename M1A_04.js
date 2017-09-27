// Para criar elementos aninhados precisamos passar o método createElemento como terceiro parâmetro
var $h1 = React.createElement('h1', null, React.createElement(
    'span',
    null,
    'Texto Span'
));
ReactDOM.render($h1, document.getElementById('app'))

//  Para criar mútiplos elementos alinhados podemos passar um array de elementos React.createElement e assim sucessivamente
var $h2 = React.createElement('h1', null, [
    React.createElement('span', null, React.createElement('i', null, 'Itálico')),
    React.createElement('span', null, 'Texto Span 2')
]);
ReactDOM.render($h2, document.getElementById('app'))
