// JavaScript Document for BootstrapDark docs page. //Andrew Tajsic
$(function() {
	$(".swatches li a").click(function() { 
		$("link.bootstrap").attr("href",$(this).attr('rel'));
		return false;
	});
});