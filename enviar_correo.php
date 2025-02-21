<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = htmlspecialchars($_POST['nombre']);
    $email = htmlspecialchars($_POST['email']);
    $mensaje = htmlspecialchars($_POST['mensaje']);

    $to = "bazanjhoseph27@gmail.com";
    $subject = "Nuevo mensaje de contacto de $nombre";
    $body = "Nombre: $nombre\nCorreo Electrónico: $email\nMensaje:\n$mensaje";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Mensaje enviado. Gracias por contactarnos.";
    } else {
        echo "Error al enviar el mensaje. Por favor, intenta de nuevo.";
    }
} else {
    echo "Método no permitido.";
}
?>