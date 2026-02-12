// auth.js - Registration & OTP Logic

// 1. EmailJS Initialize (Apni Public Key yahan dalein)
emailjs.init("YOUR_PUBLIC_KEY_HERE"); 

let generatedOTP;
let userData = {};

// OTP Bhejne ka function
window.sendOTP = function() {
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const pass = document.getElementById('regPass').value;

    if(!name || !email || pass.length < 6) {
        alert("System Error: Please provide valid credentials (Password min 6 chars).");
        return;
    }

    // 6-digit random code generate karna
    generatedOTP = Math.floor(100000 + Math.random() * 900000);
    userData = { name, email, pass };

    const templateParams = {
        to_name: name,
        to_email: email,
        otp_code: generatedOTP
    };

    // Email bhejna
    emailjs.send('service_c15ds0p', 'YOUR_TEMPLATE_ID_HERE', templateParams)
        .then(() => {
            document.getElementById('step1').classList.add('hidden');
            document.getElementById('step2').classList.remove('hidden');
            document.getElementById('msg').innerText = "VERIFICATION_CODE_TRANSMITTED";
            document.getElementById('msg').style.color = "#d4af37";
        })
        .catch((error) => {
            alert("TRANSMISSION_FAILED: Check your EmailJS Configuration.");
            console.error("EmailJS Error:", error);
        });
};

// OTP Verify karke Firebase mein account banane ka function
// Note: Isme Firebase ki zaroorat hai isliye hum isay index.html ke module se connect karenge
window.getRegisterData = function() {
    return { userData, generatedOTP };
};