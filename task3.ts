let personName: string = "john doe";
console.log("Upper case:", personName.toUpperCase());
console.log("Lower case:", personName.toLowerCase());
console.log("Title case:", personName.replace(/\b\w/g, match => match.toUpperCase()));