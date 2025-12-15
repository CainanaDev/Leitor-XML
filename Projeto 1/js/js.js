
//alert('Passou por ai');
//seletores barra totalizadores
const tArquivos = document.querySelectorAll('#tArquivos');
const vTotal = document.querySelectorAll('#vTotal');
const vValido = document.querySelectorAll('#vValido');
const vContigencia = document.querySelectorAll('#vContigencia');
const tArquivosValidos = document.querySelectorAll('#tArquivosValidos');
const tContigencia = document.querySelectorAll('#tContigencia');
//fim barra totalizadores
let cancelado = null; //
///////////////////////////////
const input = document.getElementById("file")
///////////////////////////////

/*
input.addEventListener("change", function() {
  const arquivo = input.files[0];
  if (!arquivo) return;

  <script>
  const input = document.getElementById("arquivoXML");
  const dados = document.getElementById("dados");
  ///////button//////
  botao.addEventListener("click", function() {
    const arquivo = input.files[0];
    if (!arquivo) {
      alert("Por favor, selecione um arquivo XML primeiro.");
      return;
    }



  /////////////////

  input.addEventListener("change", function() {
    const arquivo = input.files[0];
    if (!arquivo) return;

    const leitor = new FileReader();

    // Quando o arquivo for carregado
    leitor.onload = function(event) {
      const conteudo = event.target.result; // Texto do XML
      dados.textContent = conteudo; // Exibe o conteúdo bruto no HTML

      // Faz o parse do XML
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(conteudo, "text/xml");

      console.log("Documento XML:", xmlDoc); // Exibe o objeto XML no console

      // Exemplo: acessar elementos do XML
      const elementos = xmlDoc.getElementsByTagName("nome"); // Altere para a tag desejada
      for (let i = 0; i < elementos.length; i++) {
        console.log("Elemento <nome>:", elementos[i].textContent);
      }
    };

    leitor.readAsText(arquivo); // Inicia a leitura do arquivo
  });
</script>




*/



 
function debug(){
  //////////////////////////
  /*barra totalizadores*/
  let valorValido = 0;
  let valorTotal = 0;
  let valorContigencia = 0;
  let totalValido = 0;
  let totalContigencia = 0;
  let temporario = null;
  ////////////////

  //Variaveis para alimentar a tabela
  let CHAVE = '' ;
  let DATA_EMISSAO= '';
  let NAT_OP= '';
  let VALOR = '';
  let MODELO= '';
  let STATUS= '';
  let NFE_NUMERO= null;
  parseInt(NFE_NUMERO)
  let N_SERIE= '';
  let contador = 0


  //console.log(input.files)
  const dados = document.getElementById("dados");
  dados.innerHTML=""
  vTotal[0].innerHTML=""
  tArquivos[0].innerHTML=""
  vValido[0].innerHTML=""
  vContigencia[0].innerHTML=""
  tArquivosValidos[0].innerHTML=""
  tContigencia[0].innerHTML=""

  //1. criar elementos
  const criarTabela = document.createElement("table")
  criarTabela.className = "table table-hover table-sm"
  
  // 2. Criar o thead e a linha (tr) do cabeçalho
  const criarThead = document.createElement("thead")
  criarThead.className = "thead-light"
  
  const criarTrThead = document.createElement("tr")
  
  //nomes dos th's a serem criados no loop
  const cabeçalhoTable = [
    "COD. NUM", 
    "DATA EMISSÃO",
    "NAT. OP",
    "VALOR",
    "MODELO",
    "STATUS",
    "NFE NUMERO",
    "Nº SERIE",

  ];

 
  // 3. Criar as células de cabeçalho (th)
  for (let i = 0; i < cabeçalhoTable.length; i++){
    
    const criarTh = document.createElement('th');
    criarTh.textContent = `${cabeçalhoTable[i]}` // Texto da célula do cabeçalho

   //Logica para id de cada Th
   const idMap = {
    "COD. NUM": "chave",
    "DATA EMISSÃO": "data",
    "NAT. OP": "nOp",
    "VALOR": "valor",
    "MODELO": "modelo",
    "STATUS": "status",
    "NFE NUMERO": "nNum",
    "Nº SERIE": "nSerie",

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

    ///////Função para leitura dos arquivos////////
    const arquivo = input.files[i]  //seleciona o arquivo com base no indice
    const leitor = new FileReader()  //cria uma nova instancia do Leitor de Arquivos
  
    leitor.onload = function (event) {
      const conteudo = event.target.result; // O conteúdo do arquivo como texto
      const parser = new DOMParser() //Paeser e exibição do conteudo no console
      const DOMxml = parser.parseFromString(conteudo, 'text/xml')
      contador +=1
      //console.log(DOMxml)
      //console.log(contador)
      const testeXML = DOMxml.documentElement

      const cNF = testeXML.querySelectorAll("cNF");
      const dhEmi = testeXML.querySelectorAll('dhEmi')
      const natOp = testeXML.querySelectorAll('natOp')
      const mod   = testeXML.querySelectorAll('mod')
      const cStat = testeXML.querySelectorAll('cStat')
      const vNF   = testeXML.querySelectorAll('vNF')
      const nNF   = testeXML.querySelectorAll('nNF')
      const serie = testeXML.querySelectorAll('serie')

      //Informações para alimentar a tabela
      CHAVE = cNF[0].textContent ; //por enquanto buscando o codigo numerico ao invés da chave NFe
      DATA_EMISSAO= dhEmi[0].textContent;
      //NAT_OP= natOp[0].textContent;
      VALOR = vNF[0].textContent;
      let tot = parseFloat(VALOR)
      MODELO= mod[0].textContent;
      try {
        STATUS= cStat[0].textContent;
      } catch (error) {
        if(error !== null){
          STATUS= "ausente"
        } 
      }
      NFE_NUMERO= nNF[0].textContent;
      N_SERIE= serie[0].textContent;
      valorTotal += tot

    
      
      if (STATUS === '100' || STATUS === '150') {
         valorValido += tot
         totalValido ++ 
      }else {
        valorContigencia += tot
        totalContigencia ++  
      }

      vTotal[0].innerHTML = valorTotal.toFixed(2)
      vValido[0].innerHTML = valorValido.toFixed(2)
      vContigencia[0].innerHTML= valorContigencia.toFixed(2)
      tArquivosValidos[0].innerHTML= totalValido
      tContigencia[0].innerHTML= totalContigencia
     /////////TESTES//////////

     
     const criarTr = document.createElement('tr')
     
       
     
       
     
       
       
       if (STATUS === '100') {
          criarTr.className='autorizado'
          if(STATUS==='150'){
            STATUS = "Autorizado NF-e, fora de prazo"
          }else{
          STATUS = "Autorizado"
          }
        }else if (STATUS === "2"){
         STATUS = "Contigencia"
         criarTr.className= "text-danger"
        
       }else if (STATUS == '101'){
         STATUS = "Cancelamento NF"
         valorContigencia += VALOR
         criarTr.className='text-info'
         totalContigencia ++
       }else if (STATUS == 4){
         STATUS = "Inutilização Nº"
         valorContigencia += VALOR
         criarTr.className='text-secondary'
         totalContigencia ++
       }else if (STATUS == 5){
         STATUS = "Denegado"
         valorContigencia += VALOR
         criarTr.className='denegado'
         totalContigencia ++
       }else{
        STATUS = "Ausente"
       }
     
     //Cria as Td's dentro das linhas
     for(let j = 0; j < cabeçalhoTable.length; j++){
       
      
 
      const criarTd = document.createElement('td')
       const tdMap = {
         "COD. NUM": { headers: "chave", valor: CHAVE },
         "DATA EMISSÃO": { headers: "data", valor: DATA_EMISSAO },
         "NAT. OP": { headers: "nOp", valor: NAT_OP },
         "VALOR": { headers: "valor", valor: VALOR },
         "MODELO": { headers: "modelo", valor: MODELO },
         "STATUS": { headers: "status", valor: STATUS },
         "NFE NUMERO": { headers: "nNum", valor: NFE_NUMERO },
         "Nº SERIE": { headers: "nSerie", valor: N_SERIE }
       };
    
       const tdInfo = tdMap[cabeçalhoTable[j]];
       if (tdInfo) {
         criarTd.headers = tdInfo.headers;
         criarTd.innerHTML = tdInfo.valor;
          
        
       }
        
       
       criarTr.appendChild(criarTd)      
     }
       
     criaTbody.appendChild(criarTr)
  
 
        
       
     




      
    };
    leitor.readAsText(arquivo)
   
    ///////FIM-Função para leitura dos arquivos////////


   
          tArquivos[0].innerHTML = input.files.length
  }
  






 ////////Montando a tabela com os dados////////
  criarTabela.appendChild(criarThead)
  criarTabela.appendChild(criaTbody)
  dados.appendChild(criarTabela)

}








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

