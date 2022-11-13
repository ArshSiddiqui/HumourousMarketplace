randomizedGraph();

function randomizedGraph() {
    // Generation of random, but negatively sloped data
    const data = [];
    const dates = [];

    let max = 10000;
    let min = 7000;
    let idx = 0;
    for (let i = 0; i < 100; i++) {
        let difference = max - min;
        data[idx] = Math.floor(Math.random() * max) + min;
        idx++;
        max -= 120;
        min -= 69;

        dates[i] = i;
    }

    var combinedData = [];
    for (let i = 0; i < 100; i++) {
        combinedData[i] = {x:dates[i], y:data[i]};
    }
    console.log(combinedData);

    const currencies = ["United States Dollar", "Great Britain Pound", "Australia Dollar", "Euro", 
        "Switzerland Franc", "Japan Yen", "Angola Kwanza", "Algeria Dinar", "Afghanistan Afghani",
        "Aruba Florin", "Azerbaijan New Manat", "Bahamas Dollar", "Belarus Ruble", "Burundi Franc",
        "Cambodia Riel", "Denmark Krone", "East Caribbean Dollar", "Israel New Shekel", "Star Trek Currency",
        "Kenya Shilling", "Kenya Shilling", "Mozambique New Metical", "St Helena Pound", "Bottle Caps",
        "Tonga Pa'anga", "Monopoly Dollars", "Virgina Lotto Tickets", "New Jerset Lotto Tickets", "Bread", 
        "M and Ms", "Benjamins", "Dead Presidents"];
    let currenciesLength = currencies.length;
    let randCurrency = Math.floor(Math.random() * currenciesLength);

    new Chart("graph", {
        type: "line",
        data: {
            labels: dates,
            datasets: [{
                label: 'Market Value of the NFT over time',
                fill: false,
                borderColor: "rgba(199, 21, 21, 1)",
                pointRadius: 4,
                pointBackgroundColor: "rgba(0,0,0,1)",
                data: data
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: "Value of NFT (" + currencies[randCurrency] + ")"
                    }
                }],
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: "Time (seconds)"
                    }
                }]
            }
        }
    });
}

const imageInput = document.querySelector('#imageInput');

imageInput.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        const image = reader.result;
        document.querySelector("#image").style.backgroundImage = `url(${image})`;
    });
    reader.readAsDataURL(this.files[0]);
    randomizedGraph();
});


const subComments = ["Literally 1984. You know, George Orwell warned us about this...",
        "About as tragic as the Hindenberg :(",
        "Most disruptive thing since sliced bread.",
        "No more monkeys jumping on the bed."];
let subCommentLength = subComments.length;
let randSubComment = Math.floor(Math.random() * subCommentLength);
const subCommentP = document.getElementById("subComment");
subCommentP.textContent = subComments[randSubComment]