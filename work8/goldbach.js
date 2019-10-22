function goldbach() {
    var odd = document.getElementById('odd').value
    console.log(odd)
    if(odd%2!==0){
        alert("请输入偶数")
    }
    let goldbach = document.getElementById('goldbach')
    var str =[]
    var a = 0;
    for(var i=2;i<=odd;i++){
        a = 0
        for(var j=2;j<i;j++){
            if(i%j==0){
                a++
            }
        }
        if(a==0){
            str.push(i)
        }
    }
    var str1 = ''
    console.log(odd)
    for(let i=0;i<(str.length)/2;i++){
        console.log(111)
       for(let j=0;j<str.length;j++){
           if((str[i]+str[j])===Number(odd)){
               str1 += odd+"可以拆分为两个质数"+str[i]+"与"+str[j]+"的和\n"
            
           }
       }
    }
    goldbach.innerText = str1
   
}












/*var str = '';
function gold(){
    var sum = 0,a=0;
   
    var odd = document.getElementById('odd').odd
    for(var i=1;i<=odd;i++){
        if(odd%i==0){
            sum++;
        }
    }
    if(sum==2){
        a=1
    }else{
        alert ("请输入素数");
        a = 0
    }
    if(a==1){
    for(let i=2;i<odd-2;i++){
        var j = odd-i;
        str += odd+ "可以被拆分为两个素数" + i + "和" + j + "的和\n"
    }
    console.log(str)
    document.getElementById('goldbach').innerText = str;
}
}*/