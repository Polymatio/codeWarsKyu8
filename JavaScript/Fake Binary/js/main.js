function fakeBin(x) {
    let newStr = x;
    for(let i = 0; i < newStr.length; i++) {
        if(newStr[i] < 5){
            newStr[i] = 0;
        }else{
            newStr[i] = 1;
        }
        return newStr;
    }
}