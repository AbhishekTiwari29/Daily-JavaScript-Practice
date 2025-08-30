function checkSmallestNumber(a , b , c){
    if(a<b && a<c){
        return a ;
    }else if (b<c){
        return b;
    }else{
        return c;
    }
    return a;
}

console.log(checkSmallestNumber(2,9,1));
console.log(checkSmallestNumber(-2,9,-15));
console.log(checkSmallestNumber(564,25,1));
console.log(checkSmallestNumber(351,-15,-658));
console.log(checkSmallestNumber(1,5,-8));
console.log(checkSmallestNumber(5,5,5));