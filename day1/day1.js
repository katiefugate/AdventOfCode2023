let fs = require('fs');


function part1() {
    let array = fs.readFileSync('datap1.txt').toString().split("\n");
    let data = array.filter(item => item !== '');

    let total = 0;
    data.forEach(line => {
        let numbers = line.split('').filter(item => !isNaN(item)).join('');
        const firstLast = numbers[0] + numbers[numbers.length - 1];
        total += parseInt(firstLast);
    });

    console.log(total);
}



part1();



