$(document).ready(function(){
  weeklyShedule();
  getCurrentUser();
});

function getCurrentUser(){
  actPlayer = "jake";
  if (actPlayer){
    var actUsername = "Not Logged In";
    var isAdmin = 0;
    for(var i = 0; i < players.length; i++){
      if (actPlayer === players[i].code){
        actUsername = players[i].name;
        isAdmin = players[i].admin;
        break;
      }
    }
    $("#naviList").append("<li id='weeklyPicks' class='nav-list'><a href='#' onclick='weeklyPicks();'>My Weekly Picks</a></li><li id='weeklyScores' class='nav-list'><a href='#' onclick='weeklyScores();'>Weekly Scores</a></li>");
    $("#loginList").append("<li class='user'>"+actUsername+"</li>");
    if (isAdmin){
      $("#naviList").append("<li id='weeklyManagement' class='nav-list'><a href='#' onclick='weeklyManagement();'>Management</a></li>");
    }
  }
  else {
    //Not allowing people to sign up at this time, but once it is ready to accept multiple iterations add the below for sign-up
    //<li><a href='#'><span class='glyphicon glyphicon-user'></span> Sign Up</a></li>
    $("#loginList").append("<li><a href='#'><span class='glyphicon glyphicon-log-in'></span> Login</a></li>");
  }
}

//Defining Navigation Selections
function weeklyShedule(){
  switchMain("#weeklySchedule");
  $("#main").append("<h1 class='header hidden-xs'>Weekly Schedule</h1><div id='weekButtons' class='col-xs-6 col-md-1'></div><div class='title col-xs-6 hidden-sm hidden-md hidden-lg hidden-xl'>Weekly Schedule</div><div id='weekGames' class='col-xs-12 col-md-11'></div>");
  weekCmb("weeklyScheduleGames");
  weeklyScheduleGames(nfl2016Wk1,1);
}

function weeklyPicks(){
  switchMain("#weeklyPicks");
  $("#main").append("<h1 class='header hidden-xs'>Weekly Picks</h1><div id='weekButtons' class='col-xs-6 col-md-1'></div><div class='title col-xs-6 hidden-sm hidden-md hidden-lg hidden-xl'>Weekly Picks</div><div id='weekPicks' class='col-xs-12 col-md-11'></div>");
  weekCmb("weeklyPicksGames");
  weeklyPicksGames(nfl2016Wk1,1);
}

function weeklyScores(){
  switchMain("#weeklyScores");
  $("#main").append("<h1 class='header'>Scoreboard</h1>");
  $("#main").append("<div id='overallScores' class='col-xs-12'></div><div id='weekButtons' class='col-xs-6 col-md-1'></div><div id='weekScores' class='col-xs-12 col-md-11'></div>");
  overallScores();
  weekCmb("weeklyScoresGames");
  weeklyScoresGames(nfl2016Wk1,1);
}

function weeklyManagement(){
  switchMain("#weeklyManagement");
  $("#main").append("<h1 class='header hidden-xs'>Weekly Management</h1><div id='weekButtons' class='col-xs-6 col-md-1'></div><div class='title col-xs-6 hidden-sm hidden-md hidden-lg hidden-xl'>Weekly Management</div><div id='weekManagements' class='col-xs-12 col-md-11'></div>");
  weekCmb("weeklyManagementGames");
  weeklyManagementGames(nfl2016Wk1,1);
}

//Reset main content area and navigation selection hightlight
function switchMain(id){
    $(".nav-list").removeClass("active");
    $("#main").empty();
    $(id).addClass("active");
}

function weekCmb(click){
  $("#weekButtons").append("<div class='btn-group' role='group'><button type='button' class='btn btn-default dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'><span id='weekButton' class='weekButton'>Week</span><span class='caret'></span></button><ul id='weeks' class='dropdown-menu'></ul>");
  for (var i = 0; i < nflWeeks.length; i++){
    var weekNbr = i + 1;
    $("#weeks").append("<li><a href='#' onclick='"+click+"(nfl2016Wk"+weekNbr+","+weekNbr+"); return false;'>Week "+weekNbr+"</a></li>");
  }
}

function weeklyScheduleGames(week,weekNbr){
  $("#weekButton").text("Week "+weekNbr+" ");
  $(".weekGame").remove();
  for (var i = 0; i < week.length; i++){
    var homeTeamName = homeTeamCode = awayTeamName = awayTeamCode = "TBD";
    var homeTeamWins = homeTeamLosses = awayTeamWins = awayTeamLosses = homeTeamScore = awayTeamScore = 0;
    var homeTeamColor1  = awayTeamColor1 = "#fff";
    var homeTeamColor2 = awayTeamColor2 = "#000";
    var homeTeamIcon = awayTeamIcon = undefined;
    if(week[i].home.hasOwnProperty('tmCode')){
      homeTeamCode = week[i].home.tmCode;
      homeTeamName = week[i].home.tmName;
      homeTeamScore = week[i].homeScore;
      homeTeamColor1 = week[i].home.tmColor1;
      homeTeamColor2 = week[i].home.tmColor2;
      homeTeamIcon = week[i].home.tmLogo;
      homeTeamWins = numWins(week[i].home);
      homeTeamLosses = numLosses(week[i].home);
    }
    if(week[i].away.hasOwnProperty('tmCode')){
      awayTeamCode = week[i].away.tmCode;
      awayTeamName = week[i].away.tmName;
      awayTeamColor1 = week[i].away.tmColor1;
      awayTeamColor2 = week[i].away.tmColor2;
      awayTeamScore = week[i].awayScore;
      awayTeamIcon = week[i].away.tmLogo;
      awayTeamWins = numWins(week[i].away);
      awayTeamLosses = numLosses(week[i].away);
    }
    var gameNbr = i + 1;
    if (gameNbr < 10){gameNbr = "0" + gameNbr;}
    $("#weekGames").append("<div class='weekGame'><div class='gameNumber col-xs-12 col-sm-1'>"+gameNbr+"</div><div class='gameTeam1 col-xs-6 col-sm-5' style='background: "+awayTeamColor1+"; color: "+awayTeamColor2+"'>"+awayTeamName+" ("+awayTeamWins+"-"+awayTeamLosses+")<span class='gameScore1'>"+awayTeamScore+"</span></div><div class='gameNumber hidden-xs col-sm-1' style='background: linear-gradient(to right, "+awayTeamColor1+" , "+homeTeamColor1+")'> - </div><div class='gameTeam2 col-xs-6 col-sm-5' style='background: "+homeTeamColor1+"; color: "+homeTeamColor2+"'><span class='gameScore2'>"+homeTeamScore+"</span>("+homeTeamWins+"-"+homeTeamLosses+") "+homeTeamName+"</div></div>")
  }
}

function weeklyPicksGames(week,weekNbr){
  $("#weekButton").text("Week "+weekNbr+" ");
  $(".weekPick").remove();
  var pickWeek = nfl2016Picks[weekNbr - 1];
  var actPicks = "";
  for (var z = 0; z < pickWeek.length; z++){
    if(pickWeek[z].player.code == actPlayer){
      actPicks = pickWeek[z];
      break;
    }
  }
  for (var i = 0; i <week.length; i++){
    var playerPick = actPicks["pick"+(i+1)];
    var homeTeam = awayTeam = "";
    var homeTeamName = homeTeamCode = awayTeamName = awayTeamCode = "TBD";
    var homeTeamWins = homeTeamLosses = homeTeamScore = homeTeamPickBn = awayTeamWins = awayTeamLosses = awayTeamScore = awayTeamPickBn = 0;
    var homeTeamColor1  = awayTeamColor1 = "#fff";
    var homeTeamColor2 = awayTeamColor2 = "#000";
    var homeTeamIcon = awayTeamIcon = undefined;
    var gameDate = week[i].date;
    var todayDate = getToday();
    if(week[i].home.hasOwnProperty('tmCode')){
      homeTeam = week[i].home;
      homeTeamCode = homeTeam.tmCode;
      homeTeamName = homeTeam.tmName;
      homeTeamScore = week[i].homeScore;
      homeTeamColor1 = homeTeam.tmColor1;
      homeTeamColor2 = homeTeam.tmColor2;
      homeTeamIcon = homeTeam.tmLogo;
      homeTeamWins = numWins(homeTeam);
      homeTeamLosses = numLosses(homeTeam);
      if (playerPick == homeTeam){
        homeTeamPickBn = 1;
      }
    }
    if(week[i].away.hasOwnProperty('tmCode')){
      awayTeam = week[i].away;
      awayTeamCode = awayTeam.tmCode;
      awayTeamName = awayTeam.tmName;
      awayTeamScore = week[i].awayScore;
      awayTeamColor1 = awayTeam.tmColor1;
      awayTeamColor2 = awayTeam.tmColor2;
      awayTeamIcon = awayTeam.tmLogo;
      awayTeamWins = numWins(awayTeam);
      awayTeamLosses = numLosses(awayTeam);
      if (playerPick == awayTeam){
        awayTeamPickBn = 1;
      }
    }
    var gameNbr = i + 1;
    if (gameNbr < 10){gameNbr = "0" + String(gameNbr);}
    var weekPickNbr = "week" + gameNbr;
    var homePickNbr = "home" + i;
    var awayPickNbr = "away" + i;
    $("#weekPicks").append("<div class='weekPick'><div id='"+weekPickNbr+"' class='gameNumber col-xs-12 col-sm-1'>"+gameNbr+"</div><a href='#' onclick='weekPickAway("+i+",nfl"+awayTeamName+","+weekNbr+"); return false;' id='gamePick1' class='weekTeamPick'><div class='"+awayPickNbr+" gameTeam1 col-xs-6 col-sm-5'>"+awayTeamName+" ("+awayTeamWins+"-"+awayTeamLosses+")</div></a><div class='hidden-xs col-sm-1'></div><a href='#' onclick='weekPickHome("+i+",nfl"+homeTeamName+","+weekNbr+"); return false;' id='gamePick2' class='weekTeamPick'><div class='"+homePickNbr+" gameTeam2 col-xs-6 col-sm-5'>("+homeTeamWins+"-"+homeTeamLosses+") "+homeTeamName+"</div></a></div>")
    if (gameDate <= todayDate){
      $("#"+weekPickNbr).append(" <i class='fa fa-lock' aria-hidden='true'></i>")
      content = $("#gamePick1").contents();
      $("#gamePick1").replaceWith(content);
      content = $("#gamePick2").contents();
      $("#gamePick2").replaceWith(content);
    }
    else {
      $("#"+weekPickNbr).append(" <i class='fa fa-unlock' aria-hidden='true'></i>");
    }
    if (homeTeamPickBn === 1){
      weekPickHome(i,playerPick,weekNbr);
    }
    if (awayTeamPickBn === 1){
      weekPickAway(i,playerPick,weekNbr);
    }
  }
}

function overallScores(){
  for (var i = 0; i < players.length; i++){
    var playerName = "";
    var playerCode = "";
    var playerScore = 0;
    playerName = players[i].name;
    playerCode = players[i].code;
    playerScore = findPlayerPicks(playerCode);
    $("#overallScores").append("<div class='overallScore col-xs-12 col-sm-3'><div class='playerName col-xs-12'>"+playerName+"</div><div class='totalScore col-xs-12'>"+playerScore+"</div></div>");
    $("#overallScores").sortable();
    $("#overallScores").disableSelection();
  }
}

function weeklyScoresGames(week,weekNbr){
  $("#weekButton").text("Week "+weekNbr+" ");
  $(".weekScore").remove();
  for (var i = 0; i < players.length; i++){
    var currentPlayer = "No Player";
    var count = 0;
    if(players[i].hasOwnProperty('code')){
      currentPlayer = players[i].name;
    }
    $("#weekScores").append("<div id='player"+i+"' class='weekScore'><div id='"+players[i].code+"' class='gameNumber col-xs-12'>"+currentPlayer+"</div></div>");
    for (var j = 0; j < week.length; j++){
      var pickNbr = "pick" + (j + 1)
      var weekID = weekNbr - 1;
      var gameWinner = "No Winner";
      var pickName = "No Pick";
      var accuratePick = false;
      if (week[j].winner){
        gameWinner = week[j].winner.tmName;
      }
      if (nfl2016Picks[weekID][i][pickNbr] != null){
        pickName = nfl2016Picks[weekID][i][pickNbr].tmName;
      }

      if  (pickName === gameWinner){
        count += 1;
        accuratePick = true;
        $("#player"+i).append("<div class='goodPick col-xs-12 col-sm-2'>Pick "+(j+1)+": "+pickName+"</div>");
      }
      else if (week[j].winner && (pickName != gameWinner)){
        $("#player"+i).append("<div class='badPick col-xs-12 col-sm-2'>Pick "+(j+1)+": "+pickName+"</div>");
      }
      else {$("#player"+i).append("<div class='mehPick col-xs-12 col-sm-2'>Pick "+(j+1)+": "+pickName+"</div>");}
    }
    $("#"+players[i].code).append(" - "+count+" Correct");
    $("#weekScores").sortable();
    $("#weekScores").disableSelection();
  }
}

function weeklyManagementGames(week,weekNbr){
  $("#weekButton").text("Week "+weekNbr+" ");
  $(".weekManagement").remove();
  for (var i = 0; i < week.length; i++){
    var homeTeamName = homeTeamCode = awayTeamName = awayTeamCode = "TBD";
    var homeTeamWins = homeTeamLosses = awayTeamWins = awayTeamLosses = homeTeamScore = awayTeamScore = 0;
    if(week[i].home.hasOwnProperty('tmCode')){
      homeTeamCode = week[i].home.tmCode;
      homeTeamName = week[i].home.tmName;
      homeTeamScore = week[i].homeScore;
    }
    if(week[i].away.hasOwnProperty('tmCode')){
      awayTeamCode = week[i].away.tmCode;
      awayTeamName = week[i].away.tmName;
      awayTeamScore = week[i].awayScore;
    }
    var gameNbr = i + 1;
    if (gameNbr < 10){gameNbr = "0" + gameNbr;}
    $("#weekManagements").append("<form name='gameInfo' action='' method='POST'><div class='weekManagement'><div class='gameNumber col-xs-12 col-sm-2'>"+gameNbr+"</div><div id='manageAwayTeam' class='gameTeam1 col-xs-6 col-sm-3'>"+awayTeamName+"</div><div class='col-sm-2'><input type='text' id='awayTeamScore' value='"+awayTeamScore+"'></input></div><div id='manageHomeTeam' class='gameTeam1 col-xs-6 col-sm-3'>"+homeTeamName+"</div><div class='col-sm-2'><input type='text' id='homeTeamScore' value='"+homeTeamScore+"'></input></div></div></form>");
  }
}

function weekPickHome(game,pick,week){
  var weekNbr = week - 1;
  var homeGame = ".home" + game;
  var awayGame = ".away" + game;
  var pickNbr = "pick" + (game + 1);
  var playerID = 0;
  for (var x = 0; x < players.length; x++){
    if (players[x].code === actPlayer){
      playerID = x;
      break;
    }
  }
  $(awayGame).removeClass("activePick");
  $(homeGame).toggleClass("activePick");
  if ($(homeGame).hasClass("activePick") == true){
    nfl2016Picks[weekNbr][playerID][pickNbr] = pick;
  }
}

function weekPickAway(game,pick,week){
  var weekNbr = week - 1;
  var homeGame = ".home" + game;
  var awayGame = ".away" + game;
  var pickNbr = "pick" + (game + 1);
  var playerID = 0;
  for (var x = 0; x < players.length; x++){
    if (players[x].code === actPlayer){
      playerID = x;
      break;
    }
  }
  $(homeGame).removeClass("activePick");
  $(awayGame).toggleClass("activePick");
  if ($(awayGame).hasClass("activePick") == true){
    nfl2016Picks[weekNbr][playerID][pickNbr] = pick;
  }
}

//returns number of times a given teamcode is associated with a winner code
function numWins(team){
  var wins = 0;
  for(var j = 0; j < nflWeeks.length; j++){
    for(var k = 0; k < nflWeeks[j].length; k++){
      if(nflWeeks[j][k].winner == team){
        wins += 1;
      }
    }
  }
  return wins;
}

//returns number of times a given teamcode is associated with a winner code
function numLosses(team){
  var losses = 0;
  for(var j = 0; j < nflWeeks.length; j++){
    for(var k = 0; k < nflWeeks[j].length; k++){
      if(nflWeeks[j][k].loser == team){
        losses += 1;
      }
    }
  }
  return losses;
}

function findPlayerPicks(playerCode){
  var playerCount = 0;
  for (var i = 0; i < nfl2016Picks.length; i++){
    for (var j = 0; j < nfl2016Picks[i].length; j++){
      var weekPickPlayerCode = nfl2016Picks[i][j].player.code;
      if (weekPickPlayerCode === playerCode){
        for (k = 0; k < nflWeeks[i].length; k++){
          var pickNbr = "pick" + (k + 1);
          var playerPick = nfl2016Picks[i][j][pickNbr];
          if (playerPick === null){
            playerPick = "No Pick";
          }
          gameWinner = findWeekWinner(i,k);
          if (playerPick === gameWinner){
            playerCount += 1;
          }
        }
      }
    }
  }
  return playerCount;
}

function findWeekWinner(weekNbr,gameNbr){
  return nflWeeks[weekNbr][gameNbr].winner;
}

//Returns date as string in full year, month, day for >/< comparisons
function getToday(){
  var today = new Date();
  var day = today.getDay();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();
  if(dd < 10){
    dd = '0' + dd;
  }
  if(mm < 10){
    mm = '0' + mm;
  }
  today = parseInt(yyyy+mm+dd);
  return today;
}
