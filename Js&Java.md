# weeklycode1
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
  
  ///////////////////////////////////////////////////////////////////////
  //3) Java:
//
//Create a function that takes the memory size (ms is a string type) as an argument and returns the actual memory size.
//
//Examples
//actualMemorySize("32GB") --> "29.76GB"
//
//actualMemorySize("2GB") --> "1.86GB"
//
//actualMemorySize("512MB") --> "476MB"
//
//Notes
//-The actual storage loss on a USB device is 7% of the overall memory size!
//-If the actual memory size was greater than 1 GB, round your result to two decimal places.
//-If the memory size after adjustment is smaller then 1 GB, return the result in MB.

package weeklycodeone.question;

public class MemorySize {
	 
	 public static String actualMemorySize(String m) {
		 
		 	
		 String actualSize = "";
		 
	     String values = m.substring(0, m.length() - 2);
	        
	     double size = Double.parseDouble(values);
		
	     size = size * 0.93;

			if(size < 1) {
				
				size = size * 1000;
				
				values = "MB";
				
			
			} else {
		
				values = "GB";
				
				
		}
		System.out.println(size + values);
			
			return actualSize.toUpperCase();
	 }
	 
	 public static void main(String[] args) {
		 
	        System.out.println(actualMemorySize("32GB"));
	        System.out.println(actualMemorySize("2GB"));
	        System.out.println(actualMemorySize("512GB"));
	        System.out.println(actualMemorySize("1GB"));
	    }

}

