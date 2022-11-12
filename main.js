// Generation of random, but negatively sloped data
const data = [];

let max = 10000;
for (let i = 0; i < 100; i++) {
    data[i] = Math.floor(Math.random() * max);
    max -= 99;
    console.log(max);
}
console.log(data);

JSC.Chart('graph', {
    type: 'horizontal column',
    series: [
        {
            points: [
                {x: 'Apples', y: 50},
                {x: 'Oranges', y: 42}
            ]
        }
    ]
});
