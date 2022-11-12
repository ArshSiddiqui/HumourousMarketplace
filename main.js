// Generation of random, but negatively sloped data
const data = [];
const dates = [];

let max = 10000;
let idx = 0;
for (let i = 0; i < 100; i++) {
    data[idx] = i;
    idx++;
    data[idx] = Math.floor(Math.random() * max);
    idx++;
    max -= 99;

    dates[i] = i;
}
console.log(data);
console.log(dates);

JSC.Chart('graph', {
    series: [
        {
            points: [
                data
            ]
        }
    ]
});
