// useEffect(() => {
// 	window.addEventListener('scroll', changeSelector);
// 	// let observer = new IntersectionObserver(
// 	// 	(enteries) => {
// 	// 		enteries.forEach((entry) => {
// 	// 			let currentIndex = parseInt(entry.target.id);
// 	// 			console.log(currentIndex, entry.isIntersecting, entry.isVisible, entry);

// 	// 			if (entry.isIntersecting) {
// 	// 				if (currentIndex != activeIndexRef.current.active) {
// 	// 					setActiveIndex(currentIndex);
// 	// 					activeIndexRef.current.prev = activeIndexRef.current.active;
// 	// 					activeIndexRef.current.active = currentIndex;
// 	// 					// console.log(activeIndexRef.current, currentIndex);
// 	// 				}
// 	// 			} else {
// 	// 				if (activeIndexRef.current.active == currentIndex) {
// 	// 					setActiveIndex(currentIndex++);
// 	// 					activeIndexRef.current.active = currentIndex;
// 	// 				}
// 	// 			}
// 	// 		});
// 	// 	},
// 	// 	{
// 	// 		threshold: 0
// 	// 		rootMargin: '-200px',
// 	// 	}
// 	// );
// 	// Array.from(childrenRef.current.children).forEach((ele, ind) => observer.observe(ele));

// 	return () => {
// 		window.removeEventListener('scroll', changeSelector);
// 	};
// }, []);