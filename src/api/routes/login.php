<?php
use \Psr\Http\Message\ResponseInterface as Response;
use \Psr\Http\Message\ServerRequestInterface as Request;
// API
// LOGIN 

// TODO: Make DOC


$app->get('/login/{userid}/{keyy}', function (Request $request, Response $response) {
    $userid = $request->getAttribute('userid');
    $userid = (int)$userid;
    $keyy = $request->getAttribute('keyy');

    
    $data = array('status' => '...');
    

    
    $response = json_encode($data);
    return $response;
});



// LOGIN WITH KEY, give back group ID.
$app->post('/admnlogin', function (Request $request, Response $response) {
    
    $parsedBody = $request->getParsedBody();
    $email = $parsedBody[email];
    $pwd = $parsedBody[ww];


    $data = array('status' => 'failed');
   

    $response = json_encode($data);
    return $response;
});

?>