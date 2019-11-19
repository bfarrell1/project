Highcharts.chart('teamChart1', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Regular Season Points'
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
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}<br> Wins: {Math.point.y/2}'
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
