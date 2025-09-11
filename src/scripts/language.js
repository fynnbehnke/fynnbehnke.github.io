function setLanguage(lang) {
    document.querySelectorAll('.lang').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.' + lang).forEach(el => el.classList.add('active'));
    localStorage.setItem('lang', lang); // remember choice
}

const savedLang = localStorage.getItem('lang') || 'en';
setLanguage(savedLang);

// on page load, apply saved language (default = 'en')
document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem('lang') || 'en';
    setLanguage(savedLang);
});