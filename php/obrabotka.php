<?php
  $name = trim(strip_tags($_POST["name"]));
  $surname = trim(strip_tags($_POST["surname"]));
  $fathername = trim(strip_tags($_POST["fathername"]));
  $age = trim(strip_tags($_POST["age"]));
  $sex = trim(strip_tags($_POST["sex"]));
  $email = trim(strip_tags($_POST["email"]));
  $country = trim(strip_tags($_POST["country"]));
  $profession = trim(strip_tags($_POST["profession"]));
  $ideology = trim(strip_tags($_POST["ideology"]));
  $story = trim(strip_tags($_POST["story"]));
  $metta = trim(strip_tags($_POST["metta"]));
  $subject = "Регистрация на сайте kptb.github.io";
  $msg = "Ваши данные формы регистрации:\n" ."Имя: $name\n" ."Фамилия: $surname\n" ."Отчество: $fathername\n" ."Возраст: $age\n" ."Пол: $sex\n" ."Ваш email: $email\n" ."Страна: $country"."Профессия: $profession\n" ."История: $story\n" ."Цель: $metta\n";
  $headers = "Content-type: text/plain; charset=UTF-8" . "\r\n";
  $headers .= "From: КПТБ <pashadernin@gmail.com>" . "\r\n";
  $headers .= "Bcc: pashadernin@gmail.com". "\r\n";
  if(!empty($name) && !empty($surname) && !empty($fathername) && !empty($age) && !empty($sex) && !empty($email) && !empty($country !empty($profession) && !empty($ideology) && !empty($story) && !empty($metta)) && filter_var($email, FILTER_VALIDATE_EMAIL)){
    mail($email, $subject, $msg, $headers);
    echo "Спасибо! Вы успешно зарегистрировались.";
    }
?>