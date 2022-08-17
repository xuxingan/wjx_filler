let res = '';
res+='document.getElementById("q1_0").value='+'\''+Math.floor(Math.random()*10+1)+'\'\n'
res+='document.getElementById("q1_1").value='+'\''+Math.floor(Math.random()*10+1)+'\'\n'
for (let i =0;i<document.getElementsByClassName("field ui-field-contain").length-1;i++ ){
    res += 'document.getElementById("q'+(i+2)+'").value='+'\''+Math.floor(Math.random()*10+1)+'\'\n'
}
console.log(res)