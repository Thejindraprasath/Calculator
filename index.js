const output = document.getElementById("output-screen");

function display(num){
    output.value +=num;
}

function Clear(){
    output.value = "";
}

function Calculate(){
    try{
        output.value = eval(output.value);
    }

    catch(error){
        alert("invalid");
    }
}

function del(){
    output.value = output.value.slice(0,-1);
}