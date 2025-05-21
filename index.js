    const form = document.getElementById('contact-form');
    const tabela = document.getElementById('tabela-contatos');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o recarregamento da página
    const nome = document.getElementById('nome').value.trim();
    const telefone = document.getElementById('telefone').value.trim();


const linhas = document.querySelectorAll('#tabela-contatos tr');
let telefoneJaExiste = false;
linhas.forEach(linha => {
const celularNaLinha = linha.querySelectorAll('td')[1]?.textContent;
if (celularNaLinha === telefone) {
    telefoneJaExiste = true;
}
});
if (telefoneJaExiste) {
alert('Telefone já cadastrado!');
  return; // Interrompe o cadastro
}

    if (nome && telefone) {
        const novaLinha = document.createElement('tr');

        const colunaNome = document.createElement('td');
        colunaNome.textContent = nome;

        const colunaTelefone = document.createElement('td');
        colunaTelefone.textContent = telefone;

        novaLinha.appendChild(colunaNome);
        novaLinha.appendChild(colunaTelefone);

        tabela.appendChild(novaLinha);

        // Limpar campos
        form.reset();
        }

    });