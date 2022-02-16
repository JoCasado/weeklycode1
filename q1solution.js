// 1) JavaScript:
// Write a function that retrieves the top 3 longest words of a newspaper headline and transforms them into hashtags. 
// If multiple words tie for the same length, retrieve the word that occurs first.

// Examples
// getHashTags("How the Avocado Became the Fruit of the Global Trade")
// --> ["#avocado", "#became", "#global"]

// getHashTags("Why You Will Probably Pay More for Your Christmas Tree This Year")
// --> ["#christmas", "#probably", "#will"]

// getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit")
// --> ["#surprise", "#parents", "#fruit"]

// getHashTags("Visualizing Science")
// --> ["#visualizing", "#science"]

function findLongestWord(str) {

   let strString = String(str);
    //1. Split the string into an array of strings with split method and sort it
    //We sort the string for better reading and to choose characters in order they were given
    let strSplit = strString.split(' ').sort(function(a, b) { return b.length - a.length; });;

    //2. Create the loop. If and FOR
    //In case our array has more than 3 characters, used slice method to take only 3
   if (strSplit.length > 3) {
      strSplit = strSplit.slice(0, 3)
  }
  //FOR loop
  //returns loop value strSplit[i] with # infront and sets it to lowercase
   for(let i = 0; i < strSplit.length; i++){
      strSplit[i] = "#" + strSplit[i].toLowerCase();
      
  }
   //3. Initiate a variable that will hold the length of the longest word
    let longestWord = strSplit;

    //4. Return the longest word
    return longestWord; // 
  }
   //5. Console.log the function with the array. ex:  console.log(findLongestWord("How the Avocado Became the Fruit of the Global Trade"))
  console.log(findLongestWord("How the Avocado Became the Fruit of the Global Trade"))
  console.log(findLongestWord("Why You Will Probably Pay More for Your Christmas Tree This Year"))
  console.log(findLongestWord("Hey Parents, Surprise, Fruit Juice Is Not Fruit"))
  console.log(findLongestWord("Visualizing Science"))
