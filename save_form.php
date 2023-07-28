<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $contact = $_POST['contact'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Prepare the data to be saved
    $data = "Name: $name\n ContactNo.: $contact\n Email: $email\nMessage: $message\n\n";

    // Define the file name and location
    $file = 'form_details.txt';

    // Open the file in append mode and save the data
    if (file_put_contents($file, $data, FILE_APPEND | LOCK_EX) !== false) {
        echo "Form details saved successfully.";
    } else {
        echo "Error saving form details.";
    }
}
?>