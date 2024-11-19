// Etape 1
// Fonction qui vérifie le nombre de jour dans les mois + bissextiles
function maxDaysInMonth(month, year) {
    // Mois avec 31 jours
    if ([1, 3, 5, 7, 8, 10, 12].includes(month))
        return 31
    // Mois avec 30 jours
    if ([4, 6, 9, 11].includes(month))
        return 30
    // Février, années bissextiles
    if (month === 2) {
        return (year % 4 === 0 && (year % 100 !== 0  || year % 400 === 0)) ? 29 : 28
    }
    return 0 // Mois invalide
}

// Fonction qui vérifie si la date est valide ou non
function isValidDate(date) {
    // Vérifie si le format correspond à dd/mm/aaaa
    const parts = date.split("/") // Divise la chaîne par "/"
    if (parts.length !== 3)
        return false

    const  [day, month, year] = parts

    // Vérifie que chaque partie à la longueur attendue
    if (day.length !== 2 || month.length !== 2 || year.length !== 4)
        return false

    // Vérifie que toutes les parties sont des nombres
    if (isNaN(day) || isNaN(month) || isNaN(year))
        return false

    // format correct
    // return true

    // converti les parties en nombres pour la validation
    const jour = Number(day, 10)
    const mois = Number(month, 10)
    const année = Number(year, 10)

    // Vérifie que l'année est dans les limites
    if (année < 1000 || année > 9999) 
        return false

    // Vérifie que le mois est valide (1 à 12)
    if (mois < 1 || mois > 12) 
        return false

    // Vérifie que le jour est valide pour le mois et l'année
    if (jour < 1 || jour > maxDaysInMonth(mois, année)) 
        return false

    // Si tout est correct, la date est valide
    return true
}

// Tests
console.log(isValidDate("03/04/2001")) // true
console.log(isValidDate("03/14/2001")) // false (mois invalide)
console.log(isValidDate("31/11/2001")) // false (novembre a 30 jours)
console.log(isValidDate("29/02/2000")) // true (année bissextile)
console.log(isValidDate("29/02/1900")) // false (pas bissextile)
console.log(isValidDate("01/01/999")) // false (année invalide)
console.log(isValidDate("00/01/2023")) // false (jour invalide))

// Autre manière vu sur chatGTP

/* function isValidDate(date) {
    // Vérifier si le format correspond à dd/mm/aaaa
    const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    const match = date.match(regex);

    if (!match) return false;

    const day = parseInt(match[1], 10);
    const month = parseInt(match[2], 10);
    const year = parseInt(match[3], 10);

    // Vérifier les limites des valeurs (mois et année)
    if (month < 1 || month > 12 || year < 1000 || year > 9999) {
        return false;
    }

    // Vérifier si le jour est valide pour le mois et l'année donnés
    return day >= 1 && day <= maxDaysInMonth(month, year);
} */

