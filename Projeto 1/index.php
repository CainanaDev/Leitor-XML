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

  <title>
    Pagina Inicial
  
  </title>
</head>

<body id="home">
<!--Cabeçalho-->
  <header class=" d-flex text-center bg-primary m-0 h-0">
   
      <div class="lead text-monospace" id="logo">
        XML<span class="font-italic">Analyse</span>
      </div>
      <div  id="texto">
        <h2 class="font-weight-bold text-uppercase">Leitor XML</h2>
      </div>
      <div  id="cadastro">
        <a class="btn btn-light" href="#">Login</a> <span id="marcador">|</span>
        <a class="btn btn-light" href="#">Cadastro</a>
      </div>
  
  </header>
<!--Cabeçalho /fim-->
  <hr class="mb-4 mt-4">

  <div class="container-fluid">
    <div class="row" id="principal"> <!--Parte Central do Site-->
     
      <div class="col-lg-2 menu mr-2 ml-2"> <!--Menu Lateral-->
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
      </div>  <!--Menu Lateral /fim-->
    
      <div class=" col-lg-9 conteudo bg-light">   <!--Forms e Buttons-->
        <div class="form-group">
          <label for="file">Clique no botão PROCURAR para carregar o arquivo:</label><br>
          <input class="btn form-control bg-light" type="file" id="file" name="file[]" multiple accept=".xml" />

          <br>
          <div>
            <button class="btn btn-danger" onclick="mostrarArquivos()">Analisar informações</button>
          </div>
          <div>
            <button class="btn btn-success m-2" onclick="debug()">Debug</button>
          </div>
        </div>
      </div>  <!--Forms e Buttons /fim-->
    </div><!--Parte Central do Site /fim-->
    <br>

    <div class="progress"><!--Barra progresso-->
      <div class="progress-bar bg-success progress-bar-striped progress-bar-animated w-75">75%</div>
    </div><!--Barra progresso/fim-->

    <hr class="mb-2 mt-4">

    <!--Barra Totalizadores-->
    <div class="sticky-top bg-light d-flex flex-row   justify-content-around   text-arround no-gutters pl-3 pr-3 pt-3" id="dados3">
      <div class="col-2">  
        <p >Total arquivos: <span id="tArquivos"></span></p>
      </div>
      <div class="col-2">
       <p >Valor total R$: <span id="vTotal"></span></p>
      </div>
      <div class="col-2">
       <p >Valor Valido R$: <span id="vValido"></span></p>
      </div>
      <div class="col-2">

       <p >Valor Contigencia R$: <span id="vContigencia"></span></p>
      </div>
      <div class="col-2">
       <p>Modelos carregados: <span id="tModelo" ></span></p>
      </div>
      <div class="col-2">
      <p>Contigencias: <span id="tContigencia"></span></p>
      </div>
    </div><!--Barra Totalizadores /fim-->

    
    <!--Tabela informções-->
    <div id="dados" class="table-responsive">
     
    </div>
    <!--Tabela informções /fim-->

  <hr>
  <footer class="mt-2 mb-0 h-2 w-5 pt-2 pb-0 bg-dark fixed-bottom mt-5">
    <p>&copy; 2025 - Todos os direitos reservados</p>
  </footer>

  <script src="js/js.js"></script>
  <!-- JavaScript (Opcional) -->
  <!-- jQuery primeiro, depois Popper.js, depois Bootstrap JS -->
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>

</body>



</html>