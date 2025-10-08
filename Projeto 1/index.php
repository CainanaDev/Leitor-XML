<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
  <!--Namalize CSS-->
  <link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css">

  <!--Font Awesome-->
  <script src="https://kit.fontawesome.com/1b112f6203.js" crossorigin="anonymous"></script>

  <!-- Custom CSS -->
  <link rel="stylesheet" type="text/css" href="css/style.css">
  <link rel="stylesheet" type="text/css" href="css/midia.css">

  <script src="js/js.js"></script>

  <title>Pagina Inicial</title>
</head>

<body id="home">

  <header class="d-flex text-center bg-primary m-0 h-0">
    <div class="lead text-monospace" id="logo">
      XML<span class="font-italic">Analyse</span>
    </div>
    <div id="texto">
      <h2 class="font-weight-bold text-uppercase">Leitor XML</h2>
    </div>
    <div id="cadastro">
      <a class="btn btn-light" href="#">Login</a> |
      <a class="btn btn-light" href="#">Cadastro</a>
    </div>
  </header>

  <hr class="mb-4 mt-4">

  <div class="container-fluid">
    <div id="principal">
      <div class="menu mr-3">
        <nav id="lateral">
          <ul class="nav nav-pills flex-column">
            <li class="nav-item">
              <a class="nav-link btn" href="">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link btn" href="">Fale Conosco</a>
            </li>
            <li class="nav-item btn">
              <a class="nav-link btn" href="">Dashboard</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="conteudo bg-light">
        <div class="form-group">
          <label for="file">Clique no botão PROCURAR para carregar o arquivo:</label><br>
          <input class="btn form-control bg-light" type="file" id="file" name="file[]" multiple accept=".xml" />

          <br>
          <div>
            <button class="btn btn-danger" onclick="mostrarArquivos()">Analisar informações</button>
          </div>
          <div>
            <button class="btn btn-success m-2" onclick="VerCancelado()">Analisar</button>
          </div>
        </div>
      </div>
    </div>
    <br>
    <div class="progress">
      <div class="progress-bar bg-success progress-bar-striped progress-bar-animated w-75">75%</div>
    </div>

    <hr class="mb-2 mt-4">
    <div class="sticky-top bg-light d-flex flex-row justify-content-around align-items-center text-arround" id="dados3">
      <p>Total arquivos:</p>
      <p>Valor total:</p>
      <p>Valor Valido:</p>
      <p>Valor Contigencia:</p>
      <p>Modelos carregados:</p>
      <p>Contigencias:</p>
     
    </div>
    

    <div class="table-responsive" id="dados">
      <table class="table table-striped table-hover">
        <thead class="thead-light">
          <tr>
            <th id="chave">CHAVE</th>
            <th id="data">Data Emissão</th>
            <th id="cfop">CFOP</th>
            <th id="valor">Valor</th>
            <th id="modelo">Modelo</th>
            <th id=status>Status</th>
            <th id="canc">Cancelado</th>
            <th id="tributacao">CSOSN/CST</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td headers="chave">29250813998613000101650030001458881340264748</td>
            <td headers="data">01/08/25</td>
            <td headers="cfop">6102</td>
            <td headers="valor">7,40</td>
            <td headers="modelo">65</td>
            <td headers="status">Aprovado</td>
            <td headers="canc">Sim</td>
            <td headers="tributacao">500</td>
          </tr>
          <tr>
            <td headers="chave">29250813998613000101650030001458881340264748</td>
            <td headers="data">01/08/25</td>
            <td headers="cfop">5102</td>
            <td headers="valor">8,44</td>
            <td headers="modelo">65</td>
            <td headers="status">Contigencia</td>
            <td headers="canc">Sim</td>
            <td headers="tributacao">500</td>
          </tr>
          <tr>
            <td headers="chave">29250813998613000101650030001458881340264748</td>
            <td headers="data">01/08/25</td>
            <td headers="cfop">6102</td>
            <td headers="valor">7,40</td>
            <td headers="modelo">65</td>
            <td headers="status">Aprovado</td>
            <td headers="canc">Sim</td>
            <td headers="tributacao">500</td>
          </tr>
          <tr>
            <td headers="chave">29250813998613000101650030001458881340264748</td>
            <td headers="data">01/08/25</td>
            <td headers="cfop">6102</td>
            <td headers="valor">7,40</td>
            <td headers="modelo">65</td>
            <td headers="status">Aprovado</td>
            <td headers="canc">Sim</td>
            <td headers="tributacao">500</td>
          </tr>
          <tr>
            <td headers="chave">29250813998613000101650030001458881340264748</td>
            <td headers="data">01/08/25</td>
            <td headers="cfop">6102</td>
            <td headers="valor">7,40</td>
            <td headers="modelo">65</td>
            <td headers="status">Aprovado</td>
            <td headers="canc">Sim</td>
            <td headers="tributacao">500</td>
          </tr>
          <tr>
            <td headers="chave">29250813998613000101650030001458881340264748</td>
            <td headers="data">01/08/25</td>
            <td headers="cfop">6102</td>
            <td headers="valor">7,40</td>
            <td headers="modelo">65</td>
            <td headers="status">Aprovado</td>
            <td headers="canc">Sim</td>
            <td headers="tributacao">500</td>
          </tr>
          <tr>
            <td headers="chave">29250813998613000101650030001458881340264748</td>
            <td headers="data">01/08/25</td>
            <td headers="cfop">6102</td>
            <td headers="valor">7,40</td>
            <td headers="modelo">65</td>
            <td headers="status">Aprovado</td>
            <td headers="canc">Sim</td>
            <td headers="tributacao">500</td>
          </tr>
          <tr>
            <td headers="chave">29250813998613000101650030001458881340264748</td>
            <td headers="data">01/08/25</td>
            <td headers="cfop">6102</td>
            <td headers="valor">7,40</td>
            <td headers="modelo">65</td>
            <td headers="status">Aprovado</td>
            <td headers="canc">Sim</td>
            <td headers="tributacao">500</td>
          </tr>
            <tr>
            <td headers="chave">29250813998613000101650030001458881340264748</td>
            <td headers="data">01/08/25</td>
            <td headers="cfop">6102</td>
            <td headers="valor">7,40</td>
            <td headers="modelo">65</td>
            <td headers="status">Aprovado</td>
            <td headers="canc">Sim</td>
            <td headers="tributacao">500</td>
          </tr>
            <tr>
            <td headers="chave">29250813998613000101650030001458881340264748</td>
            <td headers="data">01/08/25</td>
            <td headers="cfop">6102</td>
            <td headers="valor">7,40</td>
            <td headers="modelo">65</td>
            <td headers="status">Aprovado</td>
            <td headers="canc">Sim</td>
            <td headers="tributacao">500</td>
          </tr>
            <tr>
            <td headers="chave">29250813998613000101650030001458881340264748</td>
            <td headers="data">01/08/25</td>
            <td headers="cfop">6102</td>
            <td headers="valor">7,40</td>
            <td headers="modelo">65</td>
            <td headers="status">Aprovado</td>
            <td headers="canc">Sim</td>
            <td headers="tributacao">500</td>
          </tr>
            <tr>
            <td headers="chave">29250813998613000101650030001458881340264748</td>
            <td headers="data">01/08/25</td>
            <td headers="cfop">6102</td>
            <td headers="valor">7,40</td>
            <td headers="modelo">65</td>
            <td headers="status">Aprovado</td>
            <td headers="canc">Sim</td>
            <td headers="tributacao">500</td>
          </tr>
            <tr>
            <td headers="chave">29250813998613000101650030001458881340264748</td>
            <td headers="data">01/08/25</td>
            <td headers="cfop">6102</td>
            <td headers="valor">7,40</td>
            <td headers="modelo">65</td>
            <td headers="status">Aprovado</td>
            <td headers="canc">Sim</td>
            <td headers="tributacao">500</td>
          </tr>
            <tr>
            <td headers="chave">29250813998613000101650030001458881340264748</td>
            <td headers="data">01/08/25</td>
            <td headers="cfop">6102</td>
            <td headers="valor">7,40</td>
            <td headers="modelo">65</td>
            <td headers="status">Aprovado</td>
            <td headers="canc">Sim</td>
            <td headers="tributacao">500</td>
          </tr>

        </tbody>
      </table>
    </div>
    <h4 style="margin: 10px;">Os arquivos devem aparecer abaixo</h4>
    <div class="bg-light mb-5" id="listaArquivos">
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

  <hr>
  <footer class="mt-2 mb-0 h-2 w-5 pt-2 pb-0 bg-dark fixed-bottom">
    <p>&copy; 2025 - Todos os direitos reservados</p>
  </footer>


  <!-- JavaScript (Opcional) -->
  <!-- jQuery primeiro, depois Popper.js, depois Bootstrap JS -->
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>

</body>



</html>