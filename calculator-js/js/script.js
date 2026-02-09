function display(number) {
    document.getElementById('boxin').value += number;
}
function Clear(){ 
    boxin.value = "";
}
function del(){
    boxin.value=boxin.value.slice(0,-1);
}
function calculate(){
    var output=document.getElementById('boxin').value;
    var result=eval(output);
    document.getElementById('boxin').value=result;
}
