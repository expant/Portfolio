import './style.css';
import navigation from './src/modules/navigation';
import infiniteMarquee from './src/modules/infiniteMarquee';
import follower from './src/modules/follower';
import textNodes from './src/modules/textNodes';
import preloader from './src/modules/preloader';
import projectGlitch from './src/modules/projectGlitch';

document.addEventListener('DOMContentLoaded', () => {
	preloader();
	navigation();
	infiniteMarquee();
	follower();
	textNodes();
	projectGlitch();
});
