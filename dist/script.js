//screen.orientation.lock('landscape');
let Styles = ['circle', 'cross', 'crossRot', 'rect', 'rectRounded', 'rectRot', 'star', 'triangle'];
let time0 = ["Simple","(факты)"];
let time1 = ["Continuous","(конкретный","момент)"];
let time2 = ["Perfect","(результат)"];
let time3 = ["Perfect Continuous","(длительность","c прошлого","по настоящее)"];
let time4 = "Future";
let time5 = "Past";
let time6 = "Present";

let time11 = ["Simple","(факты)"];
let xMap = [" ", time0, time1, time2, time3, " "];
let yMap = [' ', time4, time5, time6, ' '];

let mapDataPoint = function (xValue, yValue) {
    return {
        x: xMap.indexOf(xValue),
        y: yMap.indexOf(yValue)
    };
};

let IndexX;
let IndexY;

let ChartTimes = document.getElementById("canvas").getContext("2d");
let question_icon = new Image();

//$(window).on('resize', function() {
if ($(window).width() < 1200) {
    question_icon.src = './img/qmMIN.svg';
} else {
    question_icon.src = './img/qm.svg';
}
//});

Chart.pluginService.register({
    afterUpdate: function (chart) {
        for (let ii = 0; ii < 12; ii++) {
            chart.config.data.datasets[0]._meta[0].data[ii]._model.pointStyle = question_icon;
        }
    }
});

let config = {

    type: 'line',
    data: {
        xLabels: [" ", time0, time1, time2, time3, " "],
        yLabels: [' ', time4, time5, time6, ' '],
        datasets: [{
            //label: "My First dataset",
            data: [
                mapDataPoint(time0, time4),
                mapDataPoint(time0, time5),
                mapDataPoint(time0, time6),

                mapDataPoint(time1, time4),
                mapDataPoint(time1, time5),
                mapDataPoint(time1, time6),

                mapDataPoint(time2, time4),
                mapDataPoint(time2, time5),
                mapDataPoint(time2, time6),

                mapDataPoint(time3, time4),
                mapDataPoint(time3, time5),
                mapDataPoint(time3, time6),

            ],
            pointRadius: 66,
            pointHoverRadius: 66,
            radius: 66,
            pointStyle: Styles[Math.floor(Math.random() * 8)],
            fill: false,
            showLine: false,
        }]
    },
    options: {
        tooltipEvents: ["click"],
        events: ["click"],
        responsive: true,
        tooltips: {
            backgroundColor: '#FFFFcc',
            mode: 'label',
            titleFontSize: 30,
            titleFontColor: '#66ff66',
            titleMarginBottom: 11,
            titleFontStyle: 'bold',
            bodyFontSize: 30,
            bodyFontColor: '#ff66ff',
            bodyFontStyle: 'bold',
            footerFontSize: 30,
            footerFontColor: '#3399ff',
            footerMarginTop: 11,
            footerFontStyle: 'bold',
            borderColor: 'rgba(0,0,0,0.9)',

            custom: function (tooltip) {
                if (!tooltip) return;
                // disable displaying the color box;
                tooltip.displayColors = false;
            },
            callbacks: {
                title: (items, data) => {
                    IndexX = data.datasets[items[0].datasetIndex].data[items[0].index].x;
                    IndexY = data.datasets[items[0].datasetIndex].data[items[0].index].y;
                    let answer = "Пусто";
                    switch (Number(IndexX)) {
                        case 1:
                            switch (Number(IndexY)) {
                                case 1:
                                    answer = ["I will work"];
                                    break;
                                case 2:
                                    answer = ["I worked"];
                                    break;
                                case 3:
                                    answer = ["I work", "He works"];
                                    break;
                                default:
                                    answer = "Всё сломалось...";
                            }
                            break;
                        case 2:
                            switch (Number(IndexY)) {
                                case 1:
                                    answer = ["I will be working"];
                                    break;
                                case 2:
                                    answer = ["I was working ", "We were working"];
                                    break;
                                case 3:
                                    answer = ["I am working", "He is working ", "They are working"];
                                    break;
                                default:
                                    answer = "Всё сломалось...";
                            }
                            break;
                        case 3:
                            switch (Number(IndexY)) {
                                case 1:
                                    answer = ["I will have worked/done"];
                                    break;
                                case 2:
                                    answer = ["I had worked/done"];
                                    break;
                                case 3:
                                    answer = ["I have worked/done", "He was worked/done"];
                                    break;
                                default:
                                    answer = "Всё сломалось...";
                            }
                            break;
                        case 4:
                            switch (Number(IndexY)) {
                                case 1:
                                    answer = ["I will have been working"];
                                    break;
                                case 2:
                                    answer = ["I had been working"];
                                    break;
                                case 3:
                                    answer = ["I have been working", "He has been working"];
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
                //(item, data) => yMap[data.datasets[item.datasetIndex].data[item.index].y]
                label: () => {
                    let answer = "Пусто";
                    switch (Number(IndexX)) {
                        case 1:
                            switch (Number(IndexY)) {
                                case 1:
                                    answer = ["He won't work"];
                                    break;
                                case 2:
                                    answer = ["He didn't work"];
                                    break;
                                case 3:
                                    answer = [ "I don't work", "He doesn't work"];
                                    break;
                                default:
                                    answer = "Всё сломалось...";
                            }
                            break;
                        case 2:
                            switch (Number(IndexY)) {
                                case 1:
                                    answer = ["He won't be working"];
                                    break;
                                case 2:
                                    answer = ["He wasn't working ","We weren't working"];
                                    break;
                                case 3:
                                    answer = ["I'm not working", "He isn't working", "They aren't working"];
                                    break;
                                default:
                                    answer = "Всё сломалось...";
                            }
                            break;
                        case 3:
                            switch (Number(IndexY)) {
                                case 1:
                                    answer = ["He won't have worked/done"];
                                    break;
                                case 2:
                                    answer = ["He hadn't worked/done"];
                                    break;
                                case 3:
                                    answer = ["I haven't worked/done", "He hasn't worked/done"];
                                    break;
                                default:
                                    answer = "Всё сломалось...";
                            }
                            break;
                        case 4:
                            switch (Number(IndexY)) {
                                case 1:
                                    answer = ["He won't have been working"];
                                    break;
                                case 2:
                                    answer = ["He hadn't been working"];
                                    break;
                                case 3:
                                    answer = ["I haven't been working", "He hasn't been working"];
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
                footer: () => {
                    let answer = "Пусто";
                    switch (Number(IndexX)) {
                        case 1:
                            switch (Number(IndexY)) {
                                case 1:
                                    answer = [ "Will he work?","(Yes, he will/No, he won't)"];
                                    break;
                                case 2:
                                    answer = ["Did you work?","(Yes, I did/No, I didn't)"];
                                    break;
                                case 3:
                                    answer = [ "Do you work?","(Yes, I do/No, I don't)", "Does he work?","(Yes, he does/No, he doesn't)"];
                                    break;
                                default:
                                    answer = "Всё сломалось...";
                            }
                            break;
                        case 2:
                            switch (Number(IndexY)) {
                                case 1:
                                    answer = ["Will they be working?","(Yes, they will/No, they won't)"];
                                    break;
                                case 2:
                                    answer = ["Was he working?","(Yes, he was/No, he wasn't)","Were they working?","(Yes, they were/No they weren't)"];
                                    break;
                                case 3:
                                    answer = ["Am I working?","(Yes, I am/No, I'm not)", "Is he working?","(Yes, he is/No he isn't)", "Are we working?","(Yes they are/No they aren't)"];
                                    break;
                                default:
                                    answer = "Всё сломалось...";
                            }
                            break;
                        case 3:
                            switch (Number(IndexY)) {
                                case 1:
                                    answer = ["Will they have worked/done?","(Yes, they will/No, they won't)"];
                                    break;
                                case 2:
                                    answer = ["Had they worked/done?","(Yes, they had/No they hadn't)"];
                                    break;
                                case 3:
                                    answer = ["Have they worked/done?","(Yes, they have/No, they haven't)", "Has he worked?","(Yes, he has/No, he hasn't)"];
                                    break;
                                default:
                                    answer = "Всё сломалось...";
                            }
                            break;
                        case 4:
                            switch (Number(IndexY)) {
                                case 1:
                                    answer = ["Will they have been working?","(Yes, they will/No, they won't)"];
                                    break;
                                case 2:
                                    answer = ["Had they been working?","(Yes, they had/No, they hadn't)"];
                                    break;
                                case 3:
                                    answer = ["Have they been working?","(Yes, they have/No, they haven't)", "Has he been working?", "(Yes, he has/No, he hasn't)"];
                                    break;
                                default:
                                    answer = "Всё сломалось...";
                            }
                            break;
                        default:
                            answer = "Всё сломалось...";
                    }
                    return answer;


                   /* let answer = "Пусто";
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
                                    answer = ["do", "does"];
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
                                    answer = ["was + ing", "were + ing"];
                                    break;
                                case 3:
                                    answer = ["am + ing", "is + ing", "are + ing"];
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
                                    answer = ["have + (work)ed", "has + (work)ed"];
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
                                    answer = ["had been + ing"];
                                    break;
                                case 3:
                                    answer = ["have been + ing", "has been + ing"];
                                    break;
                                default:
                                    answer = "Всё сломалось...";
                            }
                            break;
                        default:
                            answer = "Всё сломалось...";
                    }
                    return answer;*/
                },
            }
        },
        title: {
            fontFamily: "Rubik",
            fontSize: 30,
            //fontStyle: "normal",
            display: true,
            text: ''
        },
        legend: {
            display: false
        },
        scales: {
            xAxes: [{

                type: 'linear',
                position: 'bottom',
                scaleLabel: {
                    fontFamily: "Rubik",
                    fontSize: 24,
                    fontStyle: "italic",
                    display: true,
                    labelString: 'КАК?'
                },
                ticks: {
                    fontFamily: "Rubik",
                    fontSize: 20,
                    //fontStyle: "normal",
                    min: 0,
                    max: xMap.length - 1,
                    callback: function (value) {
                        return xMap[value];
                    },
                },
            }],
            yAxes: [{
                scaleLabel: {
                    fontFamily: "Rubik",
                    fontSize: 24,
                    //fontStyle: "bold",
                    display: true,
                    labelString: 'КОГДА?'
                },
                ticks: {
                    //minRotation : 90,
                    fontFamily: "Rubik",
                    //fontFamily: "'Rubik', sans-serif",
                    fontSize: 20,
                    fontStyle: "italic",
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
}
let myChart = new Chart(ChartTimes, config);


Chart.defaults.global.responsive = true;
Chart.defaults.global.hover.mode = 'single';
document.getElementById("canvas").onclick = function (evt) {
    let activePoint = myChart.lastActive[0];
    if (activePoint !== undefined) {
        let index = activePoint._index;
        //alert("index "+ index);
        let TimeDiv = document.getElementById("t" + index);
        if ($(TimeDiv).css('visibility') == 'hidden') {
            TimeDiv.style.visibility = 'visible';
        } else {
            TimeDiv.style.visibility = 'hidden';
        }

    }
};
