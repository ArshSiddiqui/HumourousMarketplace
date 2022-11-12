// Generation of random, but negatively sloped data
const data = [];
const dates = [];

let max = 10000;
let idx = 0;
for (let i = 0; i < 100; i++) {
    data[idx] = Math.floor(Math.random() * max);
    idx++;
    max -= 99;

    dates[i] = i;
}

var combinedData = [];
for (let i = 0; i < 100; i++) {
    combinedData[i] = {x:dates[i], y:data[i]};
}
console.log(combinedData);

var chart = new Chart("graph", {
    type: "line",
    data: {
        datasets: [{
            data: data
        }]
    },
    options: {}
});
