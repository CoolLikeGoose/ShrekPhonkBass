<?php
// Устанавливаем соединение с базой данных
$servername = "localhost";
$username = "abemaaa";
$password = "ktoprochitalTOTsdoxnet382";
$dbname = "gawrgrgq3rg";
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Проверяем соединение
if (!$conn) {
  echo("zalupa");
  die("Connection failed: " . mysqli_connect_error());
}

// Получаем данные из формы
$name = $_POST['name'];
$surname = $_POST['surname'];
$email = $_POST['email'];
$q1 = $_POST['1'];
$q2 = $_POST['2'];
$q3 = $_POST['3'];
$q4 = $_POST['4'];
$q5 = $_POST['5'];
$q6 = $_POST['6'];
$q7 = $_POST['7'];
$q8 = $_POST['8'];
$q9 = $_POST['9'];
$q10 = $_POST['10'];

// Сохраняем данные в базу данных
$sql = "INSERT INTO myTable (Name, Surname, Email, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10)
VALUES ('$name', '$surname', '$email', '$q1', '$q2', '$q3', '$q4', '$q5', '$q6', '$q7', '$q8', '$q9', '$q10')";

if (mysqli_query($conn, $sql)) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>