const number = 1.2365;
const output = Math.floor(number);
console.log(output);
//Math.floor
//Math.ceil
//Math.round

const random = Math.random();
console.log(random);
const between10 = random * 10;
const rounded = Math.round(between10);
console.log(between10);

const selected = []
for (let i = 0; i < 5; i++) {
    const random = Math.random() * 100;
    const picked = Math.round(random);
    console.log(selected);
    if (selected.indexOf(picked) == -1) {
        selected.push(picked);
    }
    else {
        console.log(selected, picked)
    }
}
console.log(selected);