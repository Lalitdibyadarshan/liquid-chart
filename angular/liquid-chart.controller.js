
app.controller('liquidChartController', controller);

function controller($scope) {
    var ctrl = this,
        swiper = new Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',
            },
        });
    ctrl.offset = 50;
    ctrl.style = {
        top: calculateTop() + '%',
        marginTop: (calculateTop() * -1) + '%',
        background: $scope.value > 40 ? "#e0cd21" : "#A31341"
    };
    ctrl.value = $scope.value;

    function calculateTop() {
        return $scope.value === 100 ? -60 : ctrl.offset - $scope.value;
    }
}
