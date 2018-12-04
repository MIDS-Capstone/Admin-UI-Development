/*
This script will be injected by gulp.  
The Admin-UI-Development/inject.js script has the code for injecting scripts.
// NOTE in this code block the double undrscores, __, were used to replace the 
// double astrixs, **.  The reason for this is that the code wouldn't comment out.
// Replace __ with ** to restore the original code. 
// var injectScripts = gulp.src([
    // path.join(conf.paths.src, '/assets/js/__/.js'),
    // path.join(conf.paths.src, '/app/__/*.module.js'),
    // path.join(conf.paths.src, '/app/__/*.js'),
    // path.join('!' + conf.paths.src, '/app/__/*.spec.js'),
    // path.join('!' + conf.paths.src, '/app/__/*.mock.js'),
  // ])
*/
let bar = [];
let hf = '';

hf = 'hello friend!';

console.log(hf);

var path = 'assets/test_data.json';

console.log(path);

// function Foo(path) {
// 	var bar;
// 	bar = $.getJSON(path); 

// 	return bar;}

// StackOverflow anser...
//https://stackoverflow.com/questions/17626776/why-is-my-json-file-not-found

// $.getJSON('/Content/dumboJr.json', function (data) {
    // $.each(data, function(i, dataPoint) {
        // // Bla
      // });
  // });

// var arp = $.getJSON(path, function(data){
// 	$.each(data, function(i, dataPoint){
// 		console.log(dataPoint);
// 	});

// 	return data;
// });

function loadData(path) {
	let tmp =  $.getJSON(path);
	return tmp.responseJSON;
}

bar = loadData(path);

console.log(bar);

