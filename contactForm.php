<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    ini_set('display_errors', 1);
    error_reporting(E_ALL);

    // Sanitize inputs
    $name = htmlspecialchars($_POST['name'] ?? '');
    $destination = htmlspecialchars($_POST['destination'] ?? '');
    $travelMonth = htmlspecialchars($_POST['travelMonth'] ?? '');
    $travelers = htmlspecialchars($_POST['travelers'] ?? '');
    $phone = htmlspecialchars($_POST['contactNumber'] ?? '');
    $email = htmlspecialchars($_POST['email'] ?? '');
    $message = htmlspecialchars($_POST['message'] ?? '');

    // Email details
    $to = 'travel@offthemap.co.in';
    $subject = "New Travel Enquiry from $name";

    $email_body = "
You have received a new travel enquiry.

Customer Name: $name
Destination: $destination
Travel Month: $travelMonth
Number of Travelers: $travelers
Phone: $phone
Email: $email

Message:$message";

    $headers = "From: travel@offthemap.co.in\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    if (mail($to, $subject, $email_body, $headers)) {
        http_response_code(200);
        echo json_encode([
            'success' => true,
            'message' => 'Email sent successfully'
        ]);
    } else {
        http_response_code(500);
        echo json_encode([
            'success' => false,
            'message' => 'Email failed to send'
        ]);
    }

} else {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Invalid request method'
    ]);
}
?>
