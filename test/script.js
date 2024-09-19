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
    if (!validateName(firstName)) {
        document.getElementById('firstNameError').innerText = 'Der Vorname darf keine Ziffern, Doppelpunkt oder Ausrufezeichen enthalten.';
        // valid = false;
    }

    if (!validateName(lastName)) {
        document.getElementById('lastNameError').innerText = 'Der Nachname darf keine Ziffern, Doppelpunkt oder Ausrufezeichen enthalten.';
        // valid = false;
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

function validateName(name) {
   return true;
}

function validateAge(birthdate) {
    const currentDate = new Date();
    const birthDate = new Date(birthdate);
    const age = currentDate.getFullYear() - birthDate.getFullYear();
    if (age >= 18) {
        document.getElementById('ageError').innerText = '';
        return true;

    } else {
        document.getElementById('ageError').innerText = 'Sie müssen mindestens 18 Jahre alt sein.';
        return false;
    }
  }
  

// Generate a math CAPTCHA using Newton API
async function generateMathCaptcha() {
    // Generate two random numbers
    
    const mathQuestion = ``; // hier muss passend modifiziert werden!
    document.getElementById('mathQuestion').innerText = `Lösen Sie die folgende Mathe-Aufgabe: ${mathQuestion}`;

    // Listen for answer submission
    document.getElementById('captchaSubmit').addEventListener('click', async function (event) {
        event.preventDefault(); // Prevent form from submitting

        const userAnswer = document.getElementById('mathAnswer').value;
        const status = document.getElementById('status');
        status.innerText = ''; 

        // Use Newton API to validate the answer
        const response = await fetch(`https://newton.now.sh/api/v2/simplify/${encodeURIComponent(mathQuestion)}`);
       // weiter ergänzen




    });
}
