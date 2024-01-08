function getValue(e){
    var getInp = document.getElementById('getInp');
    getInp.value += e;
}
function eq(){
    var getInp = document.getElementById('getInp')
    getInp.value = eval(getInp.value)

}
function clearAll(){
    document.getElementById('getInp').value = ''
}