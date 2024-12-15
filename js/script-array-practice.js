//STEP 1

//let favoriteMovies = ['Encanto', 'Werewolves Within', 'Shawn of the Dead', 'Idiocracy', 'Tombstone']

//console.log(favoriteMovies[1]);

//STEP 2

//let movies = new Array(5)

//movies[0] = 'Encanto'
//movies[1] = 'Werewolves Within'
//movies[2] = 'Shaun of the Dead'
//movies[3] = 'Beetle Juice'
//movies[4] = 'Tombstone'

//console.log(movies[0]);

//STEP 3 

//let movies = new Array(5)

//movies[0] = 'Encanto'
//movies[1] = 'Werewolves Within'
//movies[2] = 'Shaun of the Dead'
//movies[3] = 'Enola Holmes'
//movies[4] = 'Beetle Juice'
//movies[5] = 'Tombstone'

//console.log(movies.length);
//console.log(movies);

//STEP 4

//let movies =  ['Encanto', 'Werewolves Within', 'Shaun of the Dead', 'Enola Holmes', 'Beetle Juice']

//delete movies[0]
//console.log(movies)

//STEP 5

//let movies = ['Encanto', 'Werewolves Within', 'Shaun of the Dead', 'Enola Holmes', 'Beetle Juice', 'Edward Scissorhands', 'A Quiet Place']

//for(let movie in movies) {
//    console.log(`${movies[movie]}`)
//}

//STEP 6

//let movies = ['Encanto', 'Werewolves Within', 'Shaun of the Dead', 'Enola Holmes', 'Beetle Juice', 'Edward Scissorhands', 'A Quiet Place']

//for(let movie of movies) {
//    console.log(`${movie}`)
//}

//STEP 7

//let movies = ['Encanto', 'Werewolves Within', 'Shaun of the Dead', 'Enola Holmes', 'Beetle Juice', 'Edward Scissorhands', 'A Quiet Place']

//movies.sort()

//for(let movie of movies) {
//    console.log(movie)
//}


//STEP 8

//movies = ['Encanto', 'Werewolves Within', 'Shaun of the Dead', 'Enola Holmes', 'Beetle Juice', 'Edward Scissorhands', 'A Quiet Place']; 

//let leastFavMovies = ['Sausage Party', 'Amityville Horror', 'Smile']

//console.log("") 
//console.log("Movies I like:") 
//console.log("") 
// for (let movie of movies) { 
//    console.log(movie) 
//} 

//console.log("") 
//console.log ("Movies I regret watching:")
//console.log("") 
//for (let movie of leastFavMovies) {
//    console.log(movie);
//} 

//STEP 9

//favMovies = ['Encanto', 'Werewolves Within', 'Shaun of the Dead', 'Enola Holmes', 'Beetle Juice', 'Edward Scissorhands', 'A Quiet Place'] 

//leastFavMovies = ['Sausage Party', 'Amityville Horror', 'Smile']

//let movies = favMovies.concat(leastFavMovies)

//movies.sort().reverse()
//console.log(movies)

//STEP 10

//favMovies = ['Encanto', 'Werewolves Within', 'Shaun of the Dead', 'Enola Holmes', 'Beetle Juice', 'Edward Scissorhands', 'A Quiet Place'] 

//leastFavMovies = ['Sausage Party', 'Amityville Horror', 'Smile']

//let movies = favMovies.concat(leastFavMovies)

//let newMovies = movies.pop()

//console.log(newMovies)

//STEP 11

//favMovies = ['Encanto', 'Werewolves Within', 'Shaun of the Dead', 'Enola Holmes', 'Beetle Juice', 'Edward Scissorhands', 'A Quiet Place'] 

//leastFavMovies = ['Sausage Party', 'Amityville Horror', 'Smile']

//let movies = favMovies.concat(leastFavMovies)

//let newMovies = movies.shift()

//console.log(newMovies)

//STEP 12 

//let favMovies = ['Encanto', 'Werewolves Within', 'Shaun of the Dead', 'Enola Holmes', 'Beetle Juice', 'Edward Scissorhands', 'A Quiet Place'] 

//let leastFavMovies = ['Sausage Party', 'Amityville Horror', 'Smile'] 

//let favReplacementMovies = ['A Walk in the Clouds', 'Die Hard'] 

//let movies = favMovies.concat(leastFavMovies) 

//let indicesToReplace = [] 
//movies.forEach((movie, index) => { 
//    if (leastFavMovies.includes(movie)) { 
//        indicesToReplace.push(index) 
//    } 
//})  

//indicesToReplace.forEach((index, i) => { 
//    if (i < favReplacementMovies.length) { 
//        movies[index] = favReplacementMovies[i] 
//    } 
//}) 

//console.log(movies);

//STEP 13

//let movies = [
//    ['Encanto', 1],
//    ['Werewolves Within', 2],
//    ['Enola Holmes', 3],
//    ['Wonka', 4],
//    ['Robots', 5]
//]
//let topMovies = movies.filter(item => typeof item[0] === 'string').map(item => item[0])

//topMovies.sort()
//console.log(topMovies)
//movies.forEach((movie, index) => { 
//console.log(`${movie[1]}. ${movie[0]}`) 
//})

//STEP 14

//let employees = ['Christine', 'Desiree', 'Jackson', 'Alexis', 'Dax', 'Malone']

//let showEmployee = (empList) => {
//    console.log("List of Employees:")
//    console.log('') 
//    empList.forEach(employee => {
//        console.log(employee)
//    })
//}

//showEmployee(employees)

//STEP 15

//function filterValues(arr) { 
//    return arr.filter(function(value) { 
//        return value !== false && value !== null && value !== 0 && value !== '' 
//    }) 
//} 
//console.log(filterValues([58, '', 'abcd', true, null, false, 0]))

//STEP 16

//function numChoice(arr) {

//let randomIndex = Math.floor(Math.random() * arr.length) 
 
//    return arr[randomIndex] } 
 
//let evenNums = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20] 

//let randomNum = numChoice(evenNums) 

//console.log(randomNum)

//STEP 17

//function largestNum(arr) {
//    return Math.max(...arr)
//} 

//let nums = [1, 4, 7, 13, 19, 27, 34, 44, 58, 62]

//let highestNum = largestNum(nums)

//console.log(highestNum)