

var cards = [];
var count = 1;
var empty = [];
function home()
{

    if(cards.length==0)
    {
        count = 1;
        document.querySelector("#defaultPara").innerText="Nothing to show here . click 'add note' to add notes.";
    }
    else
    {
        document.querySelector("#defaultPara").innerText="";
    }
    document.querySelector(".list").replaceChildren(empty);
    cards.forEach(function (element){
        document.querySelector(".list").appendChild(element);
    });
}


function deletenote(val){
    console.log(val);
    cards.splice(val-1,1);
    home();
}



function find()
{
    document.querySelector(".list").replaceChildren(empty);
    var txt = document.querySelector(".form-control").value;

    document.querySelector(".form-control").value = "";
    var sample;
    var flag = 0;
    cards.forEach(function (element){
            if(element.innerText.includes(txt) == true){
                document.querySelector(".list").appendChild(element);
                flag = 1;
            }
        });
    if(flag == 0)
    {
        document.querySelector("#defaultPara").innerText="No results found.";
    }
}


function addNote()
{
    home();
    document.querySelector('#defaultPara').innerHTML=" ";

    
    let card = document.createElement('li');
    card.className = "cardid";

    let heading = document.createElement('h3');
    heading.innerHTML = document.querySelector("#titlebox").value; 
    heading.id = "cardheading";
    card.appendChild(heading);

    let para = document.createElement("p");
    para.id= "cardpara";
    para.innerHTML = document.querySelector("#txtbox").value;
    card.appendChild(para);

    let btn = document.createElement("button");
    btn.id = "cardbtn";
    btn.value = count;
    btn.setAttribute('onclick','deletenote(this.value)');
    btn.innerText = "Delete Note";
    card.appendChild(btn);

    cards.push(card);
    document.querySelector(".list").appendChild(card);
    
    document.querySelector("#txtbox").value = "";
    document.querySelector("#titlebox").value = "";


    count++;
}




