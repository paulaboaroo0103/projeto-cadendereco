'use restrict'; //Modo restrito

//Limpar formulário
const limparFormulario = (endereco) =>{
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('estado').value = '';
    document.getElementById('cidade').value = '';
}

//Verifica se CEP é válido
const eNumero = (numero) => /^[0-9]+$/.test(numero);
const cepValido = (cep) => cep.lenght == 8 && eNumero(cep);

// Preenche campos do formulário
const preencherFormulario = (endereco) =>{
    document.getElementById('rua').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.bairro;
    document.getElementById('estado').value = endereco.estado;
}

/*
Função para consumo de API utilizando a função do tipo assincrona
*/
const pesquisarcep = async () =>{
    limparFormulario();
    const url = `http://viacep.com.br/ws/${cep.value}/json/`;
}