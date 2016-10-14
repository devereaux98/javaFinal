//Devereaux Legakis
//Anthony Romrell
//JavaScript Final



// Player stats
//var Player = function(PlayerStats)
//{
    //var name;
    //var health = 100;
    //var armor = 100;
    //var magic = 50;
    //var magicType = ["fire", "water", "grass"];
    //var weapons = ["sword", "bow"];
    //var items = [potion, elixir, gold];
    //var potionCount = 1;
    //var elixirCount = 1;
    //var goldCount = 100;
//}

// Player stats

var Player = 
{
    name,
    health: 100,
    armor: 100,
    magic: 50,
    magicType: ["fire", "water", "grass"],
    weapons: ["sword", "bow"],
    items: ["potion", "elixir", "gold", "armor"],
    potionCount: 1,
    elixirCount: 1,
    goldCount: 100,

    SubtractHealth: function (power)
    {
        this.health -= power;
    },

    SubtractArmor: function (power)
    {
        this.armor -= power;
    },


}

//Common enemy stats

var commonEnemy = 
{
    health: 25,
    speed: 50,
    power: 5,
    enemyType: "Common",

    CommonAttack: function (power)
    {
        Player.armor -= power;
        if (Player.armor == 0)
        {
            Player.health -= power;
        }
    },

    CommonTakeDamage: function ()
    {
        this.health -= 10;
    },
}
// Fire enemy stats
var fireEnemy = 
{
    health: 50,
    speed: 50,
    power: 8,
    enemyType: "Fire",

    FireAttack: function (power)
    {
        Player.armor -= power;
        if (Player.armor == 0)
        {
            Player.health -= power;
        }
    },

    FireTakeDamage: function ()
    {
        this.health -= 10;
    },
}
// Water enemy stats
var waterEnemy = 
{
    health: 50,
    speed: 50,
    power: 9,
    enemyType: "Water",

    WaterAttack: function (power)
    {
        Player.armor -= power;
        if (Player.armor == 0)
        {
            Player.health -= power;
        }
    },

    WaterTakeDamage: function ()
    {
        this.health -= 10;
    },
}
// Grass enemy stats
var grassEnemy = 
{
    health: 60,
    speed: 51,
    power: 10,

    GrassAttack: function (power)
    {
        Player.armor -= power;
        if (Player.armor == 0)
        {
            Player.health -= power;
        }
    },

    GrassTakeDamage: function ()
    {
        this.health -= 10;
    },

}
// Shop
var shop = 
{
    potionCost: 75,
    elixirCost: 100,
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
function adventureStart()
{
    alert(" 'Welcome stranger!  Our wonderful town of Codeville is being rampaged by corrupted and incorrect javascript files!  You must help us!' ");
}
adventureStart();
// Name prompt
var name = prompt(" 'What is your name, stranger?' ");
// Item get!
function itemGet()
{
    alert(" 'Thank you for helping us, " + name + ".  Here are some supplies to help you on your journey.' ");
    alert(" *Obtained " + Player.armor + " Armor*");
    alert(" *Obtained " + Player.magic + " Magic*");
    alert(" *Obtained " + Player.weapons[0] + " and " + Player.weapons[1] + "*");
    alert(" *Obtained " + Player.goldCount + " Gold*");
    alert(" *Obtained " + Player.potionCount + " Potion(s)*");
    alert(" *Obtained " + Player.elixirCount + " Elixir(s)*");
}

itemGet();

// Instructions

function instructionFunction()
{
    alert(" 'When you engage in a Battle with one of the bad codes, you will have a number of options of what to do.");
    alert(" 'The first choice is to Attack.  Use this to engage with your enemies and deal damage using your weapons.");
    alert(" 'Depending on the code monster, you'll want to use different weapons. '");
    alert(" 'The second thing you can do is use Magic.' ");
    alert(" 'You'll want to use Magic when a code monster has armor that can't be pierced by your weapons.' ");
    alert(" 'There are 3 types of magic spells, and 3 different kinds of code monsters, respectively. '");
    alert(" 'The types of code monsters and spells are Water, Grass, and Fire.' ");
    alert(" 'Each monster has a weakness to the type of Magic you'd think.  Water is strong against Fire, Fire is strong against Grass, and Grass is strong against Water.' ");
    alert(" 'You only have so much Magic, however.  So when you begin to run low, use an Elixir, by choosing Items.' ");
    alert(" 'These code monsters aren't defenseless, however.  And some of them certainly don't tickle.' ");
    alert(" 'You have armor that can block damage.  However, when your armor is gone, the code monsters will take a toll on your health.' ");
    alert(" 'When they deal damage, you can heal yourself by using a Potion, which you can also access from Items.' ");
    alert(" 'This quest is also a high-risk high-reward sort of deal.  When you slay a code monster, they will drop loot, which can vary from Gold to more supplies.' ");
    alert(" 'The supplies I gave you will not last forever, however.  Luckily on your quest there will be some shops in which you can buy more things using Gold.' ");
    alert(" 'One last thing.  If you would like to check on your current stats, right click the webpage, click Inspect, then look at the Console Log.' ");
    alert(" 'Good luck, " + name + ".' ");
}

var instructions = prompt(" 'Would you like to know how to play?' ", instructions);
if (instructions == 'yes' || 'Yes' || 'YES')
{
    instructionFunction();
}
else
{
    alert(" 'Very well.  Good luck on your adventure, " + name + "!' ");
}

//The quest begins!

alert("You walk towards the looming castle in the distance.");
alert("Out of nowhere, a code monster appears!");

//Battle 1

alert("A " + commonEnemy.enemyType + "code monster appeared!  What will you do?");

function BattlePrompt ()
{
    var battleChoice = prompt("Attack     Magic     Item     ");
    switch (battleChoice)
    {
        case 1: 
            if (battleChoice == 'Attack' || 'attack' || 'ATTACK')
            {
                var weaponChoice = prompt("What weapon do you wish to use? (sword or bow)");
                switch (weaponChoice)
                {
                    case 1:
                        var weaponChoice = 'sword' || 'Sword' || 'SWORD';
                        alert("You attack with your " + Player.weapons[0] + ".")
                        break;
                }
            }
        break;
        case 2:
            if (battleChoice == 'Magic' || 'magic' || 'MAGIC')
            {    
                var magicChoice = prompt("What kind of magic would you like to use? (water, fire, or grass)");
                switch(magicChoice)
                {
                    case 1:
                    if (magicChoice == 'water' || 'Water' || 'WATER')
                    {
                        alert("You used " + Player.magicType[1] + " magic.");
                    }
                    break;
                    case 2: 
                        if (magicChoice == 'fire' || 'Fire' || 'FIRE')
                        {
                            alert("You used " + Player.magicType[0] + " magic.");
                        }
                    break;
                    case 3:
                        if (magicChoice == 'grass' || 'Grass' || 'GRASS')
                        {
                            alert("You used " + Player.magicType[2] + " magic.");
                        }
                        break;
            }
        break;

        case 3: 
            var battleChoice = 'Item' || 'item' || 'ITEM';
            var itemChoice = prompt("What item would you like to use?",
            "Health Potion     Elixir     Armor");
        switch(itemChoice)
        {
            case 1:
                if (itemChoice == 'potion' || 'Potion' || 'POTION')
                {
                    alert("You used a potion");
                    alert("*Restored 25 health*");
                }
                break;
            case 2:
                var itemChoice = 'elixir' || 'Elixir' || 'ELIXIR';
                alert("You used an elixir");
                alert("*Restored 20 magic");
                break;
            case 3:
                var itemChoice = 'armor' || 'Armor' || 'ARMOR';
                alert("You used Armor");
                alert("*Restored 50 armor*");
                break;
        }
        break;
    }

BattlePrompt();

alert("You keep walking forward, the terrifying castle getting closer");
alert("Out of nowhere, a code monster appears!");

//Battle 2


