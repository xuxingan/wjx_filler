let res = '';
for (let i =0;i<document.getElementsByClassName('answer-ansys').length;i++ ){
    res += 'document.getElementById("q'+(i+2)+'").value='+'\''+document.getElementsByClassName('answer-ansys')[i].innerText.substr(document.getElementsByClassName('answer-ansys')[i].innerText.indexOf('\n')+1,document.getElementsByClassName('answer-ansys')[i].length)+'\'\n'
}
console.log("结果"+res)