import React, { useEffect, useRef } from 'react';
import styles from './ScrollSpy.module.scss';
import PropTypes from 'prop-types';

const propTypes = {
    headContent: PropTypes.arrayOf(PropTypes.string),
    childContent: PropTypes.node,
    isStickyHead: PropTypes.bool,
    threshold: PropTypes.number,
};

const defaultProps = {
    headContent: '',
    isStickyHead: true,
    threshold: 20,
};

function ScrollSpy({ headContent, childContent, isStickyHead, threshold }) {
    const childrenRef = useRef(null);
    const parentRef = useRef(null);
    const activeIndexRef = useRef(0);

    const onHeadClick = (id) => {
        const activeBoundingRect = childrenRef?.current?.children[id]?.offsetTop;
        const scrollToPosition = parentRef.current.offsetHeight + threshold;
        window.scrollTo({
            top: activeBoundingRect - (isStickyHead ? scrollToPosition : 0),
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        let headerOffsetHeight = isStickyHead ? parentRef.current.offsetHeight + threshold : 0;
        let triggerMargin = `-${headerOffsetHeight}px 0px -${window.innerHeight - headerOffsetHeight
            }px 0px`;
        let observer = new IntersectionObserver(
            (enteries) => {
                enteries.forEach((entry) => {
                    let currentIndex = parseInt(entry.target.id);
                    console.log(currentIndex, entry.isIntersecting, entry.isVisible, entry);
                    if (entry.isIntersecting) {
                        let tabRef = parentRef?.current;
                        tabRef.children[activeIndexRef.current].dataset['active'] = false;
                        tabRef.children[currentIndex].dataset['active'] = true;
                        activeIndexRef.current = currentIndex;
                    }
                });
            },
            {
                threshold: 0,
                rootMargin: triggerMargin,
            },
        );
        Array.from(childrenRef.current.children).forEach((ele) => observer.observe(ele));
    }, []);

    const scrollSpyHead = () => {
        return (
            <nav
                ref={parentRef}
                className={`
					${styles.headWrapper}
					${isStickyHead ? styles.stickyHeaderStyles : ''}
				`}
            >
                {headContent &&
                    headContent.map((cont, id) => (
                        <div
                            key={cont}
                            onClick={() => onHeadClick(id)}
                            className={`
								${styles.headData} 
							`}
                        >
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
                    <div key={id} id={id} className={styles.containerStyles}>
                        {cont}
                    </div>
                ))}
            </div>
        );
    };
    return (
        <div className={styles.scrollSpy}>
            {scrollSpyHead()}
            {srollSpyContent()}
        </div>
    );
}

ScrollSpy.propTypes = propTypes;
ScrollSpy.defaultProps = defaultProps;

export default ScrollSpy;
