# Project Overview

## Project Schedule

This schedule will be used to keep track of my progress throughout the week and align with squad's expectations.

| Day   | Deliverable                                  | Status     |
| ----- | -------------------------------------------- | ---------- |
| Day 1 | Project Description                          | Complete   |
| Day 1 | Wireframes / Priority Matrix / Timeline      | Complete   |
| Day 3 | Core Application Structure (HTML, CSS, etc.) | Complete   |
| Day 4 | MVP & Bug Fixes                              | Complete   |
| Day 5 | Final Touches                                | Complete   |
| Day 5 | Present                                      | Incomplete |

## Project Description

This project is my personal portfolio showcasing me and my projects. It has the following sections - Home Page (Landing Page), About Me, Projects, Contact. This is the initial version and I am very hopeful that it would undergo changes and improvements with time and evolve to reflect me in a wholesome way.

## Google Sheet

The [Google Sheet](https://docs.google.com/spreadsheets/d/1PCS9xZV7bCEX0Onnkn6k4wbTPwxeKnLuKf8yjEsTEqQ/edit#gid=0) with my project lists. This acts as the project data source to my portfolio project.

## Wireframes

- [Mobile Look](https://res.cloudinary.com/dreamer123/image/upload/v1600106126/Sampreet-SEIR_831-unit1-portfolio/mobile-portfolio-wireframe_bhdeh9.png) - It is a single column display with home page, about me, the project carousel, and the contact page. The project carousel will display my favorite projects. It has the hamburger icon which expands to go to different sections of the page.
- [Tablet Look](https://res.cloudinary.com/dreamer123/image/upload/v1600106126/Sampreet-SEIR_831-unit1-portfolio/tablet-portfolio-wireframe_zdeuwe.png) - It has the detailed about me page, additional 'All Projects' section to display the individual projects in 2 columns. The page size, fonts and images are bigger for the tablet look.
- [Desktop Look](https://res.cloudinary.com/dreamer123/image/upload/v1600106126/Sampreet-SEIR_831-unit1-portfolio/desktop-portfolio-wireframe_k4fvn5.png) - It has the detailed about me page, and an additional 'All Projects' section to display the individual projects in 3 columns. The hamburger icon is replaced with the individual menu links. The page size, fonts and images are much bigger for the desktop look.

Wireframing Resources:

- [Mockflow](https://mockflow.com/app/#Wireframe)
<!-- [Figma](https://www.figma.com/)  -->

## Time/Priority Matrix

[Time-Priority Matrix](hhttps://res.cloudinary.com/dreamer123/image/upload/v1600096508/Sampreet-SEIR_831-unit1-portfolio/Sampreet-Portfolio-Time-Priority-Matrix_uzfayl.png) covers MVP list of items.

### MVP/PostMVP

#### MVP (examples)

- Basic HTML Layout
- Grid and Flex Layout
- Basic Nav Nar
- Google API Integration for Projects
- Content Addition
- Contact Form
- Responsive Design
- Make own Logo, Icons and Images
- Projects touch-up / baseline

#### PostMVP

- Form Validation
- Bootstrap (opt)
- Materialize (opt)
- Project and Skills Carousal
- Canvas Particles
- Testimonials
- Top Nav Animation on Scroll

## Functional Components

#### MVP

| Component                  | Priority | Estimated Time | Actual Time |
| -------------------------- | :------: | :------------: | :---------: |
| Basic HTML Layout          |    H     |      3hrs      |   2.5hrs    |
| Grid and Flex Layout       |    H     |      2hrs      |    2hrs     |
| Basic Nav Nar              |    H     |     1.5hrs     |    3hrs     |
| Google API Integration     |    H     |      3hrs      |    2hrs     |
| About Me(Content Addition) |    M     |      3hr       |    2hrs     |
| Get in Touch Form          |    M     |     2.5hrs     |    3hrs     |
| Responsive Design          |    H     |      3hrs      |   4.5hrs    |
| Make own Logo/Icons/Images |    L     |      3hrs      |    3hrs     |
| Project baseline           |    M     |      3hrs      |   2.5hrs    |
| Total                      |    H     |     22hrs      |   23.5hrs   |

#### PostMVP

| Component         | Priority | Estimated Time | Actual Time |
| ----------------- | :------: | :------------: | :---------: |
| Form Validation   |    H     |      2hrs      |    2hrs     |
| Bootstrap         |    H     |      4hrs      |    6hrs     |
| ~~Materialize~~   |  ~~H~~   |    ~~4hr~~     |   ~~hr~~    |
| Projects Carousal |    H     |      4hrs      |   3.5hrs    |
| Top Nav Animation |    L     |      3hrs      |    3hrs     |
| Canvas Particles  |    L     |     0.5hrs     |     0hr     |
| Testimonials      |    M     |      3hrs      |     0hr     |
| Total             |    H     |    20.5hrs     |   14.5hrs   |

## Additional Libraries

-[Google API Fonts](https://developers.google.com/fonts/) -[Font Awesome](https://fontawesome.com/v4.7.0/icons/) for social icons

- [jQuery](https://code.jquery.com/)
- Bootstrap Components - [Navbar](https://getbootstrap.com/docs/4.5/components/navbar/), [Carousel](https://getbootstrap.com/docs/4.5/components/carousel/) and [Card](https://getbootstrap.com/docs/4.5/components/card/)

## Additional Resources

- [Coolers.co](https://coolors.co/) For Color Scheme
- [onlinepngtools](https://onlinepngtools.com/create-transparent-png) - For transparent logo
- [Cloudinary](https://cloudinary.com/) - Cloud store for images

## Code Snippet

Here is the code used to display the project details from `projects` array using [Bootstrap card](https://getbootstrap.com/docs/4.5/components/card/)

```Javascript
const renderAllProjects = (projects) => {
	projects.forEach((project) => {
		const $article = $(
			`<div class="card" style="width: 18rem;">
			<img src="${project.image}" class="card-img-top" alt="{project.title} picture">
			<div class="card-body">
				<h5 class="card-title">${project.title}</h5>
				<p class="card-text">${project.description}</p>
				<p class="card-text">${project.techs}</p>
				<a href="${project.url}" class="btn btn-primary" target="_blank">View Project</a>
			</div>
		</div>`
		);
		$('.projects-main').append($article);
	});
};
```

## Issues and Resolutions

TBD - Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....

**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier  
**RESOLUTION**: Missing comma after first object in sources {} object
