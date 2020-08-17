//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here

function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  let result = [managerName, managerAge, currentTeam, trophiesWon];
  return result;
}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

function createFormation(array); {
  var obj = {
    defender: array[0],
    midfield: array[1],
    forward: array[2]
  };
  return obj;
}

//write your function here

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

function filterByDebut(year) {
  let arr = [];
  players.forEach(player => {
    if (year == player.debut) {
      arr.push(player);
    }
  });
  return arr;
}
//Progression 3 - Filter players that debuted in ___ year

//Progression 4 - Filter players that play at the position _______

function filterByPosition(position) {
  let result = [];
  var player;
  for (player in data) {
    if (data[player] == position) {
      result.push(player);
    }
  }
  return result;
}


//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName) {
  let result = [];
  if (awardName == result) {
    return "";
  } else {
    for (let i = 0; i < players.length; i++) {
      for (let j = 0; j < players[i].awards.length; j++) {
        if (players[i].awards[j].name == awardName) {
          result.push(players[i]);
        }
      }
    }
    return result;
  }
}

//Progression 6 - Filter players that won ______ award ____ times

//Progression 7 - Filter players that won ______ award and belong to ______ country

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____

//Progression 9 - Sort players in descending order of their age

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order