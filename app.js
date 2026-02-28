document.getElementById("sumBtn1").addEventListener("click",function(){
    let userinp1 = document.getElementById("num1").value;
    let userinp2 = document.getElementById("num2").value;
    document.getElementById("result").innerHTML = `<b>sum</b> of ${userinp1} and ${userinp2} is : <span class ="text-danger fw-bold shadow p-2 border rounded"> ${Number(userinp1) + Number(userinp2)}</span>`;
    document.getElementById("historylist").innerHTML +=`<li class="list-group-item"><b>sum</b> of ${userinp1} and ${userinp2} is : <span class ="text-primary fw-bold shadow p-2 border rounded"> ${Number(userinp1) + Number(userinp2)}</span></li>`;
});


document.getElementById("subbtn2").addEventListener("click",function(){
    let userinp1 = document.getElementById("num1").value;
    let userinp2 = document.getElementById("num2").value;
    document.getElementById("result").innerHTML = `<b>sub</b> of ${userinp1} and ${userinp2} is : <span class ="text-danger fw-bold shadow p-2 border rounded"> ${Number(userinp1) - Number(userinp2)}</span>`;
    document.getElementById("historylist").innerHTML +=`<li class="list-group-item"><b>sub</b> of ${userinp1} and ${userinp2} is : <span class ="text-primary fw-bold shadow p-2 border rounded"> ${Number(userinp1) - Number(userinp2)}</span></li>`;

})

document.getElementById("dBtn3").addEventListener("click",function(){
    let userinp1 = document.getElementById("num1").value;
    let userinp2 = document.getElementById("num2").value;
    document.getElementById("result").innerHTML = `<b>division</b> of ${userinp1} and ${userinp2} is : <span class ="text-danger fw-bold shadow p-2 border rounded"> ${Number(userinp1) / Number(userinp2)}</span>`;
    document.getElementById("historylist").innerHTML +=`<li class="list-group-item"><b>division</b> of ${userinp1} and ${userinp2} is : <span class ="text-primary fw-bold shadow p-2 border rounded"> ${Number(userinp1) / Number(userinp2)}</span></li>`;

});


document.getElementById("mBtn4").addEventListener("click",function(){
    let userinp1 = document.getElementById("num1").value;
    let userinp2 = document.getElementById("num2").value;
    document.getElementById("result").innerHTML = `<b ">multiply</b> of ${userinp1} and ${userinp2} is : <span class ="text-danger fw-bold shadow p-2 border rounded"> ${Number(userinp1) * Number(userinp2)}</span>`;
    document.getElementById("historylist").innerHTML +=`<li class="list-group-item"><b>multiply</b> of ${userinp1} and ${userinp2} is : <span class ="text-primary fw-bold shadow p-2 border rounded"> ${Number(userinp1) * Number(userinp2)}</span></li>`;

});




document.getElementById("clarbtn").addEventListener("click",function(){
    let userinp1 = document.getElementById("num1").value = "";
    let userinp2 = document.getElementById("num2").value = "";
    document.getElementById("result").innerHTML = "result:";
    

})

document.getElementById("Historybtn").addEventListener("click",function(){
    document.getElementById("historylist").innerHTML ="";
})