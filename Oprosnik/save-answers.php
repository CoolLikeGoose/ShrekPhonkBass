<?php
// проверка, что форма была отправлена
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // проверка, что все вопросы были отвечены
  if (isset($_POST['q1']) && isset($_POST['q2']) && isset($_POST['q3']) && isset($_POST['q4']) && isset($_POST['q5']) && isset($_POST['q6']) && isset($_POST['q7']) && isset($_POST['q8']) && isset($_POST['q9']) && isset($_POST['q10']) ) {
    // соединение с базой данных
    $conn = mysqli_connect('localhost', 'username', 'password', 'dbname');
    // проверка соединения
    if (!$conn) {
      die('Ошибка соединения с базой данных: ' . mysqli_connect_error());
    }
     // экранирование данных
     $q1 = mysqli_real_escape_string($conn, $_POST['q1']);
     $q2 = mysqli_real_escape_string($conn, $_POST['q2']);
     $q3 = mysqli_real_escape_string($conn, $_POST['q3']);
     $q4 = mysqli_real_escape_string($conn, $_POST['q4']);
     $q5 = mysqli_real_escape_string($conn, $_POST['q5']);
     $q6 = mysqli_real_escape_string($conn, $_POST['q6']);
     $q7 = mysqli_real_escape_string($conn, $_POST['q7']);
     $q8 = mysqli_real_escape_string($conn, $_POST['q8']);
     $q9 = mysqli_real_escape_string($conn, $_POST['q9']);
     $q10 = mysqli_real_escape_string($conn, $_POST['q10']);
     // повторить для всех вопросов
     
     // создание SQL-запроса для каждого вопроса и выбранного ответа
     $sql1 = "INSERT INTO answers (question_id, answer_id) VALUES ('q1', '$q1')";
     $sql2 = "INSERT INTO answers (question_id, answer_id) VALUES ('q2', '$q2')";
     $sql3 = "INSERT INTO answers (question_id, answer_id) VALUES ('q3', '$q3')";
     $sql4 = "INSERT INTO answers (question_id, answer_id) VALUES ('q4', '$q4')";
     $sql5 = "INSERT INTO answers (question_id, answer_id) VALUES ('q5', '$q5')";
     $sql6 = "INSERT INTO answers (question_id, answer_id) VALUES ('q6', '$q6')";
     $sql7 = "INSERT INTO answers (question_id, answer_id) VALUES ('q7', '$q7')";
     $sql8 = "INSERT INTO answers (question_id, answer_id) VALUES ('q8', '$q8')";
     $sql9 = "INSERT INTO answers (question_id, answer_id) VALUES ('q9', '$q9')";
     $sql10 = "INSERT INTO answers (question_id, answer_id) VALUES ('q10', '$q10')";
     // повторить для всех вопросов
     
     // выполнение SQL-запросов
     mysqli_query($conn, $sql1);
     mysqli_query($conn, $sql2);
     mysqli_query($conn, $sql3);
     mysqli_query($conn, $sql4);
     mysqli_query($conn, $sql5);
     mysqli_query($conn, $sql6);
     mysqli_query($conn, $sql7);
     mysqli_query($conn, $sql8);
     mysqli_query($conn, $sql9);
     mysqli_query($conn, $sql10);
     // повторить для всех вопросов
     
     // закрытие соединения с базой данных
     mysqli_close($conn);
    
   } else 
   {
     // если не все вопросы были отвечены, выведите сообщение об ошибке
     echo "Пожалуйста, ответьте на все вопросы!";
   }
 }
 ?>
