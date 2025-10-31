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

    };
    //Ler o retorno de FileRead como string
    lerXML(_xmlString){
      this._xmlString = _xmlString;
      console.log(_xmlString)
    };
    parserXml() {
      if(!this._xmlString){
        throw new Error ("Arquivo não carregado")
      };
      const parser = new DOMParser()
      this._parsedXml = parser.parseFromString(this._xmlString, 'text/xml')
      console.log(_parsedXml)
    };

    verficaCancelado(chave) {
    }; 
  };
  
  let xml = new Xml()
  console.log(xml.parserXml())

});


//const input = $('#file')[0].files //FileList