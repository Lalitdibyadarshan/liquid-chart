
app.directive('liquidChart', function () {
    return {
        templateUrl: 'liquid-chart.html',
        scope: {
            value: '='
        },
        controller: 'liquidChartController',
        controllerAs: 'ctrl'
    }
})