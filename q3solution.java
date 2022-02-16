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
