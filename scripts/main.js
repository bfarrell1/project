Highcharts.chart('teamChart1', {
    chart: {
        type: 'column',
        animation: false
    },
    title: {
        text: 'Regular Season Points'
    },
    subtitle: {
        text: 'Source: <a href="http://www.nhl.com/standings"> http://www.nhl.com/standings </a>'
    },
    xAxis: {
        categories: ['2010 Blackhawks', '2011 Bruins', '2012 Kings', '2013 Blackhawks', '2014 Kings', '2015 Blackhawks', '2016 Penguins', '2017 Penguins', '2018 Capitals', '2019 Blues']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Points'
        },
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: ( // theme
                    Highcharts.defaultOptions.title.style &&
                    Highcharts.defaultOptions.title.style.color
                ) || 'gray'
            }
        }
    },
    legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true
            }
        }
    },
    series: [{
        name: 'Points from wins',
        data: [104, 92, 80, 72, 92, 96, 96, 100, 98, 90]
    },  {
        name: 'Points from OT losses',
        data: [8, 11, 15, 5, 8, 6, 8, 11, 7, 9]
    }]
});

var categories = [
'2010 Blackhawks', '2011 Bruins', '2012 Kings', '2013 Blackhawks', '2014 Kings', '2015 Blackhawks', '2016 Penguins', '2017 Penguins', '2018 Capitals', '2019 Blues'
];

Highcharts.chart('teamChart2', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Goals scored and allowed'
    },
    subtitle: {
        text: 'Source: <a href="http://www.nhl.com/stats/team"> http://www.nhl.com/stats/team </a>'
    },
    accessibility: {
        point: {
            descriptionFormatter: function (point) {
                var index = point.index + 1,
                    category = point.category,
                    val = Math.abs(point.y),
                    series = point.series.name;

                return index + ', Age ' + category + ', ' + val + '%. ' + series + '.';
            }
        }
    },
    xAxis: [{
        categories: categories,
        reversed: false,
        labels: {
            step: 1
        },
        accessibility: {
            description: 'Team'
        }
    }, { // mirror axis on right side
        opposite: true,
        reversed: false,
        categories: categories,
        linkedTo: 0,
        labels: {
            step: 1
        },
        accessibility: {
            description: 'Team'
        }
    }],
    yAxis: {
    		max: 300,
        title: {
            text: null
        },
        labels: {
            formatter: function () {
                return Math.abs(this.value);
            }
        },
        accessibility: {
            description: 'Goals',
            rangeDescription: 'Range: 0 to 400'
        }
    },

    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },

    tooltip: {
        formatter: function () {
            return '<b>' + this.series.name + ', ' + this.point.category + '</b><br/>' +
                'Goals: ' + Highcharts.numberFormat(Math.abs(this.point.y), 1)
                }
             },


    series: [{
        name: 'Goals Against',
        data: [
        -203, -189, -170, -97, -168, -186, -199, -229, -238, -220
        ]
    }, {
        name: 'Goals scored',
        data: [
          262, 244, 188, 149, 198, 220, 241, 278, 256, 244
        ]
    }]
});
Highcharts.chart('teamChart3', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Save Percentage'
    },
    subtitle: {
        text: 'Source: www.naturalstattrick.com'
    },
    xAxis: {
        categories: [
            '2010 Blackhawks', '2011 Bruins', '2012 Kings', '2013 Blackhawks', '2014 Kings', '2015 Blackhawks', '2016 Penguins', '2017 Penguins', '2018 Capitals', '2019 Blues'],
        crosshair: true
    },
    yAxis: {
        min: .880,
        max: .935,
        title: {
            text: 'Save percentage'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.3f}%</td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: '5v5',
        data: [.905, .941, .929, .923, .935, .935, .930, .927, .925, .921]

    }, {
        name: 'All situations',
        data: [.901, .930, .924, .930, .922, .925, .918, .914, .909, .906
      ]
  }]
});
Highcharts.chart('teamChart4', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Corsi-For Percentage (CF%)'
    },
    subtitle: {
        text: 'Source: NaturalStatTrick.com'
    },
    xAxis: {
        categories: [
'2010 Blackhawks', '2011 Bruins', '2012 Kings', '2013 Blackhawks', '2014 Kings', '2015 Blackhawks', '2016 Penguins', '2017 Penguins', '2018 Capitals', '2019 Blues'
        ],
        crosshair: true
    },
    yAxis: {
        min: 45,
        title: {
            text: 'Corsi-For Percentage'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f}%</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Corsi-For Percentage',
        data: [56.54, 50.71, 54.74, 54.14, 56.82, 53.60, 52.72, 50.14, 47.96, 51.50]

    }]
});
Highcharts.chart('teamChart5', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Expected-Goals-For Percentage (xGF%)'
    },
    subtitle: {
        text: 'Source: NaturalStatTrick.com'
    },
    xAxis: {
        categories: [
'2010 Blackhawks', '2011 Bruins', '2012 Kings', '2013 Blackhawks', '2014 Kings', '2015 Blackhawks', '2016 Penguins', '2017 Penguins', '2018 Capitals', '2019 Blues'
        ],
        crosshair: true
    },
    yAxis: {
        min: 45,
        max: 65,
        title: {
            text: 'Corsi-For Percentage'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f}%</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Expected-Goals-For Percentage',
        data: [56.63, 48.96, 52.57, 61.14, 55.89, 50.79, 55.68, 52.86, 47.10, 53.58]

    }]
});
Highcharts.chart('teamChart6', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Shooting Percentage at 5v5 and All Situations'
    },
    subtitle: {
        text: 'Source: www.naturalstattrick.com'
    },
    xAxis: {
        categories: [
            '2010 Blackhawks', '2011 Bruins', '2012 Kings', '2013 Blackhawks', '2014 Kings', '2015 Blackhawks', '2016 Penguins', '2017 Penguins', '2018 Capitals', '2019 Blues'],
        crosshair: true
    },
    yAxis: {
        title: {
            text: 'Shooting percentage'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.3f}%</td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: '5v5',
        data: [8.31, 8.29, 6.03, 9.08, 6.60, 6.86, 7.53, 8.56, 9.19, 8.10
        ]

    }, {
        name: 'All situations',
        data: [9.36, 9.05, 7.49, 9.97, 7.63, 7.92, 8.85, 10.11, 10.76, 9.37
      ]
  }]
});

let chart1 = document.getElementById("chart1");
let chart2 = document.getElementById("chart2");
let chart3 = document.getElementById("chart3");
let chart4 = document.getElementById("chart4");
let chart5 = document.getElementById("chart5");
let chart6 = document.getElementById("chart6");
chart2.style.display = "none";
chart3.style.display = "none";
chart4.style.display = "none";
chart5.style.display = "none";
chart6.style.display = "none";

let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let button5 = document.getElementById("button5");
let button6 = document.getElementById("button6");
let previous1 = document.getElementById("previous1")
let previous2 = document.getElementById("previous2")
let previous3 = document.getElementById("previous3")
let previous4 = document.getElementById("previous4")
let previous5 = document.getElementById("previous5")
let previous6 = document.getElementById("previous6")

// button1.onclick = chartChange1();


function chartChange1() {
  chart1.style.display = "none";
  chart2.style.display = "block";
}
// button1.onclick = chartChange1();

function chartChange2() {
  chart2.style.display = "none";
  chart3.style.display = "block";
}
function chartChange3() {
  chart3.style.display = "none";
  chart4.style.display = "block";
}
function chartChange4() {
  chart4.style.display = "none";
  chart5.style.display = "block";
}
function chartChange5() {
  chart5.style.display = "none";
  chart6.style.display = "block";
}
function chartChange6() {
  chart6.style.display = "none";
  chart1.style.display = "block";
}
function goBack1() {
  chart1.style.display = "none"
  chart6.style.display = "block"
}
function goBack2() {
  chart6.style.display = "none"
  chart5.style.display = "block"
}
function goBack3() {
  chart5.style.display = "none"
  chart4.style.display = "block"
}
function goBack4() {
  chart4.style.display = "none"
  chart3.style.display = "block"
}
function goBack5() {
  chart3.style.display = "none"
  chart2.style.display = "block"
}
function goBack6() {
  chart2.style.display = "none"
  chart1.style.display = "block"
}

// button2.onclick = chartChange2();
// button3.onclick = chartChange3();
// button4.onclick = chartChange4();
// button5.onclick = chartChange5();
// button6.onclick = chartChange6();


Highcharts.chart('10Hawks1', {
    chart: {
        type: 'column'
    },
    title: {
        text: '2009-10 Blackhawks Point Totals',
        subtitle: 'Source: www.hockeyreference.com',
    },
    xAxis: {
        categories: ['Patrick Kane', 'Duncan Keith', 'Jonathan Toews', 'Patrick Sharp', 'Marian Hossa', 'Kris Versteeg', 'Troy Brouwer', 'Andrew Ladd', 'Brian Campbell', 'Dustin Byfuglien', 'Brent Seabrook', 'John Madden', 'Tomas Kopecky', 'Colin Fraser', 'Niklas Hjalmarsson', 'Ben Eager', 'Dave Bolland', 'Cam Barker', 'Jordan Hendry', 'Brent Sopel']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Total points'
        },
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: ( // theme
                    Highcharts.defaultOptions.title.style &&
                    Highcharts.defaultOptions.title.style.color
                ) || 'gray'
            }
        }
    },
    legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Points: {point.stackTotal}'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true
            }
        }
    },
    series: [{
        name: 'Assists',
        data: [58, 55, 43, 41, 27, 24, 18, 21, 31, 17, 26, 13, 11, 12, 15, 9, 10, 10, 6, 7]},
        {
        name: 'Goals',
        data: [30, 14, 25, 25, 24, 20, 22, 17, 7, 17, 4, 10, 10, 7, 2, 7, 6, 4, 2, 1]
    }]
    });
    Highcharts.chart('10Hawks2', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Road to the Stanley Cup'
    },
    xAxis: {
        categories: ['Nashville', 'Vancouver', 'San Jose', 'Philadelphia']
    },
    yAxis: {
      tickInterval: 1,
      title: {
        text: 'Margin of victory'
        }
},
    credits: {
        enabled: false
    },
    series: [{
        name: 'Game 1',
        data: [-3, -4, 1, 1]
    }, {
        name: 'Game 2',
        data: [2, 2, 2, 1]
    }, {
        name: 'Game 3',
        data: [-3, 3, 1, -1]
    }, {
        name: 'Game 4',
        data: [3, 3, 2, -2]
    },
    {
        name: 'Game 5 (if needed)',
        data: [1, -3, 0, 3]
    },{
        name: 'Game 6 (if needed)',
        data: [2, 4, 0, 1]
    },
]
});
Highcharts.chart('10Hawks3', {

    chart: {
        polar: true,
        type: 'line'
    },

    accessibility: {
        description: 'This chart shows where the Blackhawks ranked in several categories relative to the rest of the league. The further away from center the better.'
    },

    title: {
        text: '2009-10 Chicago Blackhawks compared to rest of the league',
        subtitle: 'Source: Natural Stat Trick and nhl.com,'


    },

    pane: {
        size: '100%'
    },

    xAxis: {
        categories: ['Goals scored', 'Goals allowed', 'Save percentage', 'PP%', 'PK%', 'CF%', 'xGF%'],
        tickmarkPlacement: 'on',
        lineWidth: 0
    },

    yAxis: {
    		reversed: true,
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        tickInterval: 10,
        max: 30,
        min: 0
    },

    tooltip: {
        shared: true,
        pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
    },

    legend: {
        align: 'right',
        verticalAlign: 'middle'
    },

    series: [{
        name: 'League rank',
        data: [3, 5, 24, 16, 4, 1, 1],
        pointPlacement: 'on'
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    align: 'center',
                    verticalAlign: 'bottom'
                },
                pane: {
                    size: '70%'
                }
            }
        }]
    }

});
let button7 = document.getElementById("BlackhawksShow")
let team1 = document.getElementById("Hawks2010")
team1.style.display = "none"
function BlackhawksButton(){
  if (team1.style.display == "block"){
    team1.style.display = "none"
  }
  else {team1.style.display = "block"
}
}
let Hawks1 = document.getElementById("10HawksChart1")
let Hawks2 = document.getElementById("10HawksChart2")
let Hawks3 = document.getElementById("10HawksChart3")
let HawksButton1 = document.getElementById("HawksButton1")
let HawksButton2 = document.getElementById("HawksButton2")
let HawksButton3 = document.getElementById("HawksButton3")
Hawks2.style.display = "none"
Hawks3.style.display = "none"
function BlackhawksButton2 (){
  Hawks2.style.display = "block"
  Hawks1.style.display = "none"
}
function BlackhawksButton3 (){
  Hawks3.style.display = "block"
  Hawks2.style.display = "none"
}
function BlackhawksButton4 (){
  Hawks1.style.display = "block"
  Hawks3.style.display = "none"
}

Highcharts.chart('bruins1', {
    chart: {
        type: 'column'
    },
    title: {
        text: '2010-11 Bruins Point Totals',
        subtitle: 'Source: www.hockeyreference.com',
    },
    xAxis: {
        categories: ['Milan Lucic', 'David Krejci', 'Patrice Bergeron', 'Nathan Horton', 'Mark Recchi', 'Zdeno Chara', 'Michael Ryder', 'Brad Marchand', 'Dennis Seidenberg', 'Gregory Campbell', 'Blake Wheeler', 'Tyler Seguin', 'Shawn Thornton', 'Johnny Boychuk', 'Andrew Ference', 'Adam McQuaid', 'Daniel Paille', 'Steven Kampfer', 'Marc Savard', 'Tomas Kaberle', 'Rich Peverley', 'Jordan Caron', 'Mark Stuart', 'Chris Kelly', 'Matt Hunwick']
    },
    yAxis: {
        min: 0,
        max: 70,
        tickInterval: 10,
        title: {
            text: 'Total points'
        },
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: ( // theme
                    Highcharts.defaultOptions.title.style &&
                    Highcharts.defaultOptions.title.style.color
                ) || 'gray'
            }
        }
    },
    legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Points: {point.stackTotal}'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true
            }
        }
    },
    series: [{
        name: 'Assists',
        data: [32, 49, 35, 27, 34, 30, 23, 20, 25, 16, 16, 11, 10, 13, 12, 12, 7, 5, 8, 8, 3, 4, 4, 3, 2]},
        {
        name: 'Goals',
        data: [30, 13, 22, 26, 14, 14, 18, 21, 7, 13, 11, 11, 10, 3, 3, 3, 6, 5, 2, 1, 4, 3, 1, 2, 1]
    }]
    });
    Highcharts.chart('bruins2', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Road to the Stanley Cup'
    },
    xAxis: {
        categories: ['Montreal', 'Philadelphia', 'Tampa Bay', 'Vancouver']
    },
    yAxis: {
      tickInterval: 1,
      title: {
        text: 'Margin of victory'
        }
},
    credits: {
        enabled: false
    },
    series: [{
        name: 'Game 1',
        data: [-2, 4, -3, -1]
    }, {
        name: 'Game 2',
        data: [-2, 2, 1, -1]
    }, {
        name: 'Game 3',
        data: [2, 4, 2, 7]
    }, {
        name: 'Game 4',
        data: [1, 4, -2, 4]
    }, {
        name: 'Game 5 (if needed)',
        data: [1, 0, 2, -1]
    }, {
        name: 'Game 6 (if needed)',
        data: [-1, 0, -1, 3]
    },{
      name: 'Game 7 (if needed)',
      data: [1, 0, 1, 4]
    }
]
});
Highcharts.chart('bruins3', {

    chart: {
        polar: true,
        type: 'line'
    },

    accessibility: {
        description: 'This chart shows where the Bruins ranked in several categories relative to the rest of the league. The further away from center the better.'
    },

    title: {
        text: '2010-11 Boston Bruins compared to rest of the league',
        subtitle: 'Source: Natural Stat Trick and nhl.com',
        x: -20

    },

    pane: {
        size: '90%'
    },

    xAxis: {
        categories: ['Goals scored', 'Goals allowed', 'Save percentage', 'PP%', 'PK%', 'CF%', 'xGF%'],
        tickmarkPlacement: 'on',
        lineWidth: 0
    },

    yAxis: {
    		reversed: true,
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        tickInterval: 10,
        max: 30,
        min: 0
    },

    tooltip: {
        shared: true,
        pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
    },

    legend: {
        align: 'right',
        verticalAlign: 'middle'
    },

    series: [{
        name: 'League rank',
        data: [5, 2, 1, 20, 16, 14, 21],
        pointPlacement: 'on'
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    align: 'center',
                    verticalAlign: 'bottom'
                },
                pane: {
                    size: '70%'
                }
            }
        }]
    }

});
let button8 = document.getElementById("BruinsShow")
let team2 = document.getElementById("Bruins2011")
team2.style.display = "none"
function BruinsButton(){
  if (team2.style.display == "block"){
    team2.style.display = "none"
  }
  else {team2.style.display = "block"
}
}
let Bruins1 = document.getElementById("bruinsChart1")
let Bruins2 = document.getElementById("bruinsChart2")
let Bruins3 = document.getElementById("bruinsChart3")
let BruinsButton1 = document.getElementById("BruinsButton1")
let BruinsButton2 = document.getElementById("BruinsButton2")
let BruinsButton3 = document.getElementById("BruinsButton3")
Bruins2.style.display = "none"
Bruins3.style.display = "none"
function BruinsChange1 (){
  Bruins2.style.display = "block"
  Bruins1.style.display = "none"
}
function BruinsChange2 (){
  Bruins3.style.display = "block"
  Bruins2.style.display = "none"
}
function BruinsChange3 (){
  Bruins3.style.display = "none"
  Bruins1.style.display = "block"
}

Highcharts.chart('12Kings1', {
    chart: {
        type: 'column'
    },
    title: {
        text: '2011-12 Kings Point Totals',
        subtitle: 'Source: www.hockeyreference.com',
    },
    xAxis: {
        categories: ['Anze Kopitar', 'Justin Williams', 'Dustin Brown', 'Mike Richards', 'Drew Doughty', 'Jack Johnson', 'Willie Mitchell', 'Jarret Stoll', 'Slava Voynov', 'Simon Gagne', 'Dustin Penner', 'Matt Greene', 'Dwight King', 'Alec Martinez', 'Kyle Clifford', 'Jeff Carter', 'Rob Scuderi', 'Brad Richardson', 'Colin Fraser', 'Trevor Lewis', 'Andrei Loktionov', 'Trent Hunter', 'Jordan Nolan', 'Ethan Moreau', 'Kevin Westgarth']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Total points'
        },
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: ( // theme
                    Highcharts.defaultOptions.title.style &&
                    Highcharts.defaultOptions.title.style.color
                ) || 'gray'
            }
        }
    },
    legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Points: {point.stackTotal}'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true
            }
        }
    },
    series: [{
        name: 'Assists',
        data: [51, 37, 32, 26, 26, 16, 19, 15, 12, 10, 10, 11, 9, 6, 7, 3, 8, 3, 6, 4, 4, 5, 2, 3, 1]},
        {
        name: 'Goals',
        data: [25, 22, 22, 18, 10, 8, 5, 6, 8, 7, 7, 4, 5, 6, 5, 6, 1, 5, 2, 3, 3, 2, 2, 1, 1]
    }]
    });
    Highcharts.chart('12Kings2', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Road to the Stanley Cup Finals'
    },
    xAxis: {
        categories: ['Vancouver', 'St. Louis', 'Phoenix', 'New Jersey']
    },
    yAxis: {
      tickInterval: 1,
      title: {
        text: 'Margin of victory'
        }
},
    credits: {
        enabled: false
    },
    series: [{
        name: 'Game 1',
        data: [2, 2, 2, 1]
    }, {
        name: 'Game 2',
        data: [2, 3, 4, 1]
    }, {
        name: 'Game 3',
        data: [1, 2, 1, 4]
    }, {
        name: 'Game 4',
        data: [-2, 2, -2, -2]
    },
    {
        name: 'Game 5 (if needed)',
        data: [1, 0, 1, -1]
    },{
        name: 'Game 6 (if needed)',
        data: [0, 0, 0, 5]
    },
]
});
Highcharts.chart('12Kings3', {

    chart: {
        polar: true,
        type: 'line'
    },

    accessibility: {
        description: 'This chart shows where the Kings ranked in several categories relative to the rest of the league. The further away from center the better.'
    },

    title: {
        text: '2011-12 Kings compared to rest of the league',
        subtitle: 'Source: Natural Stat Trick and nhl.com',
        x: -20

    },

    pane: {
        size: '90%'
    },

    xAxis: {
        categories: ['Goals scored', 'Goals allowed', 'Save percentage', 'PP%', 'PK%', 'CF%', 'xGF%'],
        tickmarkPlacement: 'on',
        lineWidth: 0
    },

    yAxis: {
    		reversed: true,
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        tickInterval: 10,
        max: 30,
        min: 0
    },

    tooltip: {
        shared: true,
        pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
    },

    legend: {
        align: 'right',
        verticalAlign: 'middle'
    },

    series: [{
        name: 'League rank',
        data: [29, 2, 3, 17, 4, 2, 6],
        pointPlacement: 'on'
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    align: 'center',
                    verticalAlign: 'bottom'
                },
                pane: {
                    size: '70%'
                }
            }
        }]
    }

});

let button9 = document.getElementById("KingsShow")
let team3 = document.getElementById("Kings2012")
team3.style.display = "none"
function KingsButton(){
  if (team3.style.display == "block"){
    team3.style.display = "none"
  }
  else {team3.style.display = "block"
}
}
let Kings1 = document.getElementById("12KingsChart1")
let Kings2 = document.getElementById("12KingsChart2")
let Kings3 = document.getElementById("12KingsChart3")
let KingsButton1 = document.getElementById("12KingsButton1")
let KingsButton2 = document.getElementById("12KingsButton2")
let KingsButton3 = document.getElementById("12KingsButton3")
Kings2.style.display = "none"
Kings3.style.display = "none"
function KingsChange1 (){
  Kings2.style.display = "block"
  Kings1.style.display = "none"
}
function KingsChange2 (){
  Kings3.style.display = "block"
  Kings2.style.display = "none"
}
function KingsChange3 (){
  Kings1.style.display = "block"
  Kings3.style.display = "none"
}
Highcharts.chart('13Hawks1', {
    chart: {
        type: 'column'
    },
    title: {
        text: '2013 Blackhawks Point Totals',
        subtitle: 'Source: www.hockeyreference.com',
    },
    xAxis: {
        categories: ['Patrick Kane', 'Jonathan Toews', 'Marian Hossa', 'Brandon Saad', 'Duncan Keith', 'Bryan Bickell', 'Viktor Stalberg', 'Brent Seabrook', 'Patrick Sharp', 'Nick Leddy', 'Andrew Shaw', 'Dave Bolland', 'Marcus Kruger', 'Johnny Oduya', 'Michal Rozsival', 'Michael Frolik', 'Niklas Hjalmarsson', 'Daniel Carcillo', 'Sheldon Brookbank', 'Brandon Bollig']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Total points'
        },
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: ( // theme
                    Highcharts.defaultOptions.title.style &&
                    Highcharts.defaultOptions.title.style.color
                ) || 'gray'
            }
        }
    },
    legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Points: {point.stackTotal}'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true
            }
        }
    },
    series: [{
        name: 'Assists',
        data: [32, 25, 14, 17, 24, 14, 14, 12, 14, 12, 6, 7, 9, 9, 12, 7, 8, 1, 1, 0]},
        {
        name: 'Goals',
        data: [23, 23, 17, 10, 3, 9, 9, 8, 6, 6, 9, 7, 4, 3, 0, 3, 2, 2, 1, 0]
    }]
    });
    Highcharts.chart('13Hawks2', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Road to the Stanley Cup Finals'
    },
    xAxis: {
        categories: ['Minnesota', 'Detroit', 'Los Angeles', 'Boston']
    },
    yAxis: {
      tickInterval: 1,
      title: {
        text: 'Margin of victory'
        }
},
    credits: {
        enabled: false
    },
    series: [{
        name: 'Game 1',
        data: [1, 3, 1, 1]
    }, {
        name: 'Game 2',
        data: [3, -3, 2, -1]
    }, {
        name: 'Game 3',
        data: [-1, -2, -2, -2]
    }, {
        name: 'Game 4',
        data: [3, -2, 1, 1]
    },
    {
        name: 'Game 5 (if needed)',
        data: [4, 3, 1, 2]
    },{
        name: 'Game 6 (if needed)',
        data: [0, 1, 0, 1]
    },{
        name: 'Game 7 (if needed)',
        data: [0, 1, 0, 0]
    }
]
});
Highcharts.chart('13Hawks3', {

    chart: {
        polar: true,
        type: 'line'
    },

    accessibility: {
        description: 'This chart shows where the Blackhawks ranked in several categories relative to the rest of the league. The further away from center the better.'
    },

    title: {
        text: '2013 Chicago Blackhawks compared to rest of the league',
        subtitle: 'Source: Natural Stat Trick and nhl.com',
        x: -20

    },

    pane: {
        size: '90%'
    },

    xAxis: {
        categories: ['Goals scored', 'Goals allowed', 'Save percentage', 'PP%', 'PK%', 'CF%', 'xGF%'],
        tickmarkPlacement: 'on',
        lineWidth: 0
    },

    yAxis: {
    		reversed: true,
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        tickInterval: 10,
        max: 30,
        min: 0
    },

    tooltip: {
        shared: true,
        pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
    },

    legend: {
        align: 'right',
        verticalAlign: 'middle'
    },

    series: [{
        name: 'League rank',
        data: [2, 1, 3, 19, 3, 4, 7],
        pointPlacement: 'on'
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    align: 'center',
                    verticalAlign: 'bottom'
                },
                pane: {
                    size: '70%'
                }
            }
        }]
    }

});

let button10 = document.getElementById("BlackhawksShow2")
let team4 = document.getElementById("Hawks2013")
team4.style.display = "none"
function BlackhawksButton5(){
  if (team4.style.display == "block"){
    team4.style.display = "none"
  }
  else {team4.style.display = "block"
}
}
let Hawks4 = document.getElementById("13HawksChart1")
let Hawks5 = document.getElementById("13HawksChart2")
let Hawks6 = document.getElementById("13HawksChart3")
let HawksButton4 = document.getElementById("13HawksButton1")
let HawksButton5 = document.getElementById("13HawksButton2")
let HawksButton6 = document.getElementById("13HawksButton3")
Hawks5.style.display = "none"
Hawks6.style.display = "none"
function HawksChange1 (){
  Hawks5.style.display = "block"
  Hawks4.style.display = "none"
}
function HawksChange2 (){
  Hawks6.style.display = "block"
  Hawks5.style.display = "none"
}
function HawksChange3 (){
  Hawks4.style.display = "block"
  Hawks6.style.display = "none"
}
Highcharts.chart('14Kings1', {
    chart: {
        type: 'column'
    },
    title: {
        text: '2013-14 Kings Point Totals',
        subtitle: 'Source: www.hockeyreference.com',
    },
    xAxis: {
        categories: ['Anze Kopitar', 'Jeff Carter', 'Justin Williams', 'Mike Richards', 'Drew Doughty', 'Slava Voynov', 'Dwight King', 'Tyler Toffoli', 'Dustin Brown', 'Jarret Stoll', 'Jake Muzzin', 'Alec Martinez', 'Marian Gaborik', 'Robyn Regehr', 'Willie Mitchell', 'Trevor Lewis', 'Jordan Nolan', 'Kyle Clifford', 'Tanner Pearson', 'Matt Frattin', 'Matt Greene', 'Daniel Carcillo', 'Colin Fraser']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Total points'
        },
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: ( // theme
                    Highcharts.defaultOptions.title.style &&
                    Highcharts.defaultOptions.title.style.color
                ) || 'gray'
            }
        }
    },
    legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Points: {point.stackTotal}'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true
            }
        }
    },
    series: [{
        name: 'Assists',
        data: [41, 23, 24, 30, 27, 30, 15, 17, 12, 19, 19, 11, 11, 11, 11, 5, 4, 5, 4, 4, 4, 1, 2]},
        {
        name: 'Goals',
        data: [29, 27, 19, 11, 10, 4, 15, 12, 15, 8, 5, 11, 5, 3, 1, 6, 6, 3, 3, 2, 2, 1, 0]
    }]
    });
    Highcharts.chart('14Kings2', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Road to the Stanley Cup Finals'
    },
    xAxis: {
        categories: ['San Jose', 'Anaheim', 'Chicago', 'New York']
    },
    yAxis: {
      tickInterval: 1,
      title: {
        text: 'Margin of victory'
        }
},
    credits: {
        enabled: false
    },
    series: [{
        name: 'Game 1',
        data: [-3, 1, -2, 1]
    }, {
        name: 'Game 2',
        data: [-5, 2, 4, 1]
    }, {
        name: 'Game 3',
        data: [-1, -2, 1, 3]
    }, {
        name: 'Game 4',
        data: [3, -1, 3, -1]
    },
    {
        name: 'Game 5 (if needed)',
        data: [3, -2, -1, 1]
    },{
        name: 'Game 6 (if needed)',
        data: [3, 1, 1, 0]
    },{
        name: 'Game 7 (if needed)',
        data: [4, 4, 1, 0]
    }
]
});
Highcharts.chart('14Kings3', {

    chart: {
        polar: true,
        type: 'line'
    },

    accessibility: {
        description: 'This chart shows where the Kings ranked in several categories relative to the rest of the league. The further away from center the better.'
    },

    title: {
        text: '2013-14 Los Angeles Kings compared to rest of the league',
        subtitle: 'Source: Natural Stat Trick and nhl.com',
        x: -20

    },

    pane: {
        size: '90%'
    },

    xAxis: {
        categories: ['Goals scored', 'Goals allowed', 'Save percentage', 'PP%', 'PK%', 'CF%', 'xGF%'],
        tickmarkPlacement: 'on',
        lineWidth: 0
    },

    yAxis: {
    		reversed: true,
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        tickInterval: 10,
        max: 30,
        min: 0
    },

    tooltip: {
        shared: true,
        pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
    },

    legend: {
        align: 'right',
        verticalAlign: 'middle'
    },

    series: [{
        name: 'League rank',
        data: [26, 1, 2, 27, 11, 1, 2],
        pointPlacement: 'on'
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    align: 'center',
                    verticalAlign: 'bottom'
                },
                pane: {
                    size: '70%'
                }
            }
        }]
    }

});

let button11 = document.getElementById("KingsShow2")
let team5 = document.getElementById("Kings2014")
team5.style.display = "none"
function KingsShow2(){
  if (team5.style.display == "block"){
    team5.style.display = "none"
  }
  else {team5.style.display = "block"
}
}
let Kings4 = document.getElementById("14KingsChart1")
let Kings5 = document.getElementById("14KingsChart2")
let Kings6 = document.getElementById("14KingsChart3")
let KingsButton4 = document.getElementById("14KingsButton1")
let KingsButton5 = document.getElementById("14KingsButton2")
let KingsButton6 = document.getElementById("14KingsButton3")
Kings5.style.display = "none"
Kings6.style.display = "none"
function KingsChange4 (){
  Kings5.style.display = "block"
  Kings4.style.display = "none"
}
function KingsChange5 (){
  Kings6.style.display = "block"
  Kings5.style.display = "none"
}
function KingsChange6 (){
  Kings4.style.display = "block"
  Kings6.style.display = "none"
}
Highcharts.chart('15Hawks1', {
    chart: {
        type: 'column'
    },
    title: {
        text: '2014-15 Blackhawks Point Totals',
        subtitle: 'Source: www.hockeyreference.com',
    },
    xAxis: {
        categories: ['Jonathan Toews', 'Patrick Kane', 'Marian Hossa', 'Brandon Saad', 'Duncan Keith', 'Patrick Sharp', 'Brad Richards', 'Kris Versteeg', 'Brent Seabrook', 'Bryan Bickell', 'Andrew Shaw', 'Niklas Hjalmarsson', 'Marcus Kruger', 'David Rundblad', 'Michal Rozsival', 'Johnny Oduya', 'Ben Smith', 'Teuvo Teravainen', 'Daniel Carcillo', 'Joakim Nordstrom']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Total points'
        },
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: ( // theme
                    Highcharts.defaultOptions.title.style &&
                    Highcharts.defaultOptions.title.style.color
                ) || 'gray'
            }
        }
    },
    legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Points: {point.stackTotal}'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true
            }
        }
    },
    series: [{
        name: 'Assists',
        data: [38, 37, 39, 29, 35, 27, 25, 20, 23, 14, 11, 16, 10, 11, 12, 8, 4, 5, 4, 3]},
        {
        name: 'Goals',
        data: [28, 27, 22, 23, 10, 16, 12, 14, 8, 14, 15, 3, 7, 3, 1, 2, 5, 4, 4, 0]
    }]
    });
    Highcharts.chart('15Hawks2', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Road to the Stanley Cup Finals'
    },
    xAxis: {
        categories: ['Nashville', 'Minnesota', 'Anaheim', 'Tampa Bay']
    },
    yAxis: {
      tickInterval: 1,
      title: {
        text: 'Margin of victory'
        }
},
    credits: {
        enabled: false
    },
    series: [{
        name: 'Game 1',
        data: [1, 1, -3, 1]
    }, {
        name: 'Game 2',
        data: [-4, 3, 1, -1]
    }, {
        name: 'Game 3',
        data: [2, 1, -1, -1]
    }, {
        name: 'Game 4',
        data: [1, 1, 1, 1]
    },
    {
        name: 'Game 5 (if needed)',
        data: [-3, 0, -1, 1]
    },{
        name: 'Game 6 (if needed)',
        data: [1, 0, 3, 2]
    },{
        name: 'Game 7 (if needed)',
        data: [0, 0, 2, 0]
    }
]
});
Highcharts.chart('15Hawks3', {

    chart: {
        polar: true,
        type: 'line'
    },

    accessibility: {
        description: 'This chart shows where the Blackhawks ranked in several categories relative to the rest of the league. The further away from center the better.'
    },

    title: {
        text: '2014-15 Chicago Blackhawks compared to rest of the league',
        subtitle: 'Source: Natural Stat Trick and nhl.com',
        x: -20

    },

    pane: {
        size: '90%'
    },

    xAxis: {
        categories: ['Goals scored', 'Goals allowed', 'Save percentage', 'PP%', 'PK%', 'CF%', 'xGF%'],
        tickmarkPlacement: 'on',
        lineWidth: 0
    },

    yAxis: {
    		reversed: true,
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        tickInterval: 10,
        max: 30,
        min: 0
    },

    tooltip: {
        shared: true,
        pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
    },

    legend: {
        align: 'right',
        verticalAlign: 'middle'
    },

    series: [{
        name: 'League rank',
        data: [17, 2, 2, 20, 10, 2, 16],
        pointPlacement: 'on'
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    align: 'center',
                    verticalAlign: 'bottom'
                },
                pane: {
                    size: '70%'
                }
            }
        }]
    }

});

let button12 = document.getElementById("BlackhawksShow3")
let team6 = document.getElementById("Hawks2015")
team6.style.display = "none"
function BlackhawksShow3(){
  if (team6.style.display == "block"){
    team6.style.display = "none"
  }
  else {team6.style.display = "block"
}
}
let Hawks7 = document.getElementById("15HawksChart1")
let Hawks8 = document.getElementById("15HawksChart2")
let Hawks9 = document.getElementById("15HawksChart3")
let HawksButton7 = document.getElementById("15HawksButton1")
let HawksButton8 = document.getElementById("15HawksButton2")
let HawksButton9 = document.getElementById("15HawksButton3")
Hawks8.style.display = "none"
Hawks9.style.display = "none"
function HawksChange4 (){
  Hawks7.style.display = "none"
  Hawks8.style.display = "block"
}
function HawksChange5 (){
  Hawks9.style.display = "block"
  Hawks8.style.display = "none"
}
function HawksChange6 (){
  Hawks7.style.display = "block"
  Hawks9.style.display = "none"
}
Highcharts.chart('16Penguins1', {
    chart: {
        type: 'column'
    },
    title: {
        text: '2015-16 Penguins Point Totals',
        subtitle: 'Source: www.hockeyreference.com',
    },
    xAxis: {
        categories: ['Sidney Crosby', 'Kris Letang', 'Phil Kessel', 'Evgeni Malkin', 'Patric Hornqvist', 'Chris Kunitz', 'Matt Cullen', 'Nick Bonino', 'Carl Hagelin', 'Trevor Daley', 'Olli Matta', 'David Perron', 'Brian Dumoulin', 'Tom Kuhnhackl', 'Eric Fehr', 'Beau Bennett', 'Ian Cole', 'Bryan Rust', 'Conor Sheary', 'Ben Lovejoy', 'Kevin Porter', 'Sergei Plotnikov']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Total points'
        },
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: ( // theme
                    Highcharts.defaultOptions.title.style &&
                    Highcharts.defaultOptions.title.style.color
                ) || 'gray'
            }
        }
    },
    legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Points: {point.stackTotal}'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true
            }
        }
    },
    series: [{
        name: 'Assists',
        data: [49, 51, 33, 31, 29, 23, 16, 20, 17, 16, 13, 12, 16, 10, 6, 6, 12, 7, 3, 6, 3, 2]},
        {
        name: 'Goals',
        data: [36, 16, 26, 27, 22, 17, 16, 9, 10, 6, 6, 4, 0, 5, 8, 6, 0, 4, 7, 4, 0, 0]
    }]
    });
    Highcharts.chart('16Penguins2', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Road to the Stanley Cup Finals'
    },
    xAxis: {
        categories: ['New York', 'Washington', 'Tampa Bay', 'San Jose']
    },
    yAxis: {
      tickInterval: 1,
      title: {
        text: 'Margin of victory'
        }
},
    credits: {
        enabled: false
    },
    series: [{
        name: 'Game 1',
        data: [3, -1, -2, 1]
    }, {
        name: 'Game 2',
        data: [-2, 1, 1, 1]
    }, {
        name: 'Game 3',
        data: [2, 1, 2, -1]
    }, {
        name: 'Game 4',
        data: [5, 1, -1, 2]
    },
    {
        name: 'Game 5 (if needed)',
        data: [3, -2, -1, -2]
    },{
        name: 'Game 6 (if needed)',
        data: [0, 1, 3, 2]
    },{
        name: 'Game 7 (if needed)',
        data: [0, 0, 1, 0]
    }
]
});

Highcharts.chart('16Penguins3', {

    chart: {
        polar: true,
        type: 'line'
    },

    accessibility: {
        description: 'This chart shows where the Penguins ranked in several categories relative to the rest of the league. The further away from center the better.'
    },

    title: {
        text: '2015-16 Pittsburgh Penguins compared to rest of the league',
        subtitle: 'Source: Natural Stat Trick and nhl.com',
        x: -20

    },

    pane: {
        size: '90%'
    },

    xAxis: {
        categories: ['Goals scored', 'Goals allowed', 'Save percentage', 'PP%', 'PK%', 'CF%', 'xGF%'],
        tickmarkPlacement: 'on',
        lineWidth: 0
    },

    yAxis: {
    		reversed: true,
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        tickInterval: 10,
        max: 30,
        min: 0
    },

    tooltip: {
        shared: true,
        pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
    },

    legend: {
        align: 'right',
        verticalAlign: 'middle'
    },

    series: [{
        name: 'League rank',
        data: [3, 6, 2, 16, 5, 2, 1],
        pointPlacement: 'on'
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    align: 'center',
                    verticalAlign: 'bottom'
                },
                pane: {
                    size: '70%'
                }
            }
        }]
    }

});

let button13 = document.getElementById("PenguinsShow")
let team7 = document.getElementById("Penguins2016")
team7.style.display = "none"
function PenguinsButton(){
  if (team7.style.display == "block"){
    team7.style.display = "none"
  }
  else {team7.style.display = "block"
}
}
let Penguins1 = document.getElementById("16PenguinsChart1")
let Penguins2 = document.getElementById("16PenguinsChart2")
let Penguins3 = document.getElementById("16PenguinsChart3")
let PenguinsButton1 = document.getElementById("16PenguinsButton1")
let PenguinsButton2 = document.getElementById("16PenguinsButton2")
let PenguinsButton3 = document.getElementById("16PenguinsButton3")
Penguins2.style.display = "none"
Penguins3.style.display = "none"
function PenguinsChange1 (){
  Penguins2.style.display = "block"
  Penguins1.style.display = "none"
}
function PenguinsChange2 (){
  Penguins3.style.display = "block"
  Penguins2.style.display = "none"
}
function PenguinsChange3 (){
  Penguins1.style.display = "block"
  Penguins3.style.display = "none"
}
Highcharts.chart('17Penguins1', {
    chart: {
        type: 'column'
    },
    title: {
        text: '2016-17 Penguins Point Totals',
        subtitle: 'Source: www.hockeyreference.com',
    },
    xAxis: {
        categories: ['Sidney Crosby', 'Evgeni Malkin', 'Phil Kessel', 'Conor Sheary', 'Justin Schultz', 'Patric Hornqvist', 'Nick Bonino', 'Kris Letang', 'Jake Guentzel', 'Matt Cullen', 'Chris Kunitz', 'Bryan Rust', 'Scott Wilson', 'Ian Cole', 'Carl Hagelin', 'Trevor Daley', 'Tom Kuhnhackl', 'Brian Dumoulin', 'Eric Fehr', 'Chad Ruhwedel', 'Carter Rowney', 'Olli Maatta']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Total points'
        },
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: ( // theme
                    Highcharts.defaultOptions.title.style &&
                    Highcharts.defaultOptions.title.style.color
                ) || 'gray'
            }
        }
    },
    legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Points: {point.stackTotal}'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true
            }
        }
    },
    series: [{
        name: 'Assists',
        data: [45, 39, 47, 30, 39, 23, 19, 29, 17, 18, 20, 13, 18, 21, 16, 14, 12, 14, 5, 8, 4, 6]},
        {
        name: 'Goals',
        data: [44, 33, 23, 23, 12, 21, 18, 5, 16, 13, 9, 15, 8, 5, 6, 5, 4, 1, 6, 2, 3, 1]
    }]
    });
    Highcharts.chart('17Penguins2', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Road to the Stanley Cup Finals'
    },
    xAxis: {
        categories: ['Columbus', 'Washington', 'Ottawa', 'Nashville']
    },
    yAxis: {
      max: 8,
      tickInterval: 1,
      title: {
        text: 'Margin of victory'
        }
},
    credits: {
        enabled: false
    },
    series: [{
        name: 'Game 1',
        data: [2, 1, -1, 2]
    }, {
        name: 'Game 2',
        data: [3, 4, 1, 3]
    }, {
        name: 'Game 3',
        data: [1, -1, -4, -4]
    }, {
        name: 'Game 4',
        data: [-1, 1, 1, -3]
    },
    {
        name: 'Game 5 (if needed)',
        data: [3, -2, 7, 6]
    },{
        name: 'Game 6 (if needed)',
        data: [0, -3, -1, 2]
    },{
        name: 'Game 7 (if needed)',
        data: [0, 2, 1, 0]
    }
]
});
Highcharts.chart('17Penguins3', {

    chart: {
        polar: true,
        type: 'line'
    },

    accessibility: {
        description: 'This chart shows where the Penguins ranked in several categories relative to the rest of the league. The further away from center the better.'
    },

    title: {
        text: '2016-17 Pittsburgh Penguins compared to rest of the league',
        subtitle: 'Source: Natural Stat Trick and nhl.com',
        x: -20

    },

    pane: {
        size: '90%'
    },

    xAxis: {
        categories: ['Goals scored', 'Goals allowed', 'Save percentage', 'PP%', 'PK%', 'CF%', 'xGF%'],
        tickmarkPlacement: 'on',
        lineWidth: 0
    },

    yAxis: {
    		reversed: true,
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        tickInterval: 10,
        max: 30,
        min: 0
    },

    tooltip: {
        shared: true,
        pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
    },

    legend: {
        align: 'right',
        verticalAlign: 'middle'
    },

    series: [{
        name: 'League rank',
        data: [1, 17, 10, 3, 20, 2, 5],
        pointPlacement: 'on'
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    align: 'center',
                    verticalAlign: 'bottom'
                },
                pane: {
                    size: '70%'
                }
            }
        }]
    }

});

let button14 = document.getElementById("PenguinsShow2")
let team8 = document.getElementById("Penguins2017")
team8.style.display = "none"
function PenguinsShow2(){
  if (team8.style.display == "block"){
    team8.style.display = "none"
  }
  else {team8.style.display = "block"
}
}
let Penguins4 = document.getElementById("17PenguinsChart1")
let Penguins5 = document.getElementById("17PenguinsChart2")
let Penguins6 = document.getElementById("17PenguinsChart3")
let PenguinsButton4 = document.getElementById("17PenguinsButton1")
let PenguinsButton5 = document.getElementById("17PenguinsButton2")
let PenguinsButton6 = document.getElementById("17PenguinsButton3")
Penguins5.style.display = "none"
Penguins6.style.display = "none"
function PenguinsChange4 (){
  Penguins5.style.display = "block"
  Penguins4.style.display = "none"
}
function PenguinsChange5 (){
  Penguins6.style.display = "block"
  Penguins5.style.display = "none"
}
function PenguinsChange6 (){
  Penguins4.style.display = "block"
  Penguins6.style.display = "none"
}
Highcharts.chart('18Capitals1', {
    chart: {
        type: 'column'
    },
    title: {
        text: '2017-18 Capitals Point Totals',
        subtitle: 'Source: www.hockeyreference.com',
    },
    xAxis: {
        categories: ['Alex Ovechkin', 'Evgeny Kuznetsov', 'Nicklas Backstrom', 'John Carlson', 'T.J. Oshie', 'Lars Eller', 'Tom Wilson', 'Dmitry Orlov', 'Matt Niskanen', 'Brett Connolly', 'Jakub Vrana', 'Andre Burakovsky', 'Jay Beagle', 'Alex Chiasson', 'Chandler Stephenson', 'Devante Smith-Pelly', 'Christian Djoos', 'Madison Bowey', 'Brooks Orpik', 'Taylor Chorney', 'Michal Kempny']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Total points'
        },
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: ( // theme
                    Highcharts.defaultOptions.title.style &&
                    Highcharts.defaultOptions.title.style.color
                ) || 'gray'
            }
        }
    },
    legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Points: {point.stackTotal}'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true
            }
        }
    },
    series: [{
        name: 'Assists',
        data: [38, 56, 50, 53, 29, 20, 21, 21, 22, 12, 14, 13, 15, 9, 12, 9, 11, 12, 10, 3, 1]},
        {
        name: 'Goals',
        data: [49, 27, 21, 15, 18, 18, 14, 10, 7, 15, 13, 12, 7, 9, 6, 7, 3, 0, 0, 1, 2]
    }]
    });
    Highcharts.chart('18Capitals2', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Road to the Stanley Cup'
    },
    xAxis: {
        categories: ['Columbus', 'Pittsburgh', 'Tampa Bay', 'Vegas']
    },
    yAxis: {
      tickInterval: 1,
      max: 5,
      title: {
        text: 'Margin of victory'
        }
},
    credits: {
        enabled: false
    },
    series: [{
        name: 'Game 1',
        data: [-1, -1, 2, -2]
    }, {
        name: 'Game 2',
        data: [-1, 3, 4, 1]
    }, {
        name: 'Game 3',
        data: [1, 1, -2, 2]
    }, {
        name: 'Game 4',
        data: [3, -2, -2, 4]
    },
    {
        name: 'Game 5 (if needed)',
        data: [1, 3, -1, 1]
    },{
        name: 'Game 6 (if needed)',
        data: [3, 1, 3, 0]
    },{
        name: 'Game 7 (if needed)',
        data: [0, 0, 4, 0]
    }
]
});
Highcharts.chart('18Capitals3', {

    chart: {
        polar: true,
        type: 'line'
    },

    accessibility: {
        description: 'This chart shows where the Capitals ranked in several categories relative to the rest of the league. The further away from center the better.'
    },

    title: {
        text: '2017-18 Washington Capitals compared to rest of the league',
        subtitle: 'Source: Natural Stat Trick and nhl.com',
        x: -20

    },

    pane: {
        size: '90%'
    },

    xAxis: {
        categories: ['Goals scored', 'Goals allowed', 'Save percentage', 'PP%', 'PK%', 'CF%', 'xGF%'],
        tickmarkPlacement: 'on',
        lineWidth: 0
    },

    yAxis: {
    		reversed: true,
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        tickInterval: 10,
        max: 30,
        min: 0
    },

    tooltip: {
        shared: true,
        pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
    },

    legend: {
        align: 'right',
        verticalAlign: 'middle'
    },

    series: [{
        name: 'League rank',
        data: [9, 16, 17, 7, 15, 24, 26],
        pointPlacement: 'on'
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    align: 'center',
                    verticalAlign: 'bottom'
                },
                pane: {
                    size: '70%'
                }
            }
        }]
    }

});

let button15 = document.getElementById("CapitalsShow")
let team9 = document.getElementById("Capitals2018")
team9.style.display = "none"
function CapitalsButton(){
  if (team9.style.display == "block"){
    team9.style.display = "none"
  }
  else {team9.style.display = "block"
}
}
let Capitals1 = document.getElementById("18CapitalsChart1")
let Capitals2 = document.getElementById("18CapitalsChart2")
let Capitals3 = document.getElementById("18CapitalsChart3")
let CapitalsButton1 = document.getElementById("18CapitalsButton1")
let CapitalsButton2 = document.getElementById("18CapitalsButton2")
let CapitalsButton3 = document.getElementById("18CapitalsButton3")
Capitals2.style.display = "none"
Capitals3.style.display = "none"
function CapitalsChange1 (){
  Capitals2.style.display = "block"
  Capitals1.style.display = "none"
}
function CapitalsChange2 (){
  Capitals3.style.display = "block"
  Capitals2.style.display = "none"
}
function CapitalsChange3 (){
  Capitals1.style.display = "block"
  Capitals3.style.display = "none"
}
Highcharts.chart('19Blues1', {
    chart: {
        type: 'column'
    },
    title: {
        text: '2018-19 Blues Point Totals',
        subtitle: 'Source: www.hockeyreference.com',
    },
    xAxis: {
        categories: ['Ryan O_Reilly', 'Vladimir Tarasenko', 'Brayden Schenn', 'David Perron', 'Alex Pietrangelo', 'Tyler Bozak', 'Jaden Schwartz', 'Vince Dunn', 'Robert Thomas', 'Oskar Sundqvist', 'Pat Maroon', 'Colton Parayko', 'Alex Steen', 'Ivan Barbashev', 'Zach Sanford', 'Jay Bouwmeester', 'Joel Edmundson', 'Robert Bortuzzo', 'Robby Fabbri', 'Sammy Blais']
      },
    yAxis: {
        min: 0,
        max: 90,
        tickInterval: 15,
        title: {
            text: 'Total points'
        },
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: ( // theme
                    Highcharts.defaultOptions.title.style &&
                    Highcharts.defaultOptions.title.style.color
                ) || 'gray'
            }
        }
    },
    legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Points: {point.stackTotal}'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true
            }
        }
    },
    series: [{
        name: 'Assists',
        data: [49, 35, 37, 23, 28, 25, 25, 23, 24, 17, 18, 18, 17, 12, 12, 14, 9, 8, 4, 2]},
        {
        name: 'Goals',
        data: [28, 33, 17, 23, 13, 13, 11, 12, 9, 14, 10, 10, 10, 14, 8, 3, 2, 2, 2, 2]
    }]
    });
    Highcharts.chart('19Blues2', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Road to the Stanley Cup'
    },
    xAxis: {
        categories: ['Winnipeg', 'Dallas', 'San Jose', 'Boston']
    },
    yAxis: {
      max: 6,
      tickInterval: 1,
      title: {
        text: 'Margin of victory'
        }
},
    credits: {
        enabled: false
    },
    series: [{
        name: 'Game 1',
        data: [1, 1, -3, -1]
    }, {
        name: 'Game 2',
        data: [1, -2, 2, 2]
    }, {
        name: 'Game 3',
        data: [-3, 1, -1, -5]
    }, {
        name: 'Game 4',
        data: [-1, -2, 1, 2]
    },
    {
        name: 'Game 5 (if needed)',
        data: [1, -1, 5, 1]
    },{
        name: 'Game 6 (if needed)',
        data: [1, 3, 4, -4]
    },{
        name: 'Game 7 (if needed)',
        data: [0, 1, 0, 3]
    }
]
});
Highcharts.chart('19Blues3', {

    chart: {
        polar: true,
        type: 'line'
    },

    accessibility: {
        description: 'This chart shows where the Blues ranked in several categories relative to the rest of the league. The further away from center the better.'
    },

    title: {
        text: '2018-19 St. Louis Blues compared to rest of the league',
        subtitle: 'Source: Natural Stat Trick and nhl.com',
        x: -20

    },

    pane: {
        size: '90%'
    },

    xAxis: {
        categories: ['Goals scored', 'Goals allowed', 'Save percentage', 'PP%', 'PK%', 'CF%', 'xGF%'],
        tickmarkPlacement: 'on',
        lineWidth: 0
    },

    yAxis: {
    		reversed: true,
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        tickInterval: 10,
        max: 30,
        min: 0
    },

    tooltip: {
        shared: true,
        pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
    },

    legend: {
        align: 'right',
        verticalAlign: 'middle'
    },

    series: [{
        name: 'League rank',
        data: [15, 5, 13, 10, 9, 10, 5],
        pointPlacement: 'on'
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    align: 'center',
                    verticalAlign: 'bottom'
                },
                pane: {
                    size: '70%'
                }
            }
        }]
    }

});

let button16 = document.getElementById("BluesShow")
let team10 = document.getElementById("Blues2019")
team10.style.display = "none"
function BluesButton(){
  if (team10.style.display == "block"){
    team10.style.display = "none"
  }
  else {team10.style.display = "block"
}
}
let Blues1 = document.getElementById("19BluesChart1")
let Blues2 = document.getElementById("19BluesChart2")
let Blues3 = document.getElementById("19BluesChart3")
let BluesButton1 = document.getElementById("19BluesButton1")
let BluesButton2 = document.getElementById("19BluesButton2")
let BluesButton3 = document.getElementById("19BluesButton3")
Blues2.style.display = "none"
Blues3.style.display = "none"
function BluesChange1 (){
  Blues1.style.display = "none"
  Blues2.style.display = "block"
}
function BluesChange2 (){
  Blues3.style.display = "block"
  Blues2.style.display = "none"
}
function BluesChange3 (){
  Blues1.style.display = "block"
  Blues3.style.display = "none"
}
