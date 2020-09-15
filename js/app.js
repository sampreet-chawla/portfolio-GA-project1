console.log('hello - ' + $);

console.log('main.js');
console.log('jQuery - ', $);

// let sheetUrl =
// 'https://docs.google.com/spreadsheets/d/1PCS9xZV7bCEX0Onnkn6k4wbTPwxeKnLuKf8yjEsTEqQ/edit?usp=sharing';

// recognize the sheet id
// let sheetId = '1PCS9xZV7bCEX0Onnkn6k4wbTPwxeKnLuKf8yjEsTEqQ';

//let sheetAsJSON = "https://spreadsheets.google.com/feeds/list/ YOUR ID GOES HERE /od6/public/values?alt=json"
let sheetAsJSON =
	'https://spreadsheets.google.com/feeds/list/1PCS9xZV7bCEX0Onnkn6k4wbTPwxeKnLuKf8yjEsTEqQ/od6/public/values?alt=json'; // sampreet

let projects = [];
let isProjectAvailable = false;

$.ajax({ url: sheetAsJSON }).then((data) => {
	console.log('This is data: ', data);
	console.log('This is data: ', data.feed.entry[0].gsx$title.$t);

	projects = data.feed.entry.map((project) => {
		return {
			title: project.gsx$title.$t,
			image: project.gsx$image.$t,
			description: project.gsx$description.$t,
			url: project.gsx$url.$t,
		};
	});

	console.log(' projects - ', projects);
});

// const renderProjects = () => {
// const $li = $(
// `<li class='circle' style='background-color: ${color}'></li>`
// 	if (!isProjectAvailable) {
// 		// for (project of projects) {
// 		// 	console.log('project -  : ' + project);
// 		// 	const $div = $('<div>').addClass('project');
// 		// 	const $heading = $('<h3>').text(project.title);
// 		// 	$div.append($heading);
// 		// 	const $image = $('<img>')
// 		// 		.attr('src', project.image)
// 		// 		.attr('width', '45%')
// 		// 		.attr('alt', project.title + ' picture');
// 		// 	$div.append($image);
// 		// 	const $para = $('<p>').text(project.description);
// 		// 	$div.append($para);

// 		// 	$('.projects-container').append($div);
// 		// 	$('#hideProjectButton').css('display', 'block');
// 		// 	$('#showProjectButton').css('display', 'none');
// 		// }

// 		for (project of projects) {
// 			console.log('project -  : ' + project);
// 		}
// 		isProjectAvailable = true;
// 		console.log('Projects rendered... ');
// 	}
// };

// renderProjects();

$('form').on('submit', (event) => {
	event.preventDefault();

	const fullName = $('#full-name').val();
	const email = $('#email').val();
	const message = $('#message').val();
	console.log(
		`Get In Touch - Full Name: ${fullName}, email: ${email}, message: "${message}"`
	);

	$('#contact-thanks').text(
		'Thanks for reaching out! I shall get back to you in 1-2 days.'
	);

	$(event.currentTarget).trigger('reset');
});
