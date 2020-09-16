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
	renderProjectCarousel(projects);
	renderAllProjects(projects);
});

const renderProjectCarousel = (projects) => {
	console.log('Rendering project carousel...', projects);

	projects.forEach((project, index) => {
		const itemActive = index === 0 ? ' active' : '';

		const $li = `<li data-target="#carouselExampleCaptions" data-slide-to="${index}" class="active"></li>`;
		$('.carousel-indicators').append($li);

		const $carouselItem = $(`<div class="carousel-item${itemActive}">
					<div><img src="${project.image}" alt="${project.title} picture" class="d-block w-100"></div>
					<div class="carousel-caption">
						<h5>${project.title}</h5>
						<p>${project.description}</p>
						<p class="project-view" id="project-view"><a href="${project.url}" target="_blank">View Here</a></p>
					</div>
					</div>`);
		$('.carousel-inner').append($carouselItem);
		console.log('Project Carousel rendered...');
	});
};

const renderAllProjects = (projects) => {
	console.log('Rendering all projects...', projects);
	for (project of projects) {
		const $article = $(`<article class="project-card">	
						<div class="project-image"><img src="${project.image}" alt="${project.title} picture"></div>
						<p class="project-title" id="project-title" >${project.title}</p>
						<p class="project-description" id="project-description">${project.description}</p>
						<p class="project-view" id="project-view"><a href="${project.url}" target="_blank">View Here</a></p>
					</article>`);
		$('.projects-main').append($article);
		console.log('All Projects rendered...');
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

	$('#contact-thanks')
		.text('Thanks for reaching out! I shall get back to you in 1-2 days.')
		.css('display', 'block');

	$(event.currentTarget).trigger('reset');
});
