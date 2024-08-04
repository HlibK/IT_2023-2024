class Chart {
    constructor(height, background, hasBorder) {
        this.height = height;
        this.background = background;
        this.hasBorder = hasBorder;
    }
}

const chartContent = new Chart("300px", "500px", "white", true);
const chartContent2 = new Chart("280px", "green", true);
const chartContent3 = new Chart("250px", "purple", true);
const chartContent4 = new Chart("225px", "blue", true);
const chartContent5 = new Chart("210px", "red", true);
const chartContent6 = new Chart("190px", "orange", true);
const chartContent7 = new Chart("180px", "yellow", true);
const chartContent8 = new Chart("165px", "coral", true);
const chartContent9 = new Chart("150px", "gold", true);
const chartContent10 = new Chart("145px", "pink", true);
const chartContent11 = new Chart("130px", "brown", true);
const chartContent12 = new Chart("110px", "black", true);

function renderChart(chartData) {
    const chartsContainer = document.querySelector(".charts-container");
    const chart = document.createElement("div");
    chart.classList.add("chart");
    chart.style.height = chartData.height;
    chart.style.backgroundColor = chartData.background;
    if (chartData.hasBorder) {
        chart.style.border = "2px solid black";
    }
    chartsContainer.appendChild(chart);
}

renderChart(chartContent);
renderChart(chartContent2);
renderChart(chartContent3);
renderChart(chartContent4);
renderChart(chartContent5);
renderChart(chartContent6);
renderChart(chartContent7);
renderChart(chartContent8);
renderChart(chartContent9);
renderChart(chartContent10);
renderChart(chartContent11);
renderChart(chartContent12);

