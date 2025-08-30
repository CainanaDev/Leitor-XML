<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <form method="POST" action="teste2.php" enctype="multipart/form-data">
    <div>
      <label for="file">Choose file to upload</label>
      <input type="file" id="file" name="file[]" multiple accept=".xml" />
    </div>
    <div>
      <button>Submit</button>
    </div>
  </form>
</body>
</html>