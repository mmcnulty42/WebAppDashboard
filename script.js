
const trafficCanvas = document.getElementById('traffic-chart');

let trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10",
        "11-17", "18-24", "25-31"],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 250],
        backgroundColor: 'rgba(116, 119, 191, .3)', borderWidth: 1,
    }]
};
let trafficOptions = {
    aspectRatio: 1, animation: { duration: 0 }, scales: { yAxes: [{ ticks: { beginAtZero: true } }] },
    legend: { display: false }


};
let trafficChart = new Chart(trafficCanvas, { type: 'line', data: trafficData, options: trafficOptions, maintainAspectRatio: false, responsive:true });
const dailyCanvas = document.getElementById("daily-chart");
const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"], datasets: [{
        label: '# of hits',
        data: [75, 115, 175, 125, 225, 200, 100], backgroundColor: '#7477BF', borderWidth: 1
    }]
};
const dailyOptions = { scales: { yAxes: [{ ticks: { beginAtZero: true } }] }, legend: { display: false } };
let dailyChart = new Chart(dailyCanvas, { type: 'bar', data: dailyData, options: dailyOptions, maintainAspectRatio: false, responsive:true });
const mobileCanvas = document.getElementById("mobile-chart");
const mobileData = {
    labels: ["Desktop", "Tablet", "Users"],
    datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: ['#7477BF', '#78CF82', '#51B6C8']
    }]

};
const mobileOptions = {
    legend: { position: 'right', labels: { boxWidth: 20, fontStyle: 'bold' } }
};
let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions, maintainAspectRatio: false, responsive:true

});
const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

send.addEventListener('click', () => {
    if (user.value === "" && message.value === "") {
        alert("Please fill out user and message fields before sending");
    }
    else if (user.value === "") { alert("Please fill out user field before sending"); }
    else if (message.value === "") { alert("Please fill out message field before sending"); }
    else { alert(`Message successfully sent to:${user.value}`); }
}
);