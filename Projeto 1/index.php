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

<body id="home">

  <header>
    <div id="logo">Minha logomarca</div>
    <div id="texto">
      <h2>Leitor XML</h2>
    </div>
    <div id="cadastro">
      <a href="#">Login</a> |
      <a href="#">Cadastro</a>
    </div>
  </header>

  <hr>

  <div id="container">
    <div id="principal">
      <div class="menu">
        <nav>
          <ul>
            <li class="home"><a href="">Home</a></li>
            <li class="contato"><a href="">Fale Conosco</a></li>
            <li class="backend"><a href="">Dashboard</a></li>
          </ul>
        </nav>
      </div>
      <div class="conteudo">
        <div>
          <input type="file" id="file" name="file[]" multiple accept=".xml" />
          <br>
          <div>
            <button onclick="mostrarArquivos()">Submit</button>
          </div>
        </div>
      </div>
    </div>

    <hr>
    <div id=dados>
      <table>
        <tr>
          <th>CHAVE</th>
          <th>Data Emissão</th>
          <th>CFOP</th>
          <th>Valor</th>
          <th>Modelo</th>
          <th>Status</th>
          <th>Cancelado</th>
        </tr>
        <tr>
          <td>29250813998613000101650030001458881340264748</td>
          <td>01/08/25</td>
          <td>6102</td>
          <td>7,40</td>
          <td>65</td>
          <td>Aprovado</td>
          <td>Não</td>
        </tr>
      </table>
    </div>
    <h4 style="margin: 10px;">Os arquivos devem aparecer abaixo</h4>
    <div id="listaArquivos">
      <h1>Teste</h1>
    </div>


    <!--<div class="mae">
      <div class="input">

        <input type="file" id="file" name="file[]" multiple accept=".xml" />

        <div>
          <button onclick="mostrarArquivos()">Submit</button>
        </div>
      </div>

      <nav id="lateral">
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Fale Conosco</a></li>
          <li><a href="">Dashboard</a></li>
        </ul>
      </nav>

    </div>

    <hr>
    <h4 style="clear: both; margin:10px">Os arquivos devem aparecer abaixo</h4>

    <div id="listaArquivos"></div>
    -->

  </div>


  <footer>
    <p>&copy; 2025 - Todos os direitos reservados</p>
  </footer>

</body>



</html>