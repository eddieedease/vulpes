<?php
use \Psr\Http\Message\ResponseInterface as Response;
use \Psr\Http\Message\ServerRequestInterface as Request;
// API
// Content
// TODO: Make DOC


$app->get('/content', function (Request $request, Response $response) {
    
    //$userid = $request->getAttribute('userid');
    //$userid = (int)$userid;
    $data = array('status' => '...');
    
    $response = json_encode($data);
    return $response;
});



?>