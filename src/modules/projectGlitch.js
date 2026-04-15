import gsap from 'gsap';

const GLITCH_DURATION = 0.6;
const CLONE_COUNT = 2;

const createGlitchClones = (element) => {
	const parent = element.parentElement;
	parent.style.position = 'relative';

	const clones = [];
	for (let i = 0; i < CLONE_COUNT; i++) {
		const clone = element.cloneNode(true);
		clone.setAttribute('aria-hidden', 'true');
		clone.style.cssText = `
      position: absolute;
      left: 0;
      top: 0;
      pointer-events: none;
      opacity: 0;
      mix-blend-mode: screen;
    `;
		clone.style.color = i === 0 ? '#00FFFF' : '#FF00FF';
		parent.appendChild(clone);
		clones.push(clone);
	}

	return clones;
};

const generateGlitchFrames = (count) => {
	const frames = [];
	for (let i = 0; i < count; i++) {
		frames.push({
			x: (Math.random() - 0.5) * 20,
			y: (Math.random() - 0.5) * 4,
			skewX: (Math.random() - 0.5) * 30,
			scaleY: 0.85 + Math.random() * 0.3,
			clipPath: `inset(${Math.random() * 80}% 0 ${Math.random() * 80}% 0)`,
		});
	}
	return frames;
};

const animateGlitch = (element, clones) => {
	const frames = generateGlitchFrames(12);
	const tl = gsap.timeline();

	gsap.set(clones, { opacity: 0.8 });

	frames.forEach((frame, i) => {
		const time = (i / frames.length) * GLITCH_DURATION;

		tl.to(
			element,
			{
				x: frame.x,
				y: frame.y,
				skewX: frame.skewX,
				scaleY: frame.scaleY,
				duration: 0.03,
				ease: 'steps(1)',
			},
			time,
		);

		clones.forEach((clone, ci) => {
			const offsetX = frame.x + (ci === 0 ? -4 : 4);
			const offsetY = frame.y + (Math.random() - 0.5) * 2;

			tl.to(
				clone,
				{
					x: offsetX,
					y: offsetY,
					skewX: frame.skewX,
					scaleY: frame.scaleY,
					clipPath: frame.clipPath,
					duration: 0.03,
					ease: 'steps(1)',
				},
				time,
			);
		});
	});

	tl.to(element, {
		x: 0,
		y: 0,
		skewX: 0,
		scaleY: 1,
		duration: 0.1,
		ease: 'power4.out',
	});

	tl.to(
		clones,
		{
			opacity: 0,
			duration: 0.15,
			stagger: 0.05,
		},
		'-=0.2',
	);

	return tl;
};

const handleGlitchEnter = (element, clones) => {
	gsap.killTweensOf(element);
	gsap.killTweensOf(clones);

	gsap.set(clones, {
		opacity: 0,
		color: (i) => (i === 0 ? '#00FFFF' : '#FF00FF'),
	});

	const mainTl = animateGlitch(element, clones);

	gsap.to(
		element,
		{
			color: '#FFFFFF',
			duration: 0.1,
		},
		0,
	);

	gsap.to(
		element,
		{
			color: '#DC2626',
			duration: 0.3,
		},
		GLITCH_DURATION - 0.2,
	);
};

const handleGlitchLeave = (element, clones) => {
	gsap.killTweensOf(element);
	gsap.killTweensOf(clones);

	gsap.to(element, { x: 0, y: 0, skewX: 0, scaleY: 1, duration: 0.2 });
	gsap.to(clones, { opacity: 0, duration: 0.1 });
};

const initProjectLink = (linkElement) => {
	const clones = createGlitchClones(linkElement);
	linkElement.style.position = 'relative';

	linkElement.addEventListener('mouseenter', () =>
		handleGlitchEnter(linkElement, clones),
	);
	linkElement.addEventListener('mouseleave', () =>
		handleGlitchLeave(linkElement, clones),
	);
};

export default () => {
	const projectLinks = document.querySelectorAll('#projects-list a');
	projectLinks.forEach(initProjectLink);
};
