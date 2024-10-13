<?php

require_once __DIR__ . "/validation.php";

if($_SERVER['REQUEST_METHOD'] != 'POST') {
   $response = [
        "message" => "method not allowed"
   ];

   http_response_code(401);
   return json_encode($response);
   die();
}

$data = json_decode(file_get_contents("php://input"), true);
$errors = validate($data);

if($errors !== true) {
    $errors = validate($data);
    $response = [
        "message" => "Datos invalidos",
        "errors" => $errors,
    ];
    http_response_code(400);
    echo json_encode($response);
    die();
}

$total = $data['price'] * $data['quantity'];
http_response_code(200);
echo json_encode([
    "message" => "El total a pagar es: ",
    "result" => $total
]);