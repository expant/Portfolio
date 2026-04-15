import gsap from 'gsap';
import projectsData from '../utils/projectsData.js';

const detailsPanel = document.querySelector('#project-details');
const detailsTitle = detailsPanel.querySelector('.details-title');
const detailsDescription = detailsPanel.querySelector('.details-description');
const detailsStack = detailsPanel.querySelector('.details-stack');
const detailsButton = detailsPanel.querySelector('.details-button');
const detailsClose = detailsPanel.querySelector('.details-close');
const projectsList = document.querySelector('#projects-list');

let isOpen = false;
let currentTl = null;

gsap.set(detailsPanel, { opacity: 0, clipPath: 'circle(0% at 50% 50%)' });

const renderStack = (stack) => {
	detailsStack.innerHTML = '';
	return stack.map((tech) => {
		const tag = document.createElement('span');
		tag.className = 'px-3 py-1 bg-red-600 text-white font-BebasNeue text-sm';
		tag.textContent = tech;
		return tag;
	});
};

const populateDetails = (projectIndex) => {
	const project = projectsData[projectIndex];
	if (!project) return;

	detailsTitle.textContent = project.name;
	detailsDescription.textContent = project.description;
	detailsButton.href = project.url;

	const tags = renderStack(project.stack);
	tags.forEach((tag) => detailsStack.appendChild(tag));
};

const animateOpen = (clickX, clickY) => {
	if (currentTl) currentTl.kill();

	gsap.set([detailsTitle, detailsDescription, detailsButton], { opacity: 0 });
	gsap.set(detailsStack.children, { opacity: 0, y: 15 });

	const tl = gsap.timeline();

	tl.to(detailsPanel, { opacity: 1, duration: 0.01 })
		.to(detailsPanel, {
			clipPath: `circle(150% at ${clickX}px ${clickY}px)`,
			duration: 0.7,
			ease: 'power2.inOut',
		})
		.fromTo(
			detailsTitle,
			{ y: -30, opacity: 0 },
			{ y: 0, opacity: 1, duration: 0.4, ease: 'power2.out' },
			'-=0.25',
		)
		.fromTo(
			detailsDescription,
			{ y: 20, opacity: 0 },
			{ y: 0, opacity: 1, duration: 0.4 },
			'-=0.2',
		)
		.fromTo(
			detailsStack.children,
			{ y: 15, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				stagger: 0.08,
				duration: 0.3,
				ease: 'back.out(1.7)',
			},
			'-=0.2',
		)
		.fromTo(
			detailsButton,
			{ scale: 0.8, opacity: 0 },
			{ scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' },
			'-=0.1',
		);

	currentTl = tl;
};

const animateClose = () => {
	if (currentTl) currentTl.kill();

	const tl = gsap.timeline({
		onComplete: () => {
			gsap.set(detailsPanel, { opacity: 0, clipPath: 'circle(0% at 50% 50%)' });
			isOpen = false;
		},
	});

	tl.to(detailsPanel, {
		clipPath: 'circle(0% at 50% 50%)',
		duration: 0.4,
		ease: 'power2.in',
	}).to(detailsPanel, { opacity: 0, duration: 0.2 }, '-=0.15');

	currentTl = tl;
};

const highlightActiveProject = (index) => {
	const links = projectsList.querySelectorAll('.project-link');
	links.forEach((link, i) => {
		gsap.set(link, { color: i === index ? '#FFFFFF' : '#DC2626' });
	});
};

const openDetails = (projectIndex, event) => {
	if (isOpen) return;
	isOpen = true;

	const rect = projectsList.getBoundingClientRect();
	const clickX = event.clientX - rect.left;
	const clickY = event.clientY - rect.top;

	populateDetails(projectIndex);
	highlightActiveProject(projectIndex);
	animateOpen(clickX, clickY);
};

const handleClose = () => {
	if (!isOpen) return;
	highlightActiveProject(-1);
	animateClose();
};

const handleProjectClick = (event) => {
	const link = event.target.closest('.project-link');
	if (!link) return;

	event.preventDefault();
	const projectIndex = parseInt(link.dataset.project, 10);
	openDetails(projectIndex, event);
};

export default () => {
	projectsList.addEventListener('click', handleProjectClick);
	detailsClose.addEventListener('click', (e) => {
		e.stopPropagation();
		handleClose();
	});

	detailsPanel.addEventListener('click', (e) => {
		if (e.target === detailsPanel) handleClose();
	});

	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape' && isOpen) handleClose();
	});
};
