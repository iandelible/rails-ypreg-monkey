// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.

// require kingadmin/jquery-2.1.0
//= require jquery
//= require jquery_ujs
//= requre bootstrap
//= require kingadmin/king-common.js
//= require_tree .

$(function() {
	$("#event_begin_date").datepicker(
		{dateformat: 'yy-mm-dd'});
	$("#event_end_date").datepicker(
		{dateformat: 'yy-mm-dd'});
	$("#event_registration_open_date").datepicker(
		{dateformat: 'yy-mm-dd'});
	$("#event_registration_close_date").datepicker(
		{dateformat: 'yy-mm-dd'});
});
