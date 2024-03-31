"use strict";


for(let i = 5; i <= 10; i++){
	console.log(i);
}

for( let i = 20; i >= 10; i--){
	if( i === 13) {
		break;
	}
}

for( let i = 20; i >= 10; i--){
	if( i === 13) {
		break;
	}
	console.log(i);
}

for (let i = 2; i < 11 ; i++){
	if( i % 2 === 1) {
		continue;
	}
	console.log(i);
}

for (let i = 2; i <= 16; i++) {
	if (i % 2 === 0) {
		continue;
	} else {
		console.log(i);
	}
}

let num = 2;

while ( num < 16) {
	num++;
	if (num % 2 === 0) {
		continue;
	} else {
		console.log(num);
	}
}