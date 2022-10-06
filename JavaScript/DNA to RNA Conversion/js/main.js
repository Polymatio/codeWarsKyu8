// Create a function that converts DNA to RNA
// Using the replace method to return a new string with at least one, some, or all of the particular string
// Return the replaced string to convert DNA to RNA

function DNAtoRNA(dna) {
    return dna.replace(/T/g, 'U');
}