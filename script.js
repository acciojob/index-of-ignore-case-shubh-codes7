function indexOfIgnoreCase(s1, s2) {
	return s1.search(new RegExp(s2, 'i'))
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:"); 
alert(indexOfIgnoreCase(s1, s2)); 
