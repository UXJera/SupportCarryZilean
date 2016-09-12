var baseMana = 300;
var manaPerLevel = 60;
var baseManaRegen = 7.7;
var manaRegenPerLevel = .8;
var level = 1;
var meditation = true;
var tear = false;
var tearMana = 250;
var items = [0, 1, 2];
var itemMana = 0;
var ranksInQ = 1;
var wavesInLane = 1;
var manaConservation = 1;

var totalMana = baseMana + (manaPerLevel * level) + itemMana;

function () {
  var bonusMana;
  var bonusRegen;

  var mana;
  var manaRegen;
  var manaGained;
  var manaAvailable;

  function(tears) {
    if(tears > 1000 || tears < 250) {
      console.log("Your tear is incorrectly adjusted")
    } else {
      tearMana = tears;
    }
  }

}
