//Create a function that convert number to reverse array's digits

function digitize(n) {
    return Array.from(String(n), Number).reverse()
}