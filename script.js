/* initialisation du json */

var request = new XMLHttpRequest();
request.open("GET", "../candies.json", false);
request.send(null);
var my_JSON_object = JSON.parse(request.responseText);

/*initialisation des areas */
const areas = document.getElementsByTagName("area");
const mapArea = document.getElementsByName("image-map")[0];
for(i=0;i<20;i++)
{
 areas[i].id = "candy"+i;
}

mapArea.addEventListener("click", function(event){
    clickBonbon(event.target);
    return false;
})

function clickBonbon(element)
{
    console.log(element.id);
}