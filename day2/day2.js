let fs = require('fs');


function part1() {
    let array = fs.readFileSync('datap1.txt').toString().split("\n").filter(item => item !== '');

    let total = 0;
    array.forEach(game => {
        let gameID = game.split(':')[0].split('').filter(item =>!isNaN(item)).join('');

        let isPossible = true;
        game.split(':')[1].split(';').forEach(reveal => reveal.split(',').forEach(color => {

            let number = color.split('').filter(item =>!isNaN(item)).join('');

            if (color.includes('green')) {
                if (number > 13) {
                    isPossible = false;
                }
            } else if(color.includes('red')) {
                if (number > 12) {
                    isPossible = false;
                }
            } else if(color.includes('blue')) {
                if (number > 14) {
                    isPossible = false;
                }
            }
        }));

        if (isPossible) {
            total += parseInt(gameID);
        }
    })
    console.log(total);
}


function part2() {
    let array = fs.readFileSync('datap1.txt').toString().split("\n").filter(item => item !== '');

    let total = 0;
    array.forEach(game => {
        let red = 0;
        let green = 0;
        let blue = 0;

        game.split(':')[1].split(';').forEach(reveal => reveal.split(',').forEach(color => {

            let number = color.split('').filter(item =>!isNaN(item)).join('');

            if (color.includes('green')) {
                if (number > green) {
                    green = parseInt(number)
                }
            } else if(color.includes('red')) {
                if (number > red) {
                    red = parseInt(number)
                }
            } else if(color.includes('blue')) {
                if (number > blue) {
                    blue = parseInt(number)
                }
            }
        }));

        let power = green * red * blue;
        total += power;
    });
    console.log(total);
}

part1();
part2();
