console.log('main.js');
console.log('jQuery - ', $);

let sheetAsJSON =
	'https://spreadsheets.google.com/feeds/list/1PCS9xZV7bCEX0Onnkn6k4wbTPwxeKnLuKf8yjEsTEqQ/od6/public/values?alt=json'; // sampreet

$.ajax({ url: sheetAsJSON }).then((data) => {
	console.log('This is data: ', data);
	console.log('This is data: ', data.feed.entry[0].gsx$title.$t);

	let projects = data.feed.entry.map((project) => {
		return {
			title: project.gsx$title.$t,
			image: project.gsx$image.$t,
			description: project.gsx$description.$t,
			url: project.gsx$url.$t,
		};
	});

	console.log(' projects - ', projects);
	renderProjects(projects);
});

const renderProjects = (projects) => {
	console.log('Rendering projects...', projects);
	for (project of projects) {
		const $article = $(`<article class="project-card">	
						<div class="project-image"><img src="${project.image}" alt="${project.title} picture"></div>
						<p class="project-title" id="project-title" >${project.title}</p>
						<p class="project-description" id="project-description">${project.description}</p>
						<p class="project-view" id="project-view"><a href="${project.url}">View Here</a></p>
					</article>`);
		$('.projects-main').append($article);
		console.log('Projects rendered...');
	}
};

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
