#include <iostream>

using namespace std;

//Using stoi to convert a string into an integer.
int string_to_number(const std::string& s){

    int num = stoi(s);
    cout << s;

    return num;
}