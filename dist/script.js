//screen.orientation.lock('landscape');
var Styles =['circle', 'cross','crossRot','rect','rectRounded','rectRot','star','triangle'];
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 14)];
    }
    return color;
}

var xMap = [" ", "Simple", "Continuous", "Perfect", "Perfect Continuous", " "];
var yMap = [' ', 'Future', 'Past', 'Present', ' '];

var mapDataPoint = function (xValue, yValue) {
    return {
        x: xMap.indexOf(xValue),
        y: yMap.indexOf(yValue)
    };
};

var IndexX;
var IndexY;

var ctx2 = document.getElementById("canvas2").getContext("2d");
var question_icon = new Image();

//$(window).on('resize', function() {
    if ($(window).width() < 1200) {
        question_icon.src = './img/qmMIN.svg';
    } else {
        question_icon.src = './img/qm.svg';
    }
//});

Chart.pluginService.register({
    afterUpdate: function(chart) {
        for (var ii = 0; ii < 12; ii++) {
            chart.config.data.datasets[0]._meta[0].data[ii]._model.pointStyle = question_icon;
        }
    }
});
var myLine2 = new Chart(ctx2, {

    type: 'line',
    data: {
        xLabels: [" ", "Simple", "Continuous", "Perfect", "Perfect Continuous", " "],
        yLabels: [' ', 'Present', 'Past', 'Future', ' '],
        datasets: [{
            //label: "My First dataset",
            data: [
                mapDataPoint("Simple", "Future"),
                mapDataPoint("Simple", "Past"),
                mapDataPoint("Simple", "Present"),

                mapDataPoint("Continuous", "Future"),
                mapDataPoint("Continuous", 'Past'),
                mapDataPoint("Continuous", 'Present'),

                mapDataPoint("Perfect", "Future"),
                mapDataPoint("Perfect", 'Past'),
                mapDataPoint("Perfect", 'Present'),

                mapDataPoint("Perfect Continuous", "Future"),
                mapDataPoint("Perfect Continuous", 'Past'),
                mapDataPoint("Perfect Continuous", 'Present'),

            ],
            pointRadius: 20,
            pointHoverRadius: 25,
            borderRadius: 15,
            pointStyle: Styles[Math.floor(Math.random() * 8)],
            fill: false,
            showLine: false,
            borderColor: getRandomColor(),
            backgroundColor: getRandomColor()
        }]
    },
    options: {
        tooltipEvents: ["click"],
        events: ["click"],
        responsive: true,
        tooltips: {
            mode: 'label',
            titleFontSize: 18,
            bodyFontSize: 16,
            footerFontSize:14,
            custom: function (tooltip) {
                if (!tooltip) return;
                // disable displaying the color box;
                tooltip.displayColors = false;
            },
            callbacks: {
                title: (items, data) =>{
                    IndexX = data.datasets[items[0].datasetIndex].data[items[0].index].x;
                    IndexY = data.datasets[items[0].datasetIndex].data[items[0].index].y;
                    return [yMap[IndexY]+ ' ' + xMap[IndexX],""/*,"Примеры:"*/]},
                //(item, data) => yMap[data.datasets[item.datasetIndex].data[item.index].y]
                label: (items, data) => {
                    var answer = "Пусто";
                    var MiniTitle = "Используется с:";
                    switch (Number(IndexX)) {
                        case 1:
                            switch (Number(IndexY)) {
                                case 1:
                                    answer = ["I will work", "He won't work", "Will he work?",""/*,MiniTitle*/];
                                    break;
                                case 2:
                                    answer = ["I worked", "He didn't work", "Did you work?",""/*,MiniTitle*/];
                                    break;
                                case 3:
                                    answer = ["I work","He works", "I don't work", "He doesn't work","Do you work?","Does he work?",""/*,MiniTitle*/];
                                    break;
                                default:
                                    answer = "Всё сломалось...";
                            }
                            break;
                        case 2:
                            switch (Number(IndexY)) {
                                case 1:
                                    answer = ["I will be working", "He won't be working","Will they be working?",""/*,MiniTitle*/];
                                    break;
                                case 2:
                                    answer = ["I was working ", "He were working","He wasn't working ", "We aren't working","Is he working?","Are we working?",""/*,MiniTitle*/];
                                    break;
                                case 3:
                                    answer = ["I am working", "He is working ","We are working", "I'm not working","He isn't working","We aren't working","Am I working?","Is he working?","Are we working?",""/*,MiniTitle*/];
                                    break;
                                default:
                                    answer = "Всё сломалось...";
                            }
                            break;
                        case 3:
                            switch (Number(IndexY)) {
                                case 1:
                                    answer = ["I will have worked","He won't have worked","Have they worked?",""/*,MiniTitle*/];
                                    break;
                                case 2:
                                    answer = ["I had worked","He hadn't worked", "Had they worked?",""/*,MiniTitle*/];
                                    break;
                                case 3:
                                    answer = ["I have worked", "He was worked","I haven't worked","He hasn't worked","Have you worked?","Has he worked?",""/*,MiniTitle*/];
                                    break;
                                default:
                                    answer = "Всё сломалось...";
                            }
                            break;
                        case 4:
                            switch (Number(IndexY)) {
                                case 1:
                                    answer = ["I will have been working","He won't have been working","Will they have been working?",""/*,MiniTitle*/];
                                    break;
                                case 2:
                                    answer = ["I had been working","He hadn't been working","Had they been working?",""/*,MiniTitle*/];
                                    break;
                                case 3:
                                    answer = ["I have been working","He has been working","I haven't been working","He hasn't been working","Have you been working?","Has he been working?",""/*,MiniTitle*/];
                                    break;
                                default:
                                    answer = "Всё сломалось...";
                            }
                            break;
                        default:
                            answer = "Всё сломалось...";
                    }
                    return answer;
                },
                footer: (item, data) => {
                    var answer = "Пусто";
                    switch (Number(IndexX)) {
                        case 1:
                            switch (Number(IndexY)) {
                                case 1:
                                    answer = ["will"];
                                    break;
                                case 2:
                                    answer = ["did"];
                                    break;
                                case 3:
                                    answer = ["do","does"];
                                    break;
                                default:
                                    answer = "Всё сломалось...";
                            }
                            break;
                        case 2:
                            switch (Number(IndexY)) {
                                case 1:
                                    answer = ["will be + ing"];
                                    break;
                                case 2:
                                    answer = ["was + ing","were + ing"];
                                    break;
                                case 3:
                                    answer = ["am + ing","is + ing","are + ing"];
                                    break;
                                default:
                                    answer = "Всё сломалось...";
                            }
                            break;
                        case 3:
                            switch (Number(IndexY)) {
                                case 1:
                                    answer = ["will have + (work)ed"];
                                    break;
                                case 2:
                                    answer = ["had + (work)ed"];
                                    break;
                                case 3:
                                    answer = ["have + (work)ed","has + (work)ed"];
                                    break;
                                default:
                                    answer = "Всё сломалось...";
                            }
                            break;
                        case 4:
                            switch (Number(IndexY)) {
                                case 1:
                                    answer = ["will have been + ing"];
                                    break;
                                case 2:
                                    answer = ["had been + + ing"];
                                    break;
                                case 3:
                                    answer = ["have been + ing","has been + ing"];
                                    break;
                                default:
                                    answer = "Всё сломалось...";
                            }
                            break;
                        default:
                            answer = "Всё сломалось...";
                    }
                    return answer;
                },
            }
        },
        title: {
            fontFamily: "'Impact', fantasy",
            fontSize: 30,
            fontStyle: "normal",
            display: true,
            text: 'Chart of times in english'
        },
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                
                type: 'linear',
                position: 'bottom',
                scaleLabel: {
                    fontFamily: "' Arial', sans-serif",
                    fontSize: 24,
                    fontStyle: "bold",
                    display: true,
                    labelString: 'КАК?'
                },
                ticks: {
                    fontFamily: "'Impact', fantasy",
                    fontSize: 20,
                    fontStyle: "normal",
                    min: 0,
                    max: xMap.length - 1,
                    callback: function (value) {
                        return xMap[value];
                    },
                },
            }],
            yAxes: [{
                scaleLabel: {
                    fontFamily: "' Arial', sans-serif",
                    fontSize: 24,
                    fontStyle: "bold",
                    display: true,
                    labelString: 'КОГДА?'
                },
                ticks: {
                    //minRotation : 90,
                    fontFamily: "'Impact', fantasy",
                    fontSize: 20,
                    fontStyle: "normal",
                    reverse: true,
                    min: 0,
                    max: yMap.length - 1,
                    callback: function (value) {
                        return yMap[value];
                    },
                },
            }]
        }
    }
});




