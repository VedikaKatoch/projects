// Language data for English and Spanish
const languageData = {
    en: {
        heroTitle: "Become an Organ Donor",
        heroSubtitle: "Your gift of life can change the world.",
        learnMore: "Learn More",
        registerDonor: "Register as Donor",
        registerRecipient: "Register as Recipient",
        signupBtn: "Sign Up",
        loginBtn: "Login"
    },
    es: {
        heroTitle: "Conviértete en Donante de Órganos",
        heroSubtitle: "Tu don de vida puede cambiar el mundo.",
        learnMore: "Aprender Más",
        registerDonor: "Registrarse como Donante",
        registerRecipient: "Registrarse como Receptor",
        signupBtn: "Regístrate",
        loginBtn: "Iniciar Sesión"
    }
};

// Function to change the language
function changeLanguage() {
    const selectedLanguage = document.getElementById('languageSelector').value;
    const textContent = languageData[selectedLanguage];
    
    // Update text content of elements
    document.getElementById('hero-title').textContent = textContent.heroTitle;
    document.getElementById('hero-subtitle').textContent = textContent.heroSubtitle;
    document.getElementById('learn-more').textContent = textContent.learnMore;
    document.getElementById('register-donor').textContent = textContent.registerDonor;
    document.getElementById('register-recipient').textContent = textContent.registerRecipient;
    document.getElementById('signup-btn').textContent = textContent.signupBtn;
    document.getElementById('login-btn').textContent = textContent.loginBtn;
}

// Set default language on page load
window.onload = () => {
    changeLanguage();
};
