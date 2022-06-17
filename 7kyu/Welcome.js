// Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. 
// Marketing thinks it would be great to welcome visitors to the site in their own language. 
// Luckily you already use an API that detects the user's location, so this is an easy win. 


// My solution
function greet(language) {
    const db = {
        english: 'Welcome',
        czech: 'Vitejte',
        danish: 'Velkomst',
        dutch: 'Welkom',
        estonian: 'Tere tulemast',
        finnish: 'Tervetuloa',
        flemish: 'Welgekomen',
        french: 'Bienvenue',
        german: 'Willkommen',
        irish: 'Failte',
        italian: 'Benvenuto',
        latvian: 'Gaidits',
        lithuanian: 'Laukiamas',
        polish: 'Witamy',
        spanish: 'Bienvenido',
        swedish: 'Valkommen',
        welsh: 'Croeso'
    }

    return db[language] ? db[language] : 'Welcome'
}