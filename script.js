function firstNonRepeatedChar(str) {
 // Write your code here
	let map=new Map();
 
	for(let ch of str){
		
		map.set(ch,(map.get(ch) || 0)+1);
	} 
 
		for(let ch of str){
		
		if(map.get(ch)==1){
			return ch; 
			//console.log(ch);
			//return;
		}
	}
		return null;
	
//console.log("null");
	 
}
//let str="aabbcdd";
//firstNonRepeatedChar(str);
 const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
