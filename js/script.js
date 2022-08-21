// task#1
const getFactorial = (numb) => {
    if (numb === 1 || numb === 0){
        return 1
    } else{
        return numb * getFactorial(numb - 1)
    }
}
getFactorial(3);

// task#2
const pow = (n, deg) => {
    if(deg === 1 || deg === 0){
        return n
    } else{
        return n * pow(n, deg - 1)
    }
}
pow(2,4);

// task#3
const sum = (a, b) => {
    if(b == 0)
        return a;
    return sum(a + 1, b - 1);
}
sum(2, 2);