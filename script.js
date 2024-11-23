// Etape 1
// Fonction qui vérifie le nombre de jour dans les mois + bissextiles
/* function maxDaysInMonth(month, year) {
    // Mois avec 31 jours
    if ([1, 3, 5, 7, 8, 10, 12].includes(month)) 
        return 31;
    // Mois avec 30 jours
    if ([4, 6, 9, 11].includes(month)) 
        return 30;
    // Février, années bissextiles
    if (month === 2) {
        return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ? 29 : 28;
    }
    return 0; // Mois invalide
}
*/
// Fonction qui vérifie si la date est valide ou non
/* function isValidDate(date) {
    const parts = date.split("/");

    // Vérifie si le format est bien "dd/mm/yyyy" ou "mm/dd/yyyy"
    if (parts.length !== 3) 
        return false;

    const [day, month, year] = parts;

    // Vérifie que chaque partie a la longueur attendue
    if (day.length !== 2 || month.length !== 2 || year.length !== 4) 
        return false;

    // Vérifie que chaque partie est un nombre
    if (isNaN(day) || isNaN(month) || isNaN(year)) 
        return false;

    const jour = Number(day);
    const mois = Number(month);
    const année = Number(year);

    // Vérifie si l'année est valide (1000-9999)
    if (année < 1000 || année > 9999) 
        return false;

    // Cas 1: Format DD/MM/YYYY (mois ≤ 12)
    if (mois <= 12 && mois >= 1 && jour >= 1 && jour <= maxDaysInMonth(mois, année)) {
        return true;
    }

    // Cas 2: Format MM/DD/YYYY (mois > 12 donc probablement inversé)
    else if (mois > 12 && jour >= 1 && jour <= maxDaysInMonth(jour, année)) {
        return true;
    }
    // Si la date ne correspond à aucun des formats valides
    else {
        return false;
    }
}
*/

// Tests
/* console.log(isValidDate("03/04/2001")) // true
console.log(isValidDate("03/14/2001")) // false (mois invalide)
console.log(isValidDate("31/11/2001")) // false (novembre a 30 jours)
console.log(isValidDate("29/02/2000")) // true (année bissextile)
console.log(isValidDate("29/02/1900")) // false (pas bissextile)
console.log(isValidDate("01/01/999")) // false (année invalide)
console.log(isValidDate("00/01/2023")) // false (jour invalide)) */

// Autre manière vu sur chatGTP

/* function isValidDate(date) {
    // Vérifier si le format correspond à dd/mm/aaaa
    const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    const match = date.match(regex);

    if (!match) return false;

    const day = Number(match[1], 10);
    const month = Number(match[2], 10);
    const year = Number(match[3], 10);

    // Vérifier les limites des valeurs (mois et année)
    if (month < 1 || month > 12 || year < 1000 || year > 9999) {
        return false;
    }

    // Vérifier si le jour est valide pour le mois et l'année donnés
    return day >= 1 && day <= maxDaysInMonth(month, year);
} */

// Etape 2
// Fonction qui vérifie si une date est un palindrome
/* function isPalindrome(dateStr) {
    // Utilise la fonction isValidDate pour vérifier la validité de la date
    if (!isValidDate(dateStr)) {
        return false;
    }

    // Supprime les caractères "/" pour obtenir une chaîne de chiffres
    const cleanDate = dateStr.replace(/\//g, '');
    
    // Vérifie si la chaîne est un palindrome
    const reverseDate = cleanDate.split("").reverse().join("");
    console.log(cleanDate, reverseDate)
    return cleanDate === reverseDate;
} 
*/

// Tests pour isPalindrome
/* console.log(isPalindrome("01/01/1010")); // true
console.log(isPalindrome("12/21/1221")); // true
console.log(isPalindrome("31/12/2023")); // false
console.log(isPalindrome("11/11/1111")); // true
console.log(isPalindrome("00/00/0000")); // false (date invalide)
console.log(isPalindrome("32/01/2020")); // false (jour invalide) */

// Etape 3
// Fonction pour formater une date en "DD/MM/YYYY"
/* function formatDate(date) {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Les mois commencent à 0
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

// Fonction pour obtenir le jour suivant
function getNextDate(date) {
    const nextDate = new Date(date);
    nextDate.setDate(date.getDate() + 1); // Passe au jour suivant
    return nextDate;
}

// Fonction principale pour trouver les prochaines dates palindromes
// Fonction principale pour trouver les prochaines dates palindromes
function getNextPalindromes(x) {
    const result = [];
    let currentDate = new Date();

    while (result.length < x) {
        const formattedDate = formatDate(currentDate);
        if (isPalindrome(formattedDate)) {
            result.push(formattedDate);
        }
        currentDate = getNextDate(currentDate);
    }

    return result;
}
*/

// Exemple d'utilisation
//console.log(getNextPalindromes(5));

// Etape 4 
// Fonction pour vérifier si une chaîne de caractères est un palindrome
function isPalindrome(str) {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, ''); // Supprime les caractères non alphanumériques
    return cleanStr === cleanStr.split('').reverse().join('');
}

// Fonction pour formater une date en "DDMMYYYY" (sans séparateurs)
function formatDateForPalindrome(date) {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Les mois commencent à 0
    const year = date.getFullYear();
    return `${day}${month}${year}`;
}

// Fonction qui vérifie si une date est un palindrome
function isDatePalindrome(date) {
    // Transforme la date en chaîne utilisable pour le test de palindrome
    const formattedDate = formatDateForPalindrome(date);
    return isPalindrome(formattedDate);
}

// Fonction principale pour trouver les prochaines dates palindromes
function getNextPalindromes(x) {
    const result = [];
    let currentDate = new Date(); // Aujourd'hui

    // Trouver les x prochaines dates palindromes
    while (result.length < x) {
        if (isDatePalindrome(currentDate)) {
            result.push(formatDateForPalindrome(currentDate).replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3')); // Reformate en "DD/MM/YYYY"
        }
        currentDate.setDate(currentDate.getDate() + 1); // Passe à la date suivante
    }

    return result;
}

// Exemple d'utilisation
console.log(getNextPalindromes(5));