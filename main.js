var incremento = document.getElementById("incremento");
var decremento = document.getElementById("decremento");
var reset = document.getElementById("reset");
var numberDisplayed = document.getElementById("number");

var count = 0;

incremento.addEventListener("click", function()
{   
    if (count < 1000)
    {
        count ++;
        numberDisplayed.innerHTML = count;
    }
});

decremento.addEventListener("click", function()
{
    if (count > 0)
    {
        count--;
        numberDisplayed.innerHTML = count;
    }
});

reset.addEventListener("click", function()
{
    count = 0;
    numberDisplayed.innerHTML = count;
});
