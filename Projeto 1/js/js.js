
//alert('Passou por ai');
//seletores barra totalizadores
const tArquivos = document.querySelectorAll('#tArquivos');
const vTotal = document.querySelectorAll('#vTotal');
const vValido = document.querySelectorAll('#vValido');
const vContigencia = document.querySelectorAll('#vContigencia');
const tModelo = document.querySelectorAll('#tModelo');
const tContigencia = document.querySelectorAll('#tContigencia');
//fim barra totalizadores
let cancelado = null; //
///////////////////////////////
const input = document.getElementById("file")
///////////////////////////////





const CHAVE= "29250812300010000101980030001234567890123456" ;
const DATA_EMISSAO= '01/08/25';
const CFOP= "6102";
const NAT_OP= 'Venda Fora Estado';
let VALOR= "7.40";
const MODELO= "65";
const STATUS= 'Autorizado';
const NFE_NUMERO= "001";
const N_SERIE= "001";
const CSOSN_CST= "500";


function debug(){
  //////////////////////////
  /*Atualização da barra de totalizadores*/
  let valorValido = null;
  let valorTotal = null;
  let valorContigencia = null;
  let tipoModelo = null;
  let totalContigencia = null;
  ////////////////

  //console.log(input.files)
  const dados = document.getElementById("dados");
  dados.innerHTML=""

  //1. criar elementos
  const criarTabela = document.createElement("table")
  criarTabela.className = "table table-hover table-sm"
  
  // 2. Criar o thead e a linha (tr) do cabeçalho
  const criarThead = document.createElement("thead")
  criarThead.className = "thead-light"
  
  const criarTrThead = document.createElement("tr")
  
  //nomes dos th's a serem criados no loop
  const cabeçalhoTable = [
    "CHAVE", 
    "DATA EMISSÃO",
    "CFOP",
    "NAT. OP",
    "VALOR",
    "MODELO",
    "STATUS",
    "NFE NUMERO",
    "Nº SERIE",
    "CSOSN/CST"
  ];

 
  // 3. Criar as células de cabeçalho (th)
  for (let i = 0; i < cabeçalhoTable.length; i++){
    
    const criarTh = document.createElement('th');
    criarTh.textContent = `${cabeçalhoTable[i]}` // Texto da célula do cabeçalho

   //Logica para id de cada Th
   const idMap = {
    "CHAVE": "chave",
    "DATA EMISSÃO": "data",
    "CFOP": "cfop",
    "NAT. OP": "nOp",
    "VALOR": "valor",
    "MODELO": "modelo",
    "STATUS": "status",
    "NFE NUMERO": "nNum",
    "Nº SERIE": "nSerie",
    "CSOSN/CST": "tributacao"
    };
    
    const valorId = idMap[cabeçalhoTable[i]];
    if (valorId) {
      criarTh.id = valorId;
    }
  
   
    // Adicionar a célula à linha do cabeçalho
    criarTrThead.appendChild(criarTh)
  };
  // Adicionar a linha ao thead
 criarThead.appendChild(criarTrThead);

  // 4. Criar o tbody (corpo da tabela)
  const criaTbody = document.createElement('tbody')


 //5. Criar  linhas e células no tbody (baseado do atributo input.files.length)
  
 for (let i = 0; i < input.files.length; i++) {
    const criarTr = document.createElement('tr')
    //logica para estilar tr com base nas informações
     if(STATUS === "Contigencia"){
       criarTr.className= "text-danger"
       VALOR = "0.00"
      } else if (STATUS === "Cancelamento NF" || STATUS === "Cancelamento, Fora do Prazo") {
        criarTr.className='text-info'
        VALOR = "0.00"
      } else if (STATUS === 'Inutilização Nº'){
        criarTr.className='text-secondary'
        VALOR = "0.00"
      }else if(STATUS==='Denegado'){
        criarTr.className='denegado'
        VALOR = "0.00"
      } else {
        criarTr.className='autorizado'
      }
    
    //Cria as Td's dentro das linhas
    for(let j = 0; j < cabeçalhoTable.length; j++){
      
      const criarTd = document.createElement('td')
      const tdMap = {
        "CHAVE": { headers: "chave", valor: CHAVE },
        "DATA EMISSÃO": { headers: "data", valor: DATA_EMISSAO },
        "CFOP": { headers: "cfop", valor: CFOP },
        "NAT. OP": { headers: "nOp", valor: NAT_OP },
        "VALOR": { headers: "valor", valor: VALOR },
        "MODELO": { headers: "modelo", valor: MODELO },
        "STATUS": { headers: "status", valor: STATUS },
        "NFE NUMERO": { headers: "nNum", valor: NFE_NUMERO },
        "Nº SERIE": { headers: "nSerie", valor: N_SERIE },
        "CSOSN/CST": { headers: "tributacao", valor: CSOSN_CST },
      };
   
      const tdInfo = tdMap[cabeçalhoTable[j]];
      if (tdInfo) {
        criarTd.headers = tdInfo.headers;
        criarTd.innerHTML = tdInfo.valor;
        let temp = tdMap["VALOR"].valor 
      }
      
      criarTr.appendChild(criarTd)
        
        
  }
      
      criaTbody.appendChild(criarTr)
      if(STATUS === "Contigencia"){
          totalContigencia ++
        }

       
      
  }
  
 
  valorTabela = document.querySelectorAll('td[headers="valor"]')
  tArquivos[0].innerHTML = input.files.length
  vTotal[0].innerHTML = valorTotal
  vValido[0].innerHTML = valorValido
  vContigencia[0].innerHTML= valorContigencia
  tModelo[0].innerHTML=tipoModelo
  tContigencia[0].innerHTML= totalContigencia





 
  criarTabela.appendChild(criarThead)
  criarTabela.appendChild(criaTbody)

  dados.appendChild(criarTabela)
  
  

}







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


  /*
  const arquivo = arquivos[0]; // Apenas o primeiro arquivo, no caso de múltiplos uploads
  const leitor = new FileReader();

  // Define o comportamento após o arquivo ser carregado
  leitor.onload = function (event) {
    const conteudo = event.target.result; // O conteúdo do arquivo como texto
    console.log(conteudo); // Exibe o conteúdo do XML no console
  };

  // Lê o arquivo como texto
  leitor.readAsText(arquivo);*/

  /*
  for (let i = 0; i < arquivos.length; i++) {
    const item = document.createElement("p");
    item.textContent = `Arquivo ${i + 1}: ${arquivos[i].name} - (${
      arquivos[i].type
    }, ${arquivos[i].size} bytes)`;
    lista.appendChild(item);
  }
  console.log(leitor);

};*/


/*
function VerCancelado() {

  const c = document.querySelectorAll('td[headers="valor"]');
  b = c[0].textContent


  tArquivos[0].innerHTML = ""
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


  
  console.log(tArquivos[0].textContent)
  console.log(tArquivos[0])
  console.log(tArquivos)

  tArquivos[0].innerHTML = testando
  vValido[0].innerHTML = testando2

  console.log(tArquivos[0].textContent)
  console.log(tArquivos[0])
  console.log(tArquivos)


  console.log(c.value)



  console.log(input.files.length)




  const c = document.querySelectorAll('td[headers="status"]');
  const b = c[10];
  console.log(b.textContent);
  //let ternario = <condição ex. 5>2> ? <condicição se verdadeiro> : <condição se falso>
  if (b.textContent == "Cancelamento NF" || 
    b.textContent == 'Cancelamento, Fora do Prazo') {
    cancelado = true;
  } else {
    cancelado = false;
  }
  console.log(cancelado);
}*/


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

// Exemplo com for...of (recomendado para coleções)
//for (const file of meuFileList) {
//  console.log(file.name);
//}
  /*
  // Exemplo com for tradicional (recomendado)
for (let i = 0; i < meuFileList.length; i++) {
  const file = meuFileList[i];
  console.log(file.name);
}arguments
  */ 

