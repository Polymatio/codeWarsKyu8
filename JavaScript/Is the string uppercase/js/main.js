// Create a prototype to check if a string is an uppercase
// Using the toUpperCase method will allow the strings to uppercase
// A conditional statement will be used to allow it to return the string

String.prototype.isUpperCase = function() {
    if (this == this.toUpperCase()){
        return true;
  } else
        return false;
}