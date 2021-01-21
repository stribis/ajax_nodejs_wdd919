<?php

// Check if fields are empty
if (empty($_POST['name']) ||
    empty($_POST['email']) ||
    empty($_POST['message']) ||
    !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL)
) {
  echo json_encode(array('fail', 'invalid inputs'));
  return false;
}

$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$message = strip_tags(htmlspecialchars($_POST['message']));

// Create email message and send

// $to = 'martin.hutchings@sae.edu';
// $email_subject = 'Website contact form';
// $email_body = "You have received a message from" . $name . "with this email:" . $email_address . "and this is the message: " . $message;
// $headers = "From: noreply@mywebsite.com\n";
// $headers .= "Reply-To:" . $email_address;
// mail($to,$email_subject, $email_body, $headers);

echo json_encode(array('success', 'Thank you' . $name . '. Your message was sent! :)'));
?>