$(document).ready(()=>{
 //Entidade XML
  class Xml {
    constructor(){
      this.cnpj = 'Ausente'
      this.chave = 'Ausente'
      this.dataEmissao = 'Ausente'
      this.naturaOp = 'Ausente'
      this.valor = 'Ausente'
      this.modelo = 'Ausente'
      this.status = 'Ausente'
      this.nfeNumero = 'Ausente'
      this.numSerie = 'Ausente'
      this._xmlString = null;       // Armazena o XML bruto
      this._parsedXml = null;       // Armazena o XML já parseado
      this._produtos = 'Ausente';          // Amarzena os produtos para futura analise
    }
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
        this.cnpj = this._parsedXml.querySelector("CNPJ")?.textContent || this.cnpj;
        this.chave = this._parsedXml.querySelector("chNFe")?.textContent || this.chave;
        this.dataEmissao = this._parsedXml.querySelector("dhEmi")?.textContent || this.dataEmissao;
        this.naturaOp = this._parsedXml.querySelector("natOp")?.textContent || this.naturaOp;
        this.modelo = this._parsedXml.querySelector("mod")?.textContent || this.modelo;
        this.valor = this._parsedXml.querySelector("vNF")?.textContent || this.valor;
        this.status = this._parsedXml.querySelector("cStat")?.textContent || this.status;
        this.nfeNumero = this._parsedXml.querySelector("nNF")?.textContent || this.nfeNumero;
        this.numSerie = this._parsedXml.querySelector("serie")?.textContent || this.numSerie;
        this._produtos = this._parsedXml.querySelectorAll("det") //?.textContent || this._produtos;
        
     
    }

    buscaProduto(){
      for (let i = 0; i < this._produtos.length; i++) {
        const produtos = this._produtos[i].children[0].children;
        const impostos = this._produtos[i].children[1].children;
        console.log(produtos)
        console.log(impostos)
        
      }
    }

    //Verifica o status do XML
    verficaCancelado(chave, status) {
      this.status
      this.chave
      if (status == 100 || status == 150) {
          
          if(status==150){
           console.log("Ai sim, pow: Autorizado NF-e, fora de prazo") 
          }else{
            console.log ( "Ai sim, pow: Autorizado")          
          }
        }else if (status == 101){
          console.log(`Isso é tudo, menos autorizado`)
        // 
        }else if (status == 3){
          //status = "Cancelamento NF"
          
         
        }else if (status == 4){
          //status = "Inutilização Nº"
          
        }else if (status == 5){
          //status = "Denegado"
         
        }

    }; 
    
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
              //console.log('Chave do XML: '+ xml.chave)
              //console.log('Codigo do Status: '+ xml.status)  
              
              resolve()
            };reader.readAsText(arquivos[i]);
            
        }); //fim promise
        promises.push(promise)  
       
      }catch{
        console.log('Tu Caiu no catch - hum....')
      }


    }//fim do loop

    

    // AGUARDA TODOS OS ARQUIVOS
    await Promise.all(promises);
    atualizador(arquivos, xmlInst)
 }; //Fim função async
 
  function atualizador(qtd,arq){
    let vT = 0
    let vV = 0
    let vC = 0
    let tV = 0
    let tC = 0
    for(let i in arq){
      const vX = arq[i][4]
      const sX = arq[i][6]
      let valor = parseFloat(vX)
      vT += valor
      if(!(sX === "100" || sX === "150")){
        console.log('Vamos verificar isso')
        console.log(sX)
        vC +=valor
        tC +=1
      } else{
        console.log('Autorizado fresco')
         console.log(sX)
         vV += valor
         tV +=1
      }
    }
     
      
    
 
      //Atualiza Barra de totalizadores
      const tArquivos = document.querySelectorAll('#tArquivos');
      const vTotal = document.querySelectorAll('#vTotal');
      const vValido = document.querySelectorAll('#vValido');
      const vContigencia = document.querySelectorAll('#vContigencia');
      const tArquivosValidos = document.querySelectorAll('#tArquivosValidos');
      const tContigencia = document.querySelectorAll('#tContigencia');

   

    
    tArquivos[0].innerHTML = qtd.length
    vTotal[0].innerHTML = vT.toFixed(2)
    vValido[0].innerHTML = vV.toFixed(2)
    vContigencia[0].innerHTML= vC.toFixed(2)
    tArquivosValidos[0].innerHTML= tV
    tContigencia[0].innerHTML= tC 


  }

  function procuraDuplicado(i,chave){
        
   const verificador = xmlInst.includes(chave)
   console.log(chave)
   console.log(i)
   console.log(verificador)
   }; 





  


 



 document.getElementById('debug').addEventListener('click', processarArquivos);



});

 

 

//const arquivos = $('#file')[0].files //FileList

/*
const reader = new FileReader();

reader.onprogress = (event) => {
  if (event.lengthComputable) {
    const percent = (event.loaded / event.total) * 100;
    console.log("Progresso:", percent);
  }
};

reader.onload = () => {
  const text = reader.result;
  const doc = new DOMParser().parseFromString(text, "text/xml");
  console.log("Processamento concluído");
};

reader.readAsText(file);
*/





/*
////////////Promise e outras funções necessarias a serem implementadas futuramente

// Função para processar uma lista de arquivos e retornar uma Promise
function processFiles(fileList) {
  const promises = [];
  const xmlInstances = [];

  for (let i = 0; i < fileList.length; i++) {
    const promise = new Promise((resolve) => {
      const reader = new FileReader();
      let xml = new Xml();

      reader.onload = (event) => {
        const xmlString = event.target.result;
        xml.lerXML(xmlString);
        xml.parserXml();
        xml.verficaCancelado(xml.chave, xml.status);

        console.log('Chave do XML: ' + xml.chave);
        console.log('Codigo do Status: ' + xml.status);
        console.log('--------------');

        xmlInstances.push(xml);
        resolve();
      };

      reader.readAsText(fileList[i]);
    });

    promises.push(promise);
  }

  return Promise.all(promises).then(() => xmlInstances);
}



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