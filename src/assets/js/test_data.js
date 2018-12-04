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
// let bar = [];
// let hf = '';

// hf = 'hello friend!';

// console.log(hf);

var path = 'assets/test_data.json';

// console.log(path);

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

// function loadData(path) {
// 	let tmp =  $.getJSON(path);
// 	return tmp;
// }

// bar = loadData(path);

// console.log(bar.responseJSON);

// problems with getJSON being asynchronous... a solution...
// https://stackoverflow.com/questions/33727286/responsejson-of-a-getjson-object-is-undefined

// let tmp = $.getJSON(path, function(response) {
// 	return response;
// });

// https://stackoverflow.com/questions/4116992/how-to-include-json-data-in-javascript-synchronously-without-parsing
// $.ajax({
//   url: 'MyArray.json',
//   async: false,
//   dataType: 'json',
//   success: function (response) {
//     // do stuff with response.
//   }
// });

// This works but it's a super bad idea because it's on the main thread
// and can be detrimental to the user experience according to the error message. 
// let tmp = $.ajax({
//   url: 'assets/test_data.json',
//   async: false,
//   dataType: 'json',
//   success: function (response) {
//     return response;
//   }
// });
// console.log(tmp.responseJSON);


function loadData(path) {
	return $.ajax({
		url: path,
		async: false,
		dataType: 'json',
		success: function(response) {
			return response.responseJSON; 
		}
	});
}