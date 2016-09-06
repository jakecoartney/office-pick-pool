//Defined players
var pnDamen = {email:null,name:"Damen Christensen",code:"damen",admin:0};
var pnJake = {email:null,name:"Jake Coartney",code:"jake",admin:1};
var pnKevin = {email:null,name:"Kevin Rich",code:"kevin",admin:0};
var pnOlsen = {email:null,name:"Robert Olsen",code:"olsen",admin:0};
var pnLemoine = {email:null,name:"Robert LeMoine",code:"lemoine",admin:0};;
var pnRyan = {email:null,name:"Ryan Fristoe",code:"ryan",admin:0};
var pnDice = {email:null,name:"Random Dice Roll",code:"dice",admin:0};

//Array of players
var players = [pnDamen,pnJake,pnKevin,pnOlsen,pnLemoine,pnRyan,pnDice];

var nfl2016Wk1Picks = [
  {player:pnDamen,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null,pick16:null},
  {player:pnJake,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null,pick16:null},
  {player:pnKevin,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null,pick16:null},
  {player:pnOlsen,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null,pick16:null},
  {player:pnLemoine,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null,pick16:null},
  {player:pnRyan,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null,pick16:null},
  {player:pnDice,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null,pick16:null}
];

var nfl2016Wk2Picks = [
  {player:pnDamen,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null,pick16:null},
  {player:pnJake,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null,pick16:null},
  {player:pnKevin,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null,pick16:null},
  {player:pnOlsen,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null,pick16:null},
  {player:pnLemoine,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null,pick16:null},
  {player:pnRyan,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null,pick16:null},
  {player:pnDice,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null,pick16:null}
];

var nfl2016Wk3Picks = [
  {player:pnDamen,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null,pick16:null},
  {player:pnJake,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null,pick16:null},
  {player:pnKevin,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null,pick16:null},
  {player:pnOlsen,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null,pick16:null},
  {player:pnLemoine,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null,pick16:null},
  {player:pnRyan,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null,pick16:null},
  {player:pnDice,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null,pick16:null}
];

var nfl2016Wk4Picks = [
  {player:pnDamen,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null},
  {player:pnJake,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null},
  {player:pnKevin,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null},
  {player:pnOlsen,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null},
  {player:pnLemoine,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null},
  {player:pnRyan,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null},
  {player:pnDice,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null}
];

var nfl2016Wk5Picks = [
  {player:pnDamen,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null},
  {player:pnJake,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null},
  {player:pnKevin,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null},
  {player:pnOlsen,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null},
  {player:pnLemoine,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null},
  {player:pnRyan,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null},
  {player:pnDice,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null}
];

var nfl2016Wk6Picks = [
  {player:pnDamen,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null},
  {player:pnJake,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null},
  {player:pnKevin,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null},
  {player:pnOlsen,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null},
  {player:pnLemoine,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null},
  {player:pnRyan,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null},
  {player:pnDice,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null}
];

var nfl2016Wk7Picks = [
  {player:pnDamen,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null},
  {player:pnJake,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null},
  {player:pnKevin,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null},
  {player:pnOlsen,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null},
  {player:pnLemoine,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null},
  {player:pnRyan,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null},
  {player:pnDice,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null}
];

var nfl2016Wk8Picks = [
  {player:pnDamen,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null},
  {player:pnJake,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null},
  {player:pnKevin,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null},
  {player:pnOlsen,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null},
  {player:pnLemoine,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null},
  {player:pnRyan,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null},
  {player:pnDice,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null}
];

var nfl2016Wk9Picks = [
  {player:pnDamen,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null},
  {player:pnJake,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null},
  {player:pnKevin,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null},
  {player:pnOlsen,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null},
  {player:pnLemoine,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null},
  {player:pnRyan,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null},
  {player:pnDice,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null}
];

var nfl2016Wk10Picks = [
  {player:pnDamen,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null},
  {player:pnJake,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null},
  {player:pnKevin,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null},
  {player:pnOlsen,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null},
  {player:pnLemoine,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null},
  {player:pnRyan,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null},
  {player:pnDice,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null}
];

var nfl2016Wk11Picks = [
  {player:pnDamen,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null},
  {player:pnJake,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null},
  {player:pnKevin,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null},
  {player:pnOlsen,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null},
  {player:pnLemoine,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null},
  {player:pnRyan,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null},
  {player:pnDice,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null}
];

var nfl2016Wk12Picks = [
  {player:pnDamen,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null,pick16:null},
  {player:pnJake,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null,pick16:null},
  {player:pnKevin,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null,pick16:null},
  {player:pnOlsen,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null,pick16:null},
  {player:pnLemoine,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null,pick16:null},
  {player:pnRyan,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null,pick16:null},
  {player:pnDice,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null,pick16:null}
];

var nfl2016Wk13Picks = [
  {player:pnDamen,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null},
  {player:pnJake,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null},
  {player:pnKevin,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null},
  {player:pnOlsen,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null},
  {player:pnLemoine,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null},
  {player:pnRyan,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null},
  {player:pnDice,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null}
];

var nfl2016Wk14Picks = [
  {player:pnDamen,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null,pick16:null},
  {player:pnJake,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null,pick16:null},
  {player:pnKevin,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null,pick16:null},
  {player:pnOlsen,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null,pick16:null},
  {player:pnLemoine,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null,pick16:null},
  {player:pnRyan,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null,pick16:null},
  {player:pnDice,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null,pick16:null}
];

var nfl2016Wk15Picks = [
  {player:pnDamen,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null,pick16:null},
  {player:pnJake,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null,pick16:null},
  {player:pnKevin,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null,pick16:null},
  {player:pnOlsen,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null,pick16:null},
  {player:pnLemoine,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null,pick16:null},
  {player:pnRyan,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null,pick16:null},
  {player:pnDice,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null,pick16:null}
];

var nfl2016Wk16Picks = [
  {player:pnDamen,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null,pick16:null},
  {player:pnJake,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null,pick16:null},
  {player:pnKevin,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null,pick16:null},
  {player:pnOlsen,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null,pick16:null},
  {player:pnLemoine,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null,pick16:null},
  {player:pnRyan,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null,pick16:null},
  {player:pnDice,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null,pick16:null}
];

var nfl2016Wk17Picks = [
  {player:pnDamen,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null,pick16:null},
  {player:pnJake,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null,pick16:null},
  {player:pnKevin,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null,pick16:null},
  {player:pnOlsen,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null,pick16:null},
  {player:pnLemoine,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null,pick16:null},
  {player:pnRyan,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null,pick16:null},
  {player:pnDice,pick1:null,pick2:null,pick3:null,pick4:null,pick5:null,pick6:null,pick7:null,pick8:null,pick9:null,pick10:null,pick11:null,pick12:null,pick13:null,pick14:null,pick15:null,pick16:null}
];

var nfl2016Wk18Picks = [
  {player:pnDamen,pick1:null,pick2:null,pick3:null,pick4:null},
  {player:pnJake,pick1:null,pick2:null,pick3:null,pick4:null},
  {player:pnKevin,pick1:null,pick2:null,pick3:null,pick4:null},
  {player:pnOlsen,pick1:null,pick2:null,pick3:null,pick4:null},
  {player:pnLemoine,pick1:null,pick2:null,pick3:null,pick4:null},
  {player:pnRyan,pick1:null,pick2:null,pick3:null,pick4:null},
  {player:pnDice,pick1:null,pick2:null,pick3:null,pick4:null}
];

var nfl2016Wk19Picks = [
  {player:pnDamen,pick1:null,pick2:null,pick3:null,pick4:null},
  {player:pnJake,pick1:null,pick2:null,pick3:null,pick4:null},
  {player:pnKevin,pick1:null,pick2:null,pick3:null,pick4:null},
  {player:pnOlsen,pick1:null,pick2:null,pick3:null,pick4:null},
  {player:pnLemoine,pick1:null,pick2:null,pick3:null,pick4:null},
  {player:pnRyan,pick1:null,pick2:null,pick3:null,pick4:null},
  {player:pnDice,pick1:null,pick2:null,pick3:null,pick4:null}
];

var nfl2016Wk20Picks = [
  {player:pnDamen,pick1:null,pick2:null},
  {player:pnJake,pick1:null,pick2:null},
  {player:pnKevin,pick1:null,pick2:null},
  {player:pnOlsen,pick1:null,pick2:null},
  {player:pnLemoine,pick1:null,pick2:null},
  {player:pnRyan,pick1:null,pick2:null},
  {player:pnDice,pick1:null,pick2:null}
];

var nfl2016Wk21Picks = [
  {player:pnDamen,pick1:null},
  {player:pnJake,pick1:null},
  {player:pnKevin,pick1:null},
  {player:pnOlsen,pick1:null},
  {player:pnLemoine,pick1:null},
  {player:pnRyan,pick1:null},
  {player:pnDice,pick1:null}
];

var nfl2016Picks = [nfl2016Wk1Picks,nfl2016Wk2Picks,nfl2016Wk3Picks,nfl2016Wk4Picks,nfl2016Wk5Picks,nfl2016Wk6Picks,nfl2016Wk7Picks,nfl2016Wk8Picks,nfl2016Wk9Picks,nfl2016Wk10Picks,nfl2016Wk11Picks,nfl2016Wk12Picks,nfl2016Wk13Picks,nfl2016Wk14Picks,nfl2016Wk15Picks,nfl2016Wk16Picks,nfl2016Wk17Picks,nfl2016Wk18Picks,nfl2016Wk19Picks,nfl2016Wk20Picks,nfl2016Wk21Picks];
