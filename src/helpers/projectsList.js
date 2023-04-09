import pizzeria from "./../img/projects/pizzeria.png";

import todolist from "./../img/projects/todolist.png";

import project03 from "./../img/projects/03.jpg";
import project03Big from "./../img/projects/03-big.jpg";

import project04 from "./../img/projects/04.jpg";
import project04Big from "./../img/projects/04-big.jpg";

import project05 from "./../img/projects/05.jpg";
import project05Big from "./../img/projects/05-big.jpg";

import project06 from "./../img/projects/06.jpg";
import project06Big from "./../img/projects/06-big.jpg";

const projects = [
	{
		title: 'Pizzeria',
		skills: 'React, mockAPI',
		img: pizzeria,
		imgBig: pizzeria,
		gitHubLink: 'https://shalaginov-dev.github.io/pizzeria/',
	},
	{
		title: 'Todolist',
		img: todolist,
		imgBig: todolist,
		skills: 'React, Node.js, MySql',
		gitHubLink: 'https://shalaginov-dev.github.io/todolist',
	},
	{
		title: '#',
		img: project03,
		imgBig: project03Big,
		skills: 'Vue JS, Node.js, MongoDB',
		gitHubLink: 'https://github.com',
	},
	{
		title: '#',
		img: project04,
		imgBig: project04Big,
		skills: 'React Native',
	},
	{
		title: '#',
		img: project05,
		imgBig: project05Big,
		skills: 'HTML, SCSS, JS',
	},
	{
		title: '#',
		img: project06,
		imgBig: project06Big,
		skills: 'React, PHP, MySql',
	},
];

export {projects}