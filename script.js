/* initialisation du json */
let internal = window.localStorage;
let candiesObject = [];
if(internal.getItem("candies")==null){
    var request = new XMLHttpRequest();
    request.open("GET", "../candies.json", false);
    request.send(null);
    internal.setItem("candies", request.responseText);
    candiesObject = JSON.parse(request.responseText);
} else {
    candiesObject = JSON.parse(internal.getItem("candies"));
}

console.log(internal);
/*initialisation des areas */
const areas = document.getElementsByTagName("area");
const mapArea = document.getElementsByName("image-map")[0];
for(i=0;i<20;i++)
{
 areas[i].id = i;
}

mapArea.addEventListener("click", function(event){
    clickBonbon(event.target);
    
    return false;
})
/* initialisation des boutons monnaies et menu */

const buttons = document.querySelectorAll("#temp");
buttons.forEach(button => button.addEventListener('click', addMoney))
const inputs = document.querySelectorAll("input");
const monnaie = inputs[0];
const chute = inputs[1];
const retour = inputs[2];
chute.value=""
monnaie.value=0;
retour.value=0;

retour.addEventListener("click", resetInputs);

/*fonctions */
function clickBonbon(element)
{
    console.log(element.id);
    let activeCandy = getCandyById(element.id);
    buyCandy(activeCandy);
    ShowName(activeCandy);
    ShowPrice(activeCandy);
    GetQty(activeCandy);
    
}


function getCandyById(id){
    return candiesObject.find(candy => candy.id == id);

}

function ShowPrice(candy){
    console.log(`ShowPrice : ${candy.price}`);
}

function ShowName(candy){
    console.log(candy.name);
}

function GetQty(candy){
    console.log(candy.qty);
}

function addMoney(){
    let monnaieInt = +monnaie.value;
    monnaieInt+=(+this.value);
    monnaie.value = monnaieInt;
}

function buyCandy(candy){
    let montant = +monnaie.value;
    if(candy.price <= montant){
       if(checkQty(candy)) 
        chute.value=candy.name;
        retour.value = montant - candy.price;
    }else{
        alert(`Le prix des ${candy.name} est de ${candy.price}$. Veuillez entrer plus d'argent`);
    }
}

function checkQty(candy){
    if(candy.qty>0){
      candy.qty--;
        return true;  
    } 
    else {
        alert("plus de stock, desole");
        return false;
    }
}
function resetInputs(){
    chute.value = "";
    monnaie.value = 0;
    retour.value = 0;
}