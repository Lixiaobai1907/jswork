str1 = '<table border="1">'
for(let i=1;i<10;++i){
    str1 += '<tr>'
    for(var j=1;j<10;++j){
        str1 += '<td>&nbsp;</td>'
    }
    str1 +='</tr>'
}
str1 += '</table>'
document.getElementById('table1').innerHTML = str1

str2 = '<table border="1">'
for(let i=9;i>0;--i){
    str2 += '<tr>'
    for(var j=i;j>0;--j){
        str2 += '<td>&nbsp;</td>'
    }
    str2 +='</tr>'
}
str2 += '</table>'
document.getElementById('table2').innerHTML = str2

str3 = '<table border="1">'
for(let i=9;i>0;--i){
    str3 += '<tr>'
    for(var j=i;j>0;--j){
       str3 +='<td>' + j + '*' + i + '=' + ( i * j ) + '</td>'
    } 
    str3 += '</tr>'

}
str3 += '</table>'
document.getElementById('table3').innerHTML = str3