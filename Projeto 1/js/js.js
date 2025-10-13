
//alert('Passou por ai');
//barra totalizadores
const tArquivos = document.querySelectorAll('#tArquivos');
const vTotal = document.querySelectorAll('#vTotal');
const vValido = document.querySelectorAll('#vValido');
const vContigencia = document.querySelectorAll('#vContigencia');
const tModelo = document.querySelectorAll('#tModelo');
const tContigencia = document.querySelectorAll('#tContigencia');
//fim barra totalizadores
let cancelado = null; //
const input = document.getElementById("file")
let valorValido = null;
let valorTotal = null;
let valorContigencia = null;
let tipoModelo = null;
let totalContigencia = null;

/*let aleatorio = prompt('Teste aqui')
//toString() /parseInt() /parseFloat

console.log(tArquivos[0].textContent)
console.log(tArquivos[0])
console.log(tArquivos)


//const teste = document.querySelectorAll('tr[class="autorizado"]')
//console.log(teste)*/


//let ternario = <condição ex. 5>2> ? <condicição se verdadeiro> : <condição se falso>

/*
function mostrarArquivos() {
  const input = document.getElementById("file");
  const arquivos = input.files; // FileList
  const lista = document.getElementById("listaArquivos");
  lista.innerHTML = ""; // Limpa o conteúdo anterior
  const dados = document.getElementById("dados");
  dados.innerHTML=""



  const arquivo = arquivos[0]; // Apenas o primeiro arquivo, no caso de múltiplos uploads
  const leitor = new FileReader();

  // Define o comportamento após o arquivo ser carregado
  leitor.onload = function (event) {
    const conteudo = event.target.result; // O conteúdo do arquivo como texto
    console.log(conteudo); // Exibe o conteúdo do XML no console
  };

  // Lê o arquivo como texto
  leitor.readAsText(arquivo);

  
  for (let i = 0; i < arquivos.length; i++) {
    const item = document.createElement("p");
    item.textContent = `Arquivo ${i + 1}: ${arquivos[i].name} - (${
      arquivos[i].type
    }, ${arquivos[i].size} bytes)`;
    lista.appendChild(item);
  }
  console.log(leitor);

};*/

function limpaInfo(){

 
}

function VerCancelado() {

  const c = document.querySelectorAll('td[headers="valor"]');
  b = c[0].textContent


 /* tArquivos[0].innerHTML = ""
  vTotal[0].innerHTML = ""
  vValido[0].innerHTML = ""
  vContigencia[0].innerHTML=""
  tModelo[0].innerHTML=""
  tContigencia[0].innerHTML=""

  tArquivos[0].innerHTML = input.files.length
  vTotal[0].innerHTML = valorTotal
  vValido[0].innerHTML = valorValido
  vContigencia[0].innerHTML= valorContigencia
  tModelo[0].innerHTML=tipoModelo
  tContigencia[0].innerHTML= totalContigencia
*/

  /*
  console.log(tArquivos[0].textContent)
  console.log(tArquivos[0])
  console.log(tArquivos)

  tArquivos[0].innerHTML = testando
  vValido[0].innerHTML = testando2

  console.log(tArquivos[0].textContent)
  console.log(tArquivos[0])
  console.log(tArquivos)*/


  console.log(c.value)



  //console.log(input.files.length)




 /* const c = document.querySelectorAll('td[headers="status"]');
  const b = c[10];
  console.log(b.textContent);
  //let ternario = <condição ex. 5>2> ? <condicição se verdadeiro> : <condição se falso>
  if (b.textContent == "Cancelamento NF" || 
    b.textContent == 'Cancelamento, Fora do Prazo') {
    cancelado = true;
  } else {
    cancelado = false;
  }
  console.log(cancelado);*/
}


//manipular string
/*
if (Nome XML text.lenght > 44){
não valida o xml
} else{
  pode validar}

.trim() para tirar espaços

  */


//selecionando o elemento e mudando seu estilo

//document.getElementById('id elemento').style.elementostyle = valor de elemento

//modificar a classe do elemento
//document.getElementById(Id elemento).className = 'Nome_Class'
