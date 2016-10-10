// Player stats
var Player = function(PlayerStats)
{
    var health = 100;
    var armor = 100;
    var magic = 50;
    var magicType = ["fire", "water", "grass"];
    var weapons = ["sword", "bow"];
    var items = [potion, elixir, gold];
    var potionCount = 1;
    var elixirCount = 1;
    var goldCount = 100;
}
// Fire enemy stats
var fireEnemy = function(fireStats)
{
    var health = 50;
    var speed = 50;
    var power = 8;
}
// Water enemy stats
var waterEnemy = function(waterStats)
{
    var health = 50;
    var speed = 50;
    var power = 9;
}
// Grass enemy stats
var grassEnemy = function(grassStats)
{
    var health = 60;
    var speed = 51;
    var power = 10;
}
// Shop
var shop = function(shopStats)
{
    var potionCost = 75;
    var elixirCost = 100;
}
// Boss stats
var boss = function(bossStats)
{
    var health = 200;
    var speed = 900000000
    var power = 14;
    var type = ["fire", "grass", "water"];
}
// Adventure Start
alert = (" 'Welcome stranger!  Our wonderful town of Codeville is being rampaged by corrupted and incorrect javascript files!  You must help us!' ");
// Name prompt
prompt = (" 'What is your name, stranger?' ", name);
// Item get!
alert = (" 'Thank you for helping us, ", name, ".  Here are some supplies to help you on your journey.' ");
alert = (" *Obtained ", armor, " armor.*");
alert = (" *Obtained ", magic, " magic.*");
alert = (" *Obtained ", weapons[0], " and ", weapons[1], ".*");
alert = (" *Obtained ", gold, " gold.*");
// Instructions
prompt = (" 'Would you like to know how to play?' ", instructions);
if (instructions == 'yes')
{

}
else
{
    alert = (" 'Very well.  Good luck on your adventure!' ");
}

