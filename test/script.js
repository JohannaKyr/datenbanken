document.getElementById('initialSubmit').addEventListener('click', function () {
    // Clear previous error messages
    document.getElementById('firstNameError').innerText = '';
    document.getElementById('lastNameError').innerText = '';
    document.getElementById('ageError').innerText = '';

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const birthDate = document.getElementById('birthDate').value;

    let valid = true;

    // Validate first name and last name
    if (!isValidName(firstName)) {
        document.getElementById('firstNameError').innerText = 'Der Vorname darf keine Ziffern oder Sonderzeichen enthalten.';
        valid = false;
    }

    if (!isValidName(lastName)) {
        document.getElementById('lastNameError').innerText = 'Der Nachname darf keine Ziffern oder Sonderzeichen enthalten.';
        valid = false;
    }

    // Validate age
    if (!validateAge(birthDate)) {
        valid = false;
    }

    // If valid, show the math captcha
    if (valid) {
        document.querySelector('.math-captcha').style.display = 'block';
        generateMathCaptcha();  // Generate the math question
    }
});

function isValidName(name) {
    const invalidCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', ' ', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    for (let char of name) {
        if (invalidCharacters.includes(char)) {
            return false; // Ungültiges Zeichen gefunden
        }
    }
    return true; // Alle Zeichen sind gültig
}

function validateAge(birthdate) {
    const currentDate = new Date();
    const birthDate = new Date(birthdate);
    
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const monthDiff = currentDate.getMonth() - birthDate.getMonth();
    
    // Alter anpassen, wenn der Geburtstag in diesem Jahr noch nicht war
    if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }
    
    if (age >= 18) {
        document.getElementById('ageError').innerText = '';
        return true;
    } else {
        document.getElementById('ageError').innerText = 'Sie müssen mindestens 18 Jahre alt sein.';
        return false;
    }
}

function generateMathCaptcha() {
    const num1 = Math.floor(Math.random() * 11) + 20; // Zufallszahl zwischen 20 und 30
    const num2 = Math.floor(Math.random() * 11) + 20; // Zufallszahl zwischen 20 und 30
    const mathQuestion = `${num1} + ${num2}`; // Matheaufgabe
    document.getElementById('mathQuestion').innerText = `Lösen Sie die folgende Mathe-Aufgabe: ${mathQuestion}`;

    // Listen for answer submission
    document.getElementById('captchaSubmit').onclick = function () {
        const userAnswer = parseInt(document.getElementById('mathAnswer').value);
        const correctAnswer = num1 + num2; // Korrekte Antwort

        if (userAnswer === correctAnswer) {
            document.getElementById('mathError').style.display = 'none'; // Fehlernachricht ausblenden
            document.getElementById('status').innerText = 'Antwort korrekt! Zugang gewährt!'; // Erfolgsmeldung
        } else {
            document.getElementById('mathError').style.display = 'block'; // Fehlernachricht anzeigen
            document.getElementById('status').innerText = ''; // Status zurücksetzen
        }
    }
}