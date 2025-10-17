
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
///////////////////////////////
const input = document.getElementById("file")
///////////////////////////////
let valorValido = null;
let valorTotal = null;
let valorContigencia = null;
let tipoModelo = null;
let totalContigencia = null;



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
    switch (cabeçalhoTable[i]) {
      case "CHAVE":      
       criarTh.id='chave'
      break;
      case "DATA EMISSÃO":      
        criarTh.id='data'
      break;
      case "CFOP":      
          criarTh.id='cfop'
      break;
      case "NAT. OP":      
          criarTh.id='nOp'
      break;
      case "VALOR":      
        criarTh.id='valor'
      break;
      case "MODELO":      
        criarTh.id='modelo'
      break;
      case "STATUS":      
        criarTh.id='status'
      break;
      case "NFE NUMERO":      
        criarTh.id='nNum'
      break;
      case "Nº SERIE":      
        criarTh.id='nSerie'
      break;
      case "CSOSN/CST":      
        criarTh.id='tributacao'
      break;
    };
    // Adicionar a célula à linha do cabeçalho
    criarTrThead.appendChild(criarTh)
  };
  // Adicionar a linha ao thead
 criarThead.appendChild(criarTrThead);

 // 4. Criar o tbody (corpo da tabela)
 const criaTbody = document.createElement('tbody')


  
  //cabeçalhoTable.length

 //5. Criar  linhas e células no tbody (baseado do atributo input.files.length)
  
 for (let i = 0; i < 10; i++) {
    const criarTr = document.createElement('tr')
    //logica para estilar tr com base nas informações
     if(STATUS === "Autorizado"){
        criarTr.className='autorizado'
      } else {
        criarTr.className= "text-danger"
        VALOR = "0.00"
      }
    
    
    for(let j = 0; j < cabeçalhoTable.length; j++){
    
     const criarTd = document.createElement('td')
    
    
     switch (cabeçalhoTable[j]) {
        case "CHAVE":  
         criarTd.headers='chave'
         criarTd.innerHTML =  CHAVE
         
        break;
        case "DATA EMISSÃO":  
              
          criarTd.headers='data'
          criarTd.innerHTML = DATA_EMISSAO
        break;
        case "CFOP":      
            criarTd.headers='cfop'
            criarTd.innerHTML = CFOP
        break;
        case "NAT. OP":      
            criarTd.headers='nOp'
            criarTd.innerHTML = NAT_OP
        break;
        case "VALOR":      
          criarTd.headers='valor'
          criarTd.innerHTML = VALOR
        break;
        case "MODELO":      
          criarTd.headers='modelo'
          criarTd.innerHTML = MODELO
        break;
        case "STATUS":      
          criarTd.headers='status'
          criarTd.innerHTML = STATUS
        break;
        case "NFE NUMERO":      
          criarTd.headers='nNum'
          criarTd.innerHTML = NFE_NUMERO
        break;
        case "Nº SERIE":      
          criarTd.headers='nSerie'
          criarTd.innerHTML = N_SERIE
        break;
        case "CSOSN/CST":      
          criarTd.headers='tributacao'
          criarTd.innerHTML = CSOSN_CST
        break;
        

      }; 
     
     
     
   
      criarTr.appendChild(criarTd)
      
    }
    criaTbody.appendChild(criarTr)
    
   
  }
  




console.log(criarTabela)

 
  criarTabela.appendChild(criarThead)
  criarTabela.appendChild(criaTbody)

  dados.appendChild(criarTabela)
  
}




/*
para apagar depois
// 1. Criar a tabela
let tabela = document.createElement('table');

// 2. Criar o thead e a linha (tr) do cabeçalho
let thead = document.createElement('thead');
let trCabeçalho = document.createElement('tr');

// 3. Criar as células de cabeçalho (th)
for (let i = 1; i <= 5; i++) {
    let th = document.createElement('th');
    th.textContent = `Coluna ${i}`;  // Texto da célula do cabeçalho
    trCabeçalho.appendChild(th);  // Adicionar a célula à linha do cabeçalho
}

// Adicionar a linha ao thead
thead.appendChild(trCabeçalho);

// 4. Criar o tbody (corpo da tabela)
let tbody = document.createElement('tbody');

// 5. Criar algumas linhas e células no tbody
for (let i = 1; i <= 3; i++) {  // Aqui, vamos criar 3 linhas de dados
    let tr = document.createElement('tr');
    
    // Adicionar 5 células (td) a cada linha
    for (let j = 1; j <= 5; j++) {
        let td = document.createElement('td');
        td.textContent = `Dado ${i}-${j}`;  // Texto da célula
        tr.appendChild(td);  // Adicionar a célula à linha
    }
    
    // Adicionar a linha ao corpo da tabela
    tbody.appendChild(tr);
}

// 6. Adicionar o thead e tbody à tabela
tabela.appendChild(thead);
tabela.appendChild(tbody);

// 7. Adicionar a tabela ao corpo da página
document.body.appendChild(tabela);




prompt{
ola, para fins educacionais, vamos recriar uma sala de aula/aprendizagem, onde voce assumirá o papel de professor e eu de aluno. NA aula de hoje estamos falando APENAS da função "document.createElement()", estamos na primeira aula para criação de uma tabela através do js que contenha apenas o minimo: thead, tbory, cabeçalho e 5 colunas. professor, poderia me explicar como criar essa tabela? Sem Css, nem recursos avançados
}

*/



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

