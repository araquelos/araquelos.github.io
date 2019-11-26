$(document).ready(function(){
	$("#input-dnasc").mask('00/00/0000', {clearIfNotMatch: true});
	$("#input-telefone").mask('(00) 00000-0000', {clearIfNotMatch: true});
	$("#input-cpf").mask('000.000.000-00', {clearIfNotMatch: true});
	$("#btn-reset").click(function(){
		$("#exibir-senha").hide();
		$("#exibir-tpsenha").hide();
		document.getElementById("input-senha").disabled = true;
	});
	$("#exibir-senha-sim").click(function(){
		$("#exibir-senha").show();
		$("#exibir-tpsenha").show();
		document.getElementById("input-senha").disabled = false;
	});
	$("#exibir-senha-nao").click(function(){
		$("#exibir-senha").hide();
		$("#exibir-tpsenha").hide();
		document.getElementById("input-senha").disabled = true;
	});
});