alert('Passou por ai');

function mostrarArquivos() {
  const input = document.getElementById("file");
  const arquivos = input.files; // FileList
  const lista = document.getElementById("listaArquivos");
  lista.innerHTML = ""; // Limpa o conteúdo anterior

  for (let i = 0; i < arquivos.length; i++) {
    const item = document.createElement("p");
    item.textContent = `Arquivo ${i + 1}: ${arquivos[i].name} - (${
      arquivos[i].type
    }, ${arquivos[i].size} bytes)`;
    lista.appendChild(item);
  }
  console.log(arquivos);
};


