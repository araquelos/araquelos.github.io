$(function() {
	$("#myTable").tablesorter({
		sortList : [[0,0]],
		widgets: ['zebra', 'columns'],
		sortReset: true,
		sortRestart: true 
	});
});