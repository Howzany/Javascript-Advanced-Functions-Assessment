/*
  Complete the functions below as described in the instructions.

  The `parks` parameter refers to an array of objects with the following shape:
  {
    id: 1,
    name: "Acadia",
    areaInSquareKm: 198.6,
    location: { state: "Maine" },
  }

  The `users` parameter refers to an object with the following shape:
  {
    "karah.branch3": {
      visited: [1],
      wishlist: [4, 6],
    }
  }
*/

// Advanced functions: Assessment

// This lesson should take you between 30 and 60 minutes. If you spend longer than that on this lesson, reach out for help!
// Instructions

// Your goal for this lesson is to get the tests to pass. To do so, you will be writing five different functions related to park and user data.
// Dataset

// You will be working with two different sets of data for these functions: parks and users.

// parks is an array of objects, similar to this:

// const parks = [
//   {
//     id: 1,
//     name: "Acadia",
//     areaInSquareKm: 198.6,
//     location: { state: "Maine" },
//   },
//   {
//     id: 2,
//     name: "Canyonlands",
//     areaInSquareKm: 1366.2,
//     location: { state: "Utah" },
//   },
//   {
//     id: 3,
//     name: "Zion",
//     areaInSquareKm: 595.9,
//     location: { state: "Utah" },
//   },
// ];

// users is an object with a number of keys that represents each user. It looks something like this:

// const users = {
//   "karah.branch3": {
//     visited: [2],
//     wishlist: [1, 3],
//   },
//   "dwayne.m55": {
//     visited: [2, 3],
//     wishlist: [1],
//   },
// };





//===================================================================================================================

// getParksByState

// This function takes in an array of parks and a specific state and returns all the parks that are in that state.

// getParksByState(parks, "Utah");
// /*
//   [
//     {
//       id: 2,
//       name: "Canyonlands",
//       areaInSquareKm: 1366.2,
//       location: { state: "Utah" },
//     }
//   ]
// */
function getParksByState(inputArray, state) {
  const result = inputArray.filter((item) => item.location.state === state);
  return result;
}



//===================================================================================================================
// getWishlistParksForUser

// This function takes in an array of parks, all users, and a username. It then returns an array of park objects related to the wishlist of the user with that username. Each number in the wishlist refers to the id of one of the parks.

// getWishlistParksForUser(parks, users, "karah.branch3");
// /*
//   [
//     {
//       id: 1,
//       name: "Acadia",
//       areaInSquareKm: 198.6,
//       location: { state: "Maine" },
//     }
//   ]
// */
// The `users` parameter refers to an object with the following shape:
// {
//   "karah.branch3": {
//     visited: [1],
//     wishlist: [4, 6],
//   }
// }

// function getWishlistParksForUser(parks, users, individualUser) {
// const result = parks.filter((park) => {
//   {
//    if (park.id === users.individualUser.wishlist[i])
//   }

// });
//   return result;
// }


function getWishlistParksForUser(parks, users, name) {
  let filter = parks.filter((park) => {
    if (users[name].wishlist.includes(park.id)) {
// console.log("users[name]", users[name])
// console.log("users.name", users.name)
// console.log("users[name][wishlist]", users[name][wishlist])
// console.log("users[name].wishlist", users[name].wishlist)
      return park;
    }
  });
  return filter;
}



//===================================================================================================================
// userHasVisitedAllParksInState

// This function returns a boolean that represents whether or not a user has visited all parks in the parks array from a given state.

// userHasVisitedAllParksInState(parks, users, "Utah", "dwayne.m55"); //> true
// userHasVisitedAllParksInState(parks, users, "Utah", "karah.branch3"); //> false


function userHasVisitedAllParksInState(parks, users, state, name) {


// I want to use every to check to see if every park of a given has been visited by the name
// the condition of the check is every park of a state is visited...
// so do I apply every to parks? or to users?
//I think I'll make my life easier by first extracting from parks, a list of all the parks from the given state. 
// but wait, I have this function already called getParksByState!
const parksInStateArray = getParksByState (parks, state)
// so now it's more clear, that the users needs to be what every targets in order to check against parksInStateArray!
// let every = parksInStateArray.id.every((person) => {
// users[name].visited.includes(parksInStateArray.id) 
// })
// return every
//seems extra hard to do it that way... so let's simplify it down further.
// let's make an array of only the id of the parksInStateArray of getParksByState.
// const parkIdsByState = parksInStateArray.map((park) => )
const parkIDsByState = parksInStateArray.map((park) => park.id);
// const mappedArr = myArray.map((item) => item.title);
// console.log(parkIDsByState)
// ok now I have a smaller and simpler array of all the park id's of a state. 
// this is defined as parkIDsByState... so now I can do the .every situation.
const every = parkIDsByState.every((parkID) => users[name].visited.includes(parkID))
return every
}
// const isSubset = (array1, array2) => array2.every((element) => array1.includes(element));

// console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
// console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false


//===================================================================================================================
// userHasVisitedParkOnWishlist

// This function takes in the list of users and two usernames. If the first user has visited any of the parks represented by the second user's wish list, return true. Otherwise, return false.

// userHasVisitedParkOnWishlist(users, "dwayne.m55", "karah.branch3"); //> true
// userHasVisitedParkOnWishlist(users, "karah.branch3", "dwayne.m55"); //> false

function userHasVisitedParkOnWishlist(users, nameOne, nameTwo) {
  // in this one we care about name1's visited array, and name2's wishlist and we only need .some to be true.
const nameOneVisited = users[nameOne].visited;
const nameTwoWishlist = users[nameTwo].wishlist;
// I have extracted the arrays of visited and wishlist so that they can now be easily compared with .some
const matched = nameOneVisited.some((parkID) => nameTwoWishlist.includes(parkID));
return matched;
}



//===================================================================================================================
// getUsersForUserWishlist

// This function returns all the usernames who have visited any park on the given user's wish list.

// getUsersForUserWishlist(users, "karah.branch3"); //> ["dwayne.m55"]
// getUsersForUserWishlist(users, "dwayne.m55"); //> []

// The `users` parameter refers to an object with the following shape:
// {
//   "karah.branch3": {
//     visited: [1],
//     wishlist: [4, 6],
//   }
// }

function getUsersForUserWishlist(users, nameTwo) {



// questions I need to be asking. How do I determine which users have visited a specific location?
// oh wait I know already that userHasVisitedParkOnWishlist gives us true/false for whether a user needs to
//be included in the new array. 
// so I'm using reduce to make an array then...
// let reduced = users.reduce((accumulator) => {
//   if (userHasVisitedParkOnWishlist(users, nameOne, nameTwo ))
//   accumulator.push(nameOne), []
// })
// console.log("reduced",reduced)
// return reduced

//my attempt at using reduce
  let arrayOfNameOnes = Object.keys(users).reduce((acc, nameOne) => {
    if(userHasVisitedParkOnWishlist(users, nameOne, nameTwo)){
      acc.push(nameOne);  
    }
    return acc;
  }, [])
  return arrayOfNameOnes;
}

// If banana is orange and monkey is ByteLengthQueuingStrategy
// therefore brown apple.module

// If banaa is orange
// If apple is red, and monkey os ablah
// therefore purple is AnimationPlaybackEvent.

// my attempt at not using reduce
// const result = []
// for (let i=0; i<users.length; i++){
//   const nameOne = users[i]
// if(userHasVisitedParkOnWishlist(users, nameOne, nameTwo)){
//   result.push(`${nameOne}`)
// }
// }
// return result
// }


// const people = [
//   { name: 'Alice', age: 21 },
//   { name: 'Max', age: 20 },
//   { name: 'Jane', age: 20 },
// ];

// function groupBy(objectArray, property) {
//   return objectArray.reduce((acc, obj) => {
//     const key = obj[property];
//     acc[key] ??= [];
//     acc[key].push(obj);
//     return acc;
//   }, {});
// }

// const groupedPeople = groupBy(people, 'age')
// // groupedPeople is:
// // {
// //   20: [
// //     { name: 'Max', age: 20 },
// //     { name: 'Jane', age: 20 }
// //   ],
// //   21: [{ name: 'Alice', age: 21 }]
// // 

// function groupBy(objectArray, property) {
//   return objectArray.reduce((acc, obj) => {
//     const key = obj[property];
//     acc[key] ??= [];
//     acc[key].push(obj);
//     return acc;
//   }, {});
// }

//  let parks = [ {park 1}, park 2, park 3]

//  function (parks, park) => (park) => loop through this parks.park.park


  
module.exports = {
  getParksByState,
  getWishlistParksForUser,
  getUsersForUserWishlist,
  userHasVisitedAllParksInState,
  userHasVisitedParkOnWishlist,
};



// let parks = []