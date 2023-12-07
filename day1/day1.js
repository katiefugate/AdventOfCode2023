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

function part2() {
    let array = fs.readFileSync('datap2.txt').toString().split("\n");
    let data = array.filter(item => item !== '');
    let spelledNumbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let total = 0;
    data.forEach(line => {
        let firstIndex = line.split('').findIndex((item) => parseInt(item));
        let lastIndex = line.split('').findLastIndex((item) => parseInt(item));
        let first = line[firstIndex];
        let last = line[lastIndex];
        spelledNumbers.forEach((number, i) => {
            let firstPosition = line.search(number);
            let lastPosition = line.lastIndexOf(number);
            if (firstPosition < firstIndex && firstPosition >= 0 || firstIndex === -1) {
                firstIndex = firstPosition;
                first = i + 1
            } else if (firstPosition > lastIndex) {
                lastIndex = firstPosition;
                last = i + 1
            }
            if(lastPosition > lastIndex) {
                lastIndex = lastPosition;
                last = i + 1
            }
        });

        const firstLast = first.toString() + last.toString();
        total += parseInt(firstLast);
    });

    console.log(total)
}


part1();
part2();



