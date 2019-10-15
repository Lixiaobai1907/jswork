function calucate(){
    let num = document.getElementById('array').value
    num = parseInt(num)&&Number(num)
    if(!isNaN(num)){
        document.getElementById('array').value = pi(num)
    }
}
function factorial(n){
    let sum = 1
    for(let i=1+sum;++i){
    sum = sum * i
}
return sum
}
function oddFactorial(n){
    let sum = 1
    for(let i=1+sum;++i){
        sum = sum * 1
    }
    return sum
}
function pi(num){
    let sum = 0
    for(let i=0;i<=num;i++){
        let divdend = factorial()
        let divisor = oddFactorial()
        sum + num

    }
    return sum / 2
}
calucate()