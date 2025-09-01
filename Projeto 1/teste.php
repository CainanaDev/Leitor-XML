<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <!--
  <form method="POST" action="teste.php" enctype="multipart/form-data">
    <div>
      <label for="file">Choose file to upload</label>
      <input type="file" id="file" name="file[]" multiple accept=".xml" />
    </div>

    <div>
      <button onclick="mostrarArquivos()">Submit</button>
    </div>
  </form>

  <div id="listaArquivos"></div>
  -->
  <input type="file" id="file" name="file[]" multiple accept=".xml" />
  <div>
    <button onclick="mostrarArquivos()">Submit</button>
  </div>
  <div id="listaArquivos"></div>


</body>

<script>
  function mostrarArquivos() {
    const input = document.getElementById('file');
    const arquivos = input.files; // FileList
    const lista = document.getElementById('listaArquivos');
    lista.innerHTML = ''; // Limpa o conteúdo anterior

    for (let i = 0; i < arquivos.length; i++) {
      const item = document.createElement('p');
      item.textContent = `Arquivo ${i + 1}: ${arquivos[i].name} (${arquivos[i].type}, ${arquivos[i].size} bytes)`;
      lista.appendChild(item);
    }
    console.log(arquivos)
  }
</script>

</html>