(function () {
  'use strict';
  angular
      .module('MyApp', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
      .controller('AppCtrl', function() {
        this.userState = '';
        this.states = ('AC AL AP AM BA CE DF ES GO MA MT MS MG PA PB PR PE PI RJ RN RS RO RR SC SP SE TO').split(' ').map(function (state) { return { abbrev: state }; });
      });
})();

              