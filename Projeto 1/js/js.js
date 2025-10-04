
//alert('Passou por ai');

function mostrarArquivos() {
  const input = document.getElementById("file");
  const arquivos = input.files; // FileList
  const lista = document.getElementById("listaArquivos");
  lista.innerHTML = ""; // Limpa o conteúdo anterior
  const dados = document.getElementById("dados")
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

};


function VerCancelado() {
  let x = null;

  const c = document.querySelectorAll('td[headers="canc"]');
  const b = c[0];
  console.log(b.textContent);

  if (b.textContent == "Sim") {
    x = true;
  } else {
    x = false;
  }
  console.log(x);
}


