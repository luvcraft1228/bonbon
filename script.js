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
/* initialisation des boutons monnaies */

const buttons = document.querySelectorAll("#temp");
buttons.forEach(button => button.addEventListener('click', addMoney))


/*fonctions */
function clickBonbon(element)
{
    console.log(element.id);
    let activeCandy = getCandyById(element.id);
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
    console.log(this.value);
}