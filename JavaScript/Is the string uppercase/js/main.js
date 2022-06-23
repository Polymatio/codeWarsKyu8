//Create a prototype to check if a string is an uppercase.

String.prototype.isUpperCase = function() {

    //create a conditional to check if it is true or false.

    if (this == this.toUpperCase()){
        return true;
  } else
        return false;
}