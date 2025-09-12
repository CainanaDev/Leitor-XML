<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

  <!--Font Awesome-->
  <script src="https://kit.fontawesome.com/1b112f6203.js" crossorigin="anonymous"></script>

  <!-- Custom CSS -->
  <link rel="stylesheet" type="text/css" href="css/style.css">

  <script src="js/js.js"></script>

  <title>Pagina Inicial</title>
</head>

<body>
  <header>
    <div id="logo">Minha logo</div>
    <h2>Leitor XML</h2>
    <div id="cadastro">
      <a href="">Login</a> |
      <a href="">Cadastro</a>
    </div>

  </header>

  <hr>

  <nav>
    <div id="lateral">
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Fale Conosco</a></li>
        <li><a href="">Dashboard</a></li>
      </ul>
    </div>
  </nav>

  <div>
    <div class="mae">
      <div class="input">

        <input type="file" id="file" name="file[]" multiple accept=".xml" />

        <div>
          <button onclick="mostrarArquivos()">Submit</button>
        </div>
      </div>
    </div>
    <hr>

    <h4 style="clear: both;">Os arquivos devem aparecer abaixo</h4>

    <div id="listaArquivos"></div>


  </div>

  <footer>
    <p>&copy; 2025 - Todos os direitos reservados</p>
  </footer>

</body>



</html>