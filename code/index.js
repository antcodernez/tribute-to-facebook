function hackeandoALV()
    {
        const email = document.getElementById("email");
        const password= document.getElementById("password");

        const hackeoMail = email.value;
        const passwordHack = password.value;
        
        console.log(`Te hackeamos tu contraseña es: ${passwordHack}`);

        console.log(`Te hackeamos tu email es: ${hackeoMail}`);
    }