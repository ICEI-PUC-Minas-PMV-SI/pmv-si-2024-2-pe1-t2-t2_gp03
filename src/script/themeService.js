const themeKeyName = 'theme'; // Chave para armazenar o tema no localStorage

// Verifica se o tema do sistema é dark
function isSystemThemeDark() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

// Retorna o tema atual do sistema
function getSystemTheme() {
    return isSystemThemeDark() ? 'dark' : 'light';
}

// Verifica se deve usar o tema do sistema
function shouldUseSystemTheme(currentTheme) {
    return !currentTheme || currentTheme === 'system';
}

// Obtém o tema do usuário, considerando o tema do sistema se necessário
function getUserTheme() {
    const currentTheme = localStorage.getItem(themeKeyName);
    return shouldUseSystemTheme(currentTheme) ? getSystemTheme() : currentTheme;
}

// Aplica o tema ao body
function applyTheme(theme) {
    // Remove os temas existentes
    document.body.classList.remove('light', 'dark'); 
    // Adiciona o novo tema
    document.body.classList.add(theme);
    applyThemeOnOutOfPatternElements(theme === 'dark');
    //  ? showDarkThemedElements() : showLightThemedElements()
}

// Define e aplica o tema
function setTheme(theme) {
    localStorage.setItem(themeKeyName, theme); // Armazena a preferência no localStorage
    if (theme === 'system') {
        applyTheme(getSystemTheme()); // Aplica o tema atual do sistema
    } else {
        applyTheme(theme); // Aplica diretamente o tema escolhido
    }
}

// Inicializa o tema ao carregar a página
applyTheme(getUserTheme());

// Escuta mudanças no tema do sistema
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
mediaQuery.addEventListener('change', (event) => {
    const currentTheme = localStorage.getItem(themeKeyName);
    if (currentTheme === 'system') {
        applyTheme(event.matches ? 'dark' : 'light'); // Aplica o tema conforme a mudança
    }
});

// Habilita o tema como 'system' e aplica o tema atual do sistema
function enableSystemTheme() {
    setTheme('system'); // Define o tema como 'system'
}

//Out of pattern elements
function getOutOfPatternElements(){
    const elements = [
        {
            description: 'profile icon on inputs',
            classIds: ['profile-icon'],
            dark: './img/icons-profile-highlighted.svg',
            light: './img/icons-profile-dark.svg'
        },
        {
            description: 'full logo svg/png',
            classIds: ['full-logo'],
            dark: './img/logo-dark.svg',
            light: './img/macrofit-high-resolution-logo-1.png'
        },
        // {
        //     description: 'checked icon',
        //     classIds: ['card-img'],
        //     dark: './img/dark-check.svg',
        //     light: './img/icons-check.svg'
        // },
        {
            description: 'logo login/register',
            classIds: ['logo_image', 'logo'],
            dark: './img/login-main-logo-dark.png',
            light: './img/group.png'
        },
        {
            description: 'mini logo png',
            classIds: ['mini-logo'],
            dark: './img/mini-logo-dark.png',
            light: './img/logo-mini.png'
        },
        {
            description: 'key/password icon',
            classIds: ['key-icon'],
            dark: 'img/password-highlighted.svg',
            light: 'img/password.svg'
        },
    ]
    return elements
}

function applyThemeOnOutOfPatternElements(isDark){
    const elements = getOutOfPatternElements()
     for(let e of elements){
        for(let c of e.classIds) {
            for (let domE of document.getElementsByClassName(c)){
                domE.src = isDark ? e.dark : e.light
                console.log(domE)
            } 
        }
    }
}