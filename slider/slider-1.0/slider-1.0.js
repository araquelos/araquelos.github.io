angular.module('MyApp', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
    .config(function($mdIconProvider) {
        $mdIconProvider.iconSet('device', 'img/icons/sets/device-icons.svg', 24);
    })
    .controller('AppCtrl', function($scope) {
        $scope.color = {
            red: Math.floor(Math.random() * 255),
            green: Math.floor(Math.random() * 255),
            blue: Math.floor(Math.random() * 255)
        };
    });

// Botões Plus e Minus

const btnRedMinus = document.getElementById('btn-red-minus');
btnRedMinus.onclick = function() {
    const inputRed = document.getElementById('input-red').value;
    const redSlider = document.getElementById('red-slider').value;
    if (inputRed > 0) {
        document.getElementById('input-red').value = inputRed - 1;
        document.getElementById('red-slider').value = redSlider - 1;
    }
}
const btnRedPlus = document.getElementById('btn-red-plus');
btnRedPlus.onclick = function() {
    alert("Já existe um familiar informado como cônjuge.");
}

const btnGreenMinus = document.getElementById('btn-green-minus');
btnGreenMinus.onclick = function() {
    alert("Já existe um familiar informado como cônjuge.");
}
const btnGreenPlus = document.getElementById('btn-green-plus');
btnGreenPlus.onclick = function() {
    alert("Já existe um familiar informado como cônjuge.");
}

const btnBlueMinus = document.getElementById('btn-blue-minus');
btnBlueMinus.onclick = function() {
    alert("Já existe um familiar informado como cônjuge.");
}
const btnBluePlus = document.getElementById('btn-blue-plus');
btnBluePlus.onclick = function() {
    alert("Já existe um familiar informado como cônjuge.");
}