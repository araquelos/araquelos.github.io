$(document).ready(function(){
	$("#input-dnasc").mask("99/99/9999");
	$("#input-telefone").mask("(99) 99999-9999"); 
	$("#input-cpf").mask("999.999.999-99"); 
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