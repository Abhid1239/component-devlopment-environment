import React, { useCallback, useEffect, useRef, useState } from 'react';
import styles from './ScrollSpy.module.scss';

const propTypes = {};
function ScrollSpy({ headContent, childContent, shouldSticky = false }) {
	const [activeIndex, setActiveIndex] = useState(0);
	const childrenRef = useRef(null);
	const parentRef = useRef(null);
	const activeIndexRef = useRef(0);

	const onHeadClick = (id) => {
		let childProps = childrenRef.current && childrenRef.current.children[id].getBoundingClientRect();
		window.scrollBy({ top: childProps.top - parentRef.current.offsetHeight, behavior: 'smooth' });
	};
	const changeSelector = () => {
		let childProps = childrenRef.current && childrenRef.current.children[activeIndexRef.current].getBoundingClientRect();
		if (childProps.height + childProps.top - parentRef.current.offsetHeight - 100 < 0 && activeIndexRef.current < childrenRef.current.children.length - 1) {
			setActiveIndex(activeIndexRef.current + 1);
			activeIndexRef.current = activeIndexRef.current + 1;
		} else if (childProps.top > parentRef.current.offsetHeight + 100 && activeIndexRef.current !== 0) {
			setActiveIndex(activeIndexRef.current - 1);
			activeIndexRef.current = activeIndexRef.current - 1;
		}
		// console.log(childProps.height + childProps.top - parentRef.current.offsetHeight - 100, activeIndexRef.current);
		// console.log(childProps.height, childProps.top, parentRef.current.offsetHeight, 100);
	};
	useEffect(() => {
		document.addEventListener('scroll', () => changeSelector());
		// let observer = new IntersectionObserver(
		// 	(enteries) => {
		// 		enteries.forEach((entry) => {
		// 			let currentIndex = parseInt(entry.target.id);
		// 			console.log(currentIndex, entry.isIntersecting, entry.isVisible, entry);

		// 			if (entry.isIntersecting) {
		// 				if (currentIndex != activeIndexRef.current.active) {
		// 					setActiveIndex(currentIndex);
		// 					activeIndexRef.current.prev = activeIndexRef.current.active;
		// 					activeIndexRef.current.active = currentIndex;
		// 					// console.log(activeIndexRef.current, currentIndex);
		// 				}
		// 			} else {
		// 				if (activeIndexRef.current.active == currentIndex) {
		// 					setActiveIndex(currentIndex++);
		// 					activeIndexRef.current.active = currentIndex;
		// 				}
		// 			}
		// 		});
		// 	},
		// 	{
		// 		threshold: 0
		// 		rootMargin: '-200px',
		// 	}
		// );
		// Array.from(childrenRef.current.children).forEach((ele, ind) => observer.observe(ele));
	}, []);

	const scrollSpyHead = (Sticky = false) => {
		return (
			<nav ref={parentRef} className={`${styles.headWrapper} ${Sticky ? styles.stickyHeaderStyles : ''}`}>
				{headContent &&
					headContent.map((cont, id) => (
						<div key={cont} onClick={() => onHeadClick(id)} className={`${styles.headData} ${id === activeIndex ? styles.activeheadData : ''}`}>
							{cont}
						</div>
					))}
			</nav>
		);
	};
	const srollSpyContent = () => {
		return (
			<div ref={childrenRef}>
				{childContent.map((cont, id) => (
					<div key={id} id={id}>
						{cont}
					</div>
				))}
			</div>
		);
	};
	return (
		<div className={styles.scrollSpy}>
			<p>
				Id nisi est do proident reprehenderit aliquip. Nisi nostrud labore nostrud ad nostrud exercitation reprehenderit minim. Sit exercitation ex ad reprehenderit laboris. Dolore
				reprehenderit laboris adipisicing cupidatat adipisicing et cillum sint reprehenderit adipisicing ex. Officia velit excepteur ea sit mollit esse. Pariatur sint ipsum in ea ex cillum
				officia sit cillum et magna incididunt do. Sint esse voluptate proident culpa sit sint reprehenderit mollit velit pariatur enim est mollit. Labore nulla et nisi occaecat consequat
				aliquip do in tempor sint laboris et quis.
			</p>
			<p>
				Id nisi est do proident reprehenderit aliquip. Nisi nostrud labore nostrud ad nostrud exercitation reprehenderit minim. Sit exercitation ex ad reprehenderit laboris. Dolore
				reprehenderit laboris adipisicing cupidatat adipisicing et cillum sint reprehenderit adipisicing ex. Officia velit excepteur ea sit mollit esse. Pariatur sint ipsum in ea ex cillum
				officia sit cillum et magna incididunt do. Sint esse voluptate proident culpa sit sint reprehenderit mollit velit pariatur enim est mollit. Labore nulla et nisi occaecat consequat
				aliquip do in tempor sint laboris et quis.
			</p>{' '}
			<p>
				Id nisi est do proident reprehenderit aliquip. Nisi nostrud labore nostrud ad nostrud exercitation reprehenderit minim. Sit exercitation ex ad reprehenderit laboris. Dolore
				reprehenderit laboris adipisicing cupidatat adipisicing et cillum sint reprehenderit adipisicing ex. Officia velit excepteur ea sit mollit esse. Pariatur sint ipsum in ea ex cillum
				officia sit cillum et magna incididunt do. Sint esse voluptate proident culpa sit sint reprehenderit mollit velit pariatur enim est mollit. Labore nulla et nisi occaecat consequat
				aliquip do in tempor sint laboris et quis.
			</p>
			<p>
				Id nisi est do proident reprehenderit aliquip. Nisi nostrud labore nostrud ad nostrud exercitation reprehenderit minim. Sit exercitation ex ad reprehenderit laboris. Dolore
				reprehenderit laboris adipisicing cupidatat adipisicing et cillum sint reprehenderit adipisicing ex. Officia velit excepteur ea sit mollit esse. Pariatur sint ipsum in ea ex cillum
				officia sit cillum et magna incididunt do. Sint esse voluptate proident culpa sit sint reprehenderit mollit velit pariatur enim est mollit. Labore nulla et nisi occaecat consequat
				aliquip do in tempor sint laboris et quis.
			</p>
			<p>
				Id nisi est do proident reprehenderit aliquip. Nisi nostrud labore nostrud ad nostrud exercitation reprehenderit minim. Sit exercitation ex ad reprehenderit laboris. Dolore
				reprehenderit laboris adipisicing cupidatat adipisicing et cillum sint reprehenderit adipisicing ex. Officia velit excepteur ea sit mollit esse. Pariatur sint ipsum in ea ex cillum
				officia sit cillum et magna incididunt do. Sint esse voluptate proident culpa sit sint reprehenderit mollit velit pariatur enim est mollit. Labore nulla et nisi occaecat consequat
				aliquip do in tempor sint laboris et quis.
			</p>{' '}
			<p>
				Id nisi est do proident reprehenderit aliquip. Nisi nostrud labore nostrud ad nostrud exercitation reprehenderit minim. Sit exercitation ex ad reprehenderit laboris. Dolore
				reprehenderit laboris adipisicing cupidatat adipisicing et cillum sint reprehenderit adipisicing ex. Officia velit excepteur ea sit mollit esse. Pariatur sint ipsum in ea ex cillum
				officia sit cillum et magna incididunt do. Sint esse voluptate proident culpa sit sint reprehenderit mollit velit pariatur enim est mollit. Labore nulla et nisi occaecat consequat
				aliquip do in tempor sint laboris et quis.
			</p>{' '}
			<p>
				Id nisi est do proident reprehenderit aliquip. Nisi nostrud labore nostrud ad nostrud exercitation reprehenderit minim. Sit exercitation ex ad reprehenderit laboris. Dolore
				reprehenderit laboris adipisicing cupidatat adipisicing et cillum sint reprehenderit adipisicing ex. Officia velit excepteur ea sit mollit esse. Pariatur sint ipsum in ea ex cillum
				officia sit cillum et magna incididunt do. Sint esse voluptate proident culpa sit sint reprehenderit mollit velit pariatur enim est mollit. Labore nulla et nisi occaecat consequat
				aliquip do in tempor sint laboris et quis.
			</p>
			<p>
				Id nisi est do proident reprehenderit aliquip. Nisi nostrud labore nostrud ad nostrud exercitation reprehenderit minim. Sit exercitation ex ad reprehenderit laboris. Dolore
				reprehenderit laboris adipisicing cupidatat adipisicing et cillum sint reprehenderit adipisicing ex. Officia velit excepteur ea sit mollit esse. Pariatur sint ipsum in ea ex cillum
				officia sit cillum et magna incididunt do. Sint esse voluptate proident culpa sit sint reprehenderit mollit velit pariatur enim est mollit. Labore nulla et nisi occaecat consequat
				aliquip do in tempor sint laboris et quis.
			</p>{' '}
			<p>
				Id nisi est do proident reprehenderit aliquip. Nisi nostrud labore nostrud ad nostrud exercitation reprehenderit minim. Sit exercitation ex ad reprehenderit laboris. Dolore
				reprehenderit laboris adipisicing cupidatat adipisicing et cillum sint reprehenderit adipisicing ex. Officia velit excepteur ea sit mollit esse. Pariatur sint ipsum in ea ex cillum
				officia sit cillum et magna incididunt do. Sint esse voluptate proident culpa sit sint reprehenderit mollit velit pariatur enim est mollit. Labore nulla et nisi occaecat consequat
				aliquip do in tempor sint laboris et quis.
			</p>{' '}
			<p>
				Id nisi est do proident reprehenderit aliquip. Nisi nostrud labore nostrud ad nostrud exercitation reprehenderit minim. Sit exercitation ex ad reprehenderit laboris. Dolore
				reprehenderit laboris adipisicing cupidatat adipisicing et cillum sint reprehenderit adipisicing ex. Officia velit excepteur ea sit mollit esse. Pariatur sint ipsum in ea ex cillum
				officia sit cillum et magna incididunt do. Sint esse voluptate proident culpa sit sint reprehenderit mollit velit pariatur enim est mollit. Labore nulla et nisi occaecat consequat
				aliquip do in tempor sint laboris et quis.
			</p>
			<p>
				Id nisi est do proident reprehenderit aliquip. Nisi nostrud labore nostrud ad nostrud exercitation reprehenderit minim. Sit exercitation ex ad reprehenderit laboris. Dolore
				reprehenderit laboris adipisicing cupidatat adipisicing et cillum sint reprehenderit adipisicing ex. Officia velit excepteur ea sit mollit esse. Pariatur sint ipsum in ea ex cillum
				officia sit cillum et magna incididunt do. Sint esse voluptate proident culpa sit sint reprehenderit mollit velit pariatur enim est mollit. Labore nulla et nisi occaecat consequat
				aliquip do in tempor sint laboris et quis.
			</p>{' '}
			<p>
				Id nisi est do proident reprehenderit aliquip. Nisi nostrud labore nostrud ad nostrud exercitation reprehenderit minim. Sit exercitation ex ad reprehenderit laboris. Dolore
				reprehenderit laboris adipisicing cupidatat adipisicing et cillum sint reprehenderit adipisicing ex. Officia velit excepteur ea sit mollit esse. Pariatur sint ipsum in ea ex cillum
				officia sit cillum et magna incididunt do. Sint esse voluptate proident culpa sit sint reprehenderit mollit velit pariatur enim est mollit. Labore nulla et nisi occaecat consequat
				aliquip do in tempor sint laboris et quis.
			</p>
			{shouldSticky && scrollSpyHead(true)}
			{scrollSpyHead()}
			{srollSpyContent()}
			<p>
				Id nisi est do proident reprehenderit aliquip. Nisi nostrud labore nostrud ad nostrud exercitation reprehenderit minim. Sit exercitation ex ad reprehenderit laboris. Dolore
				reprehenderit laboris adipisicing cupidatat adipisicing et cillum sint reprehenderit adipisicing ex. Officia velit excepteur ea sit mollit esse. Pariatur sint ipsum in ea ex cillum
				officia sit cillum et magna incididunt do. Sint esse voluptate proident culpa sit sint reprehenderit mollit velit pariatur enim est mollit. Labore nulla et nisi occaecat consequat
				aliquip do in tempor sint laboris et quis.
			</p>
			<p>
				Id nisi est do proident reprehenderit aliquip. Nisi nostrud labore nostrud ad nostrud exercitation reprehenderit minim. Sit exercitation ex ad reprehenderit laboris. Dolore
				reprehenderit laboris adipisicing cupidatat adipisicing et cillum sint reprehenderit adipisicing ex. Officia velit excepteur ea sit mollit esse. Pariatur sint ipsum in ea ex cillum
				officia sit cillum et magna incididunt do. Sint esse voluptate proident culpa sit sint reprehenderit mollit velit pariatur enim est mollit. Labore nulla et nisi occaecat consequat
				aliquip do in tempor sint laboris et quis.
			</p>{' '}
			<p>
				Id nisi est do proident reprehenderit aliquip. Nisi nostrud labore nostrud ad nostrud exercitation reprehenderit minim. Sit exercitation ex ad reprehenderit laboris. Dolore
				reprehenderit laboris adipisicing cupidatat adipisicing et cillum sint reprehenderit adipisicing ex. Officia velit excepteur ea sit mollit esse. Pariatur sint ipsum in ea ex cillum
				officia sit cillum et magna incididunt do. Sint esse voluptate proident culpa sit sint reprehenderit mollit velit pariatur enim est mollit. Labore nulla et nisi occaecat consequat
				aliquip do in tempor sint laboris et quis.
			</p>{' '}
			<p>
				Id nisi est do proident reprehenderit aliquip. Nisi nostrud labore nostrud ad nostrud exercitation reprehenderit minim. Sit exercitation ex ad reprehenderit laboris. Dolore
				reprehenderit laboris adipisicing cupidatat adipisicing et cillum sint reprehenderit adipisicing ex. Officia velit excepteur ea sit mollit esse. Pariatur sint ipsum in ea ex cillum
				officia sit cillum et magna incididunt do. Sint esse voluptate proident culpa sit sint reprehenderit mollit velit pariatur enim est mollit. Labore nulla et nisi occaecat consequat
				aliquip do in tempor sint laboris et quis.
			</p>
			<p>
				Id nisi est do proident reprehenderit aliquip. Nisi nostrud labore nostrud ad nostrud exercitation reprehenderit minim. Sit exercitation ex ad reprehenderit laboris. Dolore
				reprehenderit laboris adipisicing cupidatat adipisicing et cillum sint reprehenderit adipisicing ex. Officia velit excepteur ea sit mollit esse. Pariatur sint ipsum in ea ex cillum
				officia sit cillum et magna incididunt do. Sint esse voluptate proident culpa sit sint reprehenderit mollit velit pariatur enim est mollit. Labore nulla et nisi occaecat consequat
				aliquip do in tempor sint laboris et quis.
			</p>{' '}
			<p>
				Id nisi est do proident reprehenderit aliquip. Nisi nostrud labore nostrud ad nostrud exercitation reprehenderit minim. Sit exercitation ex ad reprehenderit laboris. Dolore
				reprehenderit laboris adipisicing cupidatat adipisicing et cillum sint reprehenderit adipisicing ex. Officia velit excepteur ea sit mollit esse. Pariatur sint ipsum in ea ex cillum
				officia sit cillum et magna incididunt do. Sint esse voluptate proident culpa sit sint reprehenderit mollit velit pariatur enim est mollit. Labore nulla et nisi occaecat consequat
				aliquip do in tempor sint laboris et quis.
			</p>{' '}
			<p>
				Id nisi est do proident reprehenderit aliquip. Nisi nostrud labore nostrud ad nostrud exercitation reprehenderit minim. Sit exercitation ex ad reprehenderit laboris. Dolore
				reprehenderit laboris adipisicing cupidatat adipisicing et cillum sint reprehenderit adipisicing ex. Officia velit excepteur ea sit mollit esse. Pariatur sint ipsum in ea ex cillum
				officia sit cillum et magna incididunt do. Sint esse voluptate proident culpa sit sint reprehenderit mollit velit pariatur enim est mollit. Labore nulla et nisi occaecat consequat
				aliquip do in tempor sint laboris et quis.
			</p>
			<p>
				Id nisi est do proident reprehenderit aliquip. Nisi nostrud labore nostrud ad nostrud exercitation reprehenderit minim. Sit exercitation ex ad reprehenderit laboris. Dolore
				reprehenderit laboris adipisicing cupidatat adipisicing et cillum sint reprehenderit adipisicing ex. Officia velit excepteur ea sit mollit esse. Pariatur sint ipsum in ea ex cillum
				officia sit cillum et magna incididunt do. Sint esse voluptate proident culpa sit sint reprehenderit mollit velit pariatur enim est mollit. Labore nulla et nisi occaecat consequat
				aliquip do in tempor sint laboris et quis.
			</p>{' '}
			<p>
				Id nisi est do proident reprehenderit aliquip. Nisi nostrud labore nostrud ad nostrud exercitation reprehenderit minim. Sit exercitation ex ad reprehenderit laboris. Dolore
				reprehenderit laboris adipisicing cupidatat adipisicing et cillum sint reprehenderit adipisicing ex. Officia velit excepteur ea sit mollit esse. Pariatur sint ipsum in ea ex cillum
				officia sit cillum et magna incididunt do. Sint esse voluptate proident culpa sit sint reprehenderit mollit velit pariatur enim est mollit. Labore nulla et nisi occaecat consequat
				aliquip do in tempor sint laboris et quis.
			</p>{' '}
			<p>
				Id nisi est do proident reprehenderit aliquip. Nisi nostrud labore nostrud ad nostrud exercitation reprehenderit minim. Sit exercitation ex ad reprehenderit laboris. Dolore
				reprehenderit laboris adipisicing cupidatat adipisicing et cillum sint reprehenderit adipisicing ex. Officia velit excepteur ea sit mollit esse. Pariatur sint ipsum in ea ex cillum
				officia sit cillum et magna incididunt do. Sint esse voluptate proident culpa sit sint reprehenderit mollit velit pariatur enim est mollit. Labore nulla et nisi occaecat consequat
				aliquip do in tempor sint laboris et quis.
			</p>
			<p>
				Id nisi est do proident reprehenderit aliquip. Nisi nostrud labore nostrud ad nostrud exercitation reprehenderit minim. Sit exercitation ex ad reprehenderit laboris. Dolore
				reprehenderit laboris adipisicing cupidatat adipisicing et cillum sint reprehenderit adipisicing ex. Officia velit excepteur ea sit mollit esse. Pariatur sint ipsum in ea ex cillum
				officia sit cillum et magna incididunt do. Sint esse voluptate proident culpa sit sint reprehenderit mollit velit pariatur enim est mollit. Labore nulla et nisi occaecat consequat
				aliquip do in tempor sint laboris et quis.
			</p>{' '}
			<p>
				Id nisi est do proident reprehenderit aliquip. Nisi nostrud labore nostrud ad nostrud exercitation reprehenderit minim. Sit exercitation ex ad reprehenderit laboris. Dolore
				reprehenderit laboris adipisicing cupidatat adipisicing et cillum sint reprehenderit adipisicing ex. Officia velit excepteur ea sit mollit esse. Pariatur sint ipsum in ea ex cillum
				officia sit cillum et magna incididunt do. Sint esse voluptate proident culpa sit sint reprehenderit mollit velit pariatur enim est mollit. Labore nulla et nisi occaecat consequat
				aliquip do in tempor sint laboris et quis.
			</p>
		</div>
	);
}

ScrollSpy.propTypes = propTypes;

export default ScrollSpy;
