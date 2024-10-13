<?php
function validate($data)
{
    $errors = [];

    if(empty($data['product']) || empty($data['price']) || empty($data['quantity']) ) {
        $errors[] = 'No pueden haber campos en blanco';
    }
    
    if(!is_numeric($data['price'])) {
        $errors[] = 'El precio unitario debe ser un numero';
    }

    if(!is_numeric($data['quantity'])) {
        $errors[] = 'La cantidad debe ser un numero';
    }

    if(count($errors) == 0) {
        return true;
    } else {
        return $errors;
    }
}