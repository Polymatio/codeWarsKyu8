// Create a function that converts a string into a number
// #include <iostream> library to work with input and output object
// #include <string> library to work with string
// Will use to_number method to convert the string into a number constant
// Using stoi method will change the string to a number
// It will return the argument of the string into a number

#include <iostream>
#include <string>

using namespace std;

int string_to_number(const std::string& s){

    int num = stoi(s);
    cout << s;

    return num;
}