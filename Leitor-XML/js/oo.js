$(document).ready(()=>{
 //Entidade XML
  class Xml {
    constructor(){
      this._cnpj = ''
      this.chave = ''
      this.dataEmissao = ''
      this.naturaOp = ''
      this.valor = ''
      this.modelo = ''
      this.status = ''
      this.nfeNumero = ''
      this.numSerie = ''
      this._xmlString = null;       // Armazena o XML bruto
      this._parsedXml = null;       // Armazena o XML já parseado
      this._produtos = [];

    }
    //Ler o retorno de FileRead como string
    lerXML(_xmlString){
      this._xmlString = _xmlString;
      
      //console.log(this._xmlString)
    };
    parserXml() {
      if(!this._xmlString){
        throw new Error ("Arquivo não carregado")
      };
      const parser = new DOMParser()
      this._parsedXml = parser.parseFromString(this._xmlString, 'text/xml')
      
      
      //Povoando as informações do objeto com os dados dos arquivos analisados
      this._cnpj = this._parsedXml.querySelector("CNPJ")?.textContent || this._cnpj;
      this.chave = this._parsedXml.querySelector("chNFe")?.textContent || this.chave;
      this.dataEmissao = this._parsedXml.querySelector("dhEmi")?.textContent || this.dataEmissao;
      this.naturaOp = this._parsedXml.querySelector("natOp")?.textContent || this.naturaOp;
      this.modelo = this._parsedXml.querySelector("mod")?.textContent || this.modelo;
      this.valor = this._parsedXml.querySelector("vNF")?.textContent || this.valor;
      this.status = this._parsedXml.querySelector("cStat")?.textContent || this.status;
      this.nfeNumero = this._parsedXml.querySelector("nNF")?.textContent || this.nfeNumero;
      this.numSerie = this._parsedXml.querySelector("serie")?.textContent || this.numSerie;
      

    };

    verficaCancelado(chave) {
    }; 
  }; 

  const arquivos = $('#file')[0].files //FileList

  for (let i= 0; i < arquivos.length; i++) {
    
    const reader = new FileReader() //leitura do Arquivo formato texto.
    let xml = new Xml() //a cada interação do laço, um novo objeto XML é criado 
    reader.onload = (event) => {
      
      const xmlString = event.target.result    
        xml.lerXML(xmlString)
        xml.parserXml()
        console.log(xml.chave)
        //console.log(xml)
    }; reader.readAsText(arquivos[i]) //arquivo a ser lido
    
    
  }

 


  
  
  





 


});


//const arquivos = $('#file')[0].files //FileList