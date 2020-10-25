<?php
use \Psr\Http\Message\ResponseInterface as Response;
use \Psr\Http\Message\ServerRequestInterface as Request;
// API
// FILES 

// TODO: Make DOC


$app->get('/files', function (Request $request, Response $response) {
    
    //$userid = $request->getAttribute('userid');
    //$userid = (int)$userid;
    $data = array('status' => '...');
    
    $response = json_encode($data);
    return $response;
});



?>