document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const category = document.getElementById('category').value;

    const messageDiv = document.getElementById('message');
    messageDiv.textContent = `¡Gracias por registrarte, ${name}! Te hemos enviado un correo a ${email} con más información sobre la categoría de ${category}.`;

    document.getElementById('registrationForm').reset();
});
