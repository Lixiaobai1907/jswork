function sort(method){
    let origin = document.getElementById('origin').value
    let log
    console.log(method)
    if(method=='bubble'){
        logs = bubbleSort(origin)
    }else if(method=='insert'){
        logs = insertSort(origin)
    }
    showDiv = document.getElementById('Anim')
    showDiv.innerHTML = logs
}