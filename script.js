const cep = document.getElementById("cep");
const logradouro = document.getElementById("logradouro");
const complemento = document.getElementById("complemento");
const bairro = document.getElementById("bairro");
const localidade = document.getElementById("localidade");
const uf = document.getElementById("uf");

cep.addEventListener("keypress", function(event){
    if (["NumpadEnter", "Enter"].includes(event.code)){
        const codigoCEP = cep.value;
        fetch('https://viacep.com.br/ws/'+ codigoCEP +'/json/')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            logradouro.innerHTML = data.logradouro;
            complemento.innerHTML = data.complemento;
            bairro.innerHTML = data.bairro;
            localidade.innerHTML = data.localidade;
            uf.innerHTML = data.uf;
        });
    }
}) 
