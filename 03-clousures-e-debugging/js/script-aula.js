// CLOSURES NA REAL
// Todas as funções internas da Factory Function possuem uma closure de $$. As mesmas contém uma referência à variável elements declarada dentro do escopo da função.
function $$(selectedElements) {
  const elements = document.querySelectorAll(selectedElements);

  function hide() { ... }
  function show() { ... }
  function on() { ... }
  function addClass() { ... }
  function removeClass() { ... }

  return { hide, show, on, addClass, removeClass }
}
