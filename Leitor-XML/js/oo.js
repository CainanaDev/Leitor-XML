$(document).ready(()=>{
 //Entidade XML
  class Xml {
      #infProt = null
      cnpj = 'Ausente'
      chave = 'Ausente'
      dataEmissao = 'Ausente'
      naturaOp = 'Ausente'
      valor = 'Ausente'
      modelo = 'Ausente'
      status = 'Ausente'
      nfeNumero = 'Ausente'
      numSerie = 'Ausente'
      _xmlString = null;       // Armazena o XML bruto
      _parsedXml = null;       // Armazena o XML já parseado
      _produtos = 'Ausente';          // Amarzena os produtos para futura analise
    
    //Ler o retorno de FileRead como string
    lerXML(xmlString){
      this._xmlString = xmlString  ;
      
    };

    parserXml() {
      
        //Recebe a String do XML bruto
        if(!this._xmlString){
          throw new Error ("Arquivo não carregado")
        };
        //Faz o Parse do txt do XML para um elemento DOM
        const parser = new DOMParser()
        this._parsedXml = parser.parseFromString(this._xmlString, 'text/xml')
        //console.log(this._parsedXml)
    
        //Povoando as informações do objeto com os dados dos arquivos analisados
        this.cnpj = this._parsedXml.querySelector("CNPJ")?.textContent ?? this.cnpj;
        this.chave = this._parsedXml.querySelector("chNFe")?.textContent || this.chave;
        this.dataEmissao = this._parsedXml.querySelector("dhEmi")?.textContent || this.dataEmissao;
        this.naturaOp = this._parsedXml.querySelector("natOp")?.textContent || this.naturaOp;
        this.modelo = this._parsedXml.querySelector("mod")?.textContent || this.modelo;
        this.valor = this._parsedXml.querySelector("vNF")?.textContent || this.valor;
        this.status = this._parsedXml.querySelector("cStat")?.textContent || this.status;
        this.nfeNumero = this._parsedXml.querySelector("nNF")?.textContent || this.nfeNumero;
        this.numSerie = this._parsedXml.querySelector("serie")?.textContent || this.numSerie;
        this._produtos = this._parsedXml.querySelectorAll("det") //?.textContent || this._produtos;
        this.#infProt = this._parsedXml.querySelector('infProt')?.childNodes
       
        
     
    }

    buscaProduto(){
      for (let i = 0; i < this._produtos.length; i++) {
        const produtos = this._produtos[i].children[0].children;
        const impostos = this._produtos[i].children[1].children;
        console.log(produtos)
        console.log(impostos)
        
      }
    }

    
    //retorna as informações do objeto em questão em formato de array.
    toTableRow() {
      return  [
        this.cnpj,
        this.chave,
        this.dataEmissao, 
        this.naturaOp,
        this.valor,
        this.modelo,
        this.status,
        this.nfeNumero,
        this.numSerie,
        
      ]
    };

    validaDados(){
      for(let i in this){
        console.log(i, this[i])
      }
    }

    
  }; 
 ////////// Ajustes do sincronismo das funções//////
  async function processarArquivos() {
    
    const arquivos = $('#file')[0].files //FileList - Seleciona os arquivos carregados
    const maxFile = $('#file')[0].dataset.maxFiles
    if(arquivos.length > maxFile){
      alert('Quantidade maior que a permitida. Por favor reduza a quantidade!!')
       throw new Error ("Quantidade Maior que a permitida")
    }
    const xmlInst = []; //Amazena as intancias de XML
    const promises = []; //Guarda as promises das funções
    for (let i= 0; i < arquivos.length; i++) {
      try{
        const promise = await new Promise( (resolve) => {

            //Instancia de FeleReader que transforma o arquivo carregado em texto bruto
            const reader = new FileReader() //leitura do Arquivo formato texto.
            let xml = new Xml() //a cada interação do laço, um novo objeto XML é criado 
            reader.onload = (event)=>{
              const xmlString = event.target.result    
              xml.lerXML(xmlString)
              xml.parserXml()
             // xml.verficaCancelado(xml.chave, xml.status)
              //xml.buscaProduto()
              //xml.validaDados()
              xmlInst.push(xml.toTableRow())
              resolve()
            };reader.readAsText(arquivos[i]);//Fim FileReader
        }); //fim promise
        promises.push(promise)   
      }catch{console.log('Tu Caiu no catch - hum....')};
    }//fim do loop
    // AGUARDA TODOS OS ARQUIVOS
    await Promise.all(promises);
    procuraDuplicado(xmlInst, arquivos.length)
 }; //Fim função async
 
  //procura valores duplicados
  function procuraDuplicado(inst, qtd){
    const confere = new Set();
    const filtrado = inst.filter(([a, chave]) => {
    if (confere.has(chave)) return false; // já vimos essa chave = descarta
    confere.add(chave);                   // primeira vez → guarda
    return true;
   });
   atualizador(qtd, filtrado)
   viewer(filtrado)
   
  }; 
  ////Atualiza Barra de Totalizadores///////
  function atualizador(qtd,arq){
    let vT = 0
    let vV = 0
    let vC = 0
    let tV = 0
    let tC = 0

    //Selecionando elementos da barra de totalizadores
    const tArquivos = document.querySelectorAll('#tArquivos');
    const vTotal = document.querySelectorAll('#vTotal');
    const vValido = document.querySelectorAll('#vValido');
    const vContigencia = document.querySelectorAll('#vContigencia');
    const tArquivosValidos = document.querySelectorAll('#tArquivosValidos');
    const tContigencia = document.querySelectorAll('#tContigencia');

    //Loop para soma dos valores  
    for(let i in arq){
      
      const vX = arq[i][4]
      let valor = parseFloat(vX)
      const sX = arq[i][6]
      vT += valor
      if(!(sX === "100" || sX === "150")){
        vC +=valor
        tC +=1
      }else{
         vV += valor
         tV +=1
      }
    };//Fim do Loop

  

    //Atribução dinamica de valores da barra
    tArquivos[0].innerHTML = qtd
    vTotal[0].innerHTML = vT.toFixed(2)
    vValido[0].innerHTML = vV.toFixed(2)
    vContigencia[0].innerHTML= vC.toFixed(2)
    tArquivosValidos[0].innerHTML= tV
    tContigencia[0].innerHTML= tC 

  };

  ///Renderização da tabela pra vizualização
  async function viewer(xmlInst){
    //console.log(xmlInst)
    const criarTabela = document.getElementById('table')
    const criaTbody = document.getElementById('view')
    criaTbody.innerHTML=''
    criarTabela.className = "table table-hover table-sm"

    


    for (const key in xmlInst) {
        criaTr = document.createElement('tr')
         
        /* kaymap = [CHAVE = xmlInst[key][1]
         DATA = xmlInst[key][2]
         NAT_OP = xmlInst[key][3]
         VALOR = xmlInst[key][4]
         MODELO = xmlInst[key][5]
         status = xmlInst[key][6]
         NFE_NUMERO = xmlInst[key][7]
         N_SERIE = xmlInst[key][8]]
        */
        //Tratativa Retorno Status
        if(xmlInst[key][6] == 100 ||xmlInst[key][6] == 150 ){
          xmlInst[key][6] = 'Autorizado'
           criaTr.className='autorizado'
        }else if (xmlInst[key][6] == 2){
          xmlInst[key][6] = "Consultar SEFAZ"
          criaTr.className= "text-danger"
        }else if (xmlInst[key][6] == 3){
          xmlInst[key][6] = "Cancelamento NF"
          valorContigencia += VALOR
          criarT.className='text-info'
        }
        //Tratativa Retorno Modelo
        if(xmlInst[key][5] == 65){
          xmlInst[key][5] = 'NFCe'
        }else if(xmlInst[key][5]== 55){
          xmlInst[key][5] = 'NFe'
        }else(
          xmlInst[key][5] = 'NOTA FISCAL'
        )
        for(let i = 1; i<9; i++){
          const criarTd = document.createElement('td')
        
          criarTd.innerHTML = xmlInst[key][i];
          
          criaTr.appendChild(criarTd)
        }
    

     
     await  criaTbody.appendChild(criaTr)


      

      
      
      //console.log(key, xmlInst)
      
      
    }
   

   //console.log(tableData)









   
  }

 document.getElementById('debug').addEventListener('click', processarArquivos)

 /*
  function verificaQtd (){

  const maxFile = $('#file')[0].dataset.maxFiles
  const qtdInput = $('#file')[0].files.length
  

  if(qtdInput > maxFile ){
    console.log('Quantidade Maior que a permitida')
  } else(
    document.getElementById('debug').addEventListener('click', processarArquivos)
  )
  }*/
});

 

 




/*


////////////tabela////////////////////
// Função para renderizar a tabela a partir do array de instâncias de Xml
function renderTable(xmlInstances) {
    const tableBody = document.getElementById('tabela-body'); // Supondo que exista um <tbody id="tabela-body">

    // Converter cada instância em uma linha de array
    const tableData = xmlInstances.map(xml => xml.toTableRow());

    // Limpar o corpo da tabela
    tableBody.innerHTML = '';

    // Para cada linha de dados, criar uma linha na tabela
    tableData.forEach(rowArray => {
        const tr = document.createElement('tr');

        rowArray.forEach(cellValue => {
            const td = document.createElement('td');
            td.textContent = cellValue;
            tr.appendChild(td);
        });

        tableBody.appendChild(tr);
    });
}



// Uso: quando o input de arquivo muda
document.getElementById('file').addEventListener('change', async (e) => {
    const files = e.target.files;
    const xmlInstances = await processFiles(files);
    renderTable(xmlInstances);
});







class Xml {
    // ... SEU CÓDIGO ATUAL (já está bom)
}

// PROCESSAMENTO CORRETO:
async function processarArquivos() {
    const arquivos = $('#file')[0].files;
    const xmlInstances = []; // ARMAZENA TODAS AS INSTÂNCIAS
    const promises = [];

    for (let i = 0; i < arquivos.length; i++) {
        const promise = new Promise((resolve) => {
            const reader = new FileReader();
            const xml = new Xml();

            reader.onload = (event) => {
                const xmlString = event.target.result;
                xml.lerXML(xmlString);
                xml.parserXml();
                // xml.verficaCancelado(xml.chave, xml.status); // Desconsiderado
                
                xmlInstances.push(xml); // ARMAZENA A INSTÂNCIA
                resolve();
            };
            reader.readAsText(arquivos[i]);
        });
        promises.push(promise);
    }

    // AGUARDA TODOS OS ARQUIVOS
    await Promise.all(promises);
    
    // CONVERTE PARA ARRAY DE ARRAYS E RENDERIZA
    renderizarTabela(xmlInstances);
}

// FUNÇÃO DE RENDERIZAÇÃO:
function renderizarTabela(xmlInstances) {
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';

    // CONVERTE CADA INSTÂNCIA EM ARRAY
    const tableData = xmlInstances.map(xml => xml.toTableRow());

    // CRIA AS LINHAS DA TABELA
    tableData.forEach(rowData => {
        const tr = document.createElement('tr');
        
        rowData.forEach(cellData => {
            const td = document.createElement('td');
            td.textContent = cellData;
            tr.appendChild(td);
        });
        
        tableBody.appendChild(tr);
    });
}

// EXECUTAR QUANDO SELECIONAR ARQUIVOS:
document.getElementById('file').addEventListener('change', processarArquivos);
*/