import React, { useEffect, useRef, useState } from 'react';
import styles from './ScrollSpy.module.scss';
import PropTypes from 'prop-types';

const propTypes = {
    headContent: PropTypes.arrayOf(PropTypes.string),
    childContent: PropTypes.node,
    isStickyHead: PropTypes.bool,
    threshold: PropTypes.number,
    onScrollHeadClick: PropTypes.func,
    onHeadChange: PropTypes.func,
};

const defaultProps = {
    headContent: '',
    isStickyHead: false,
    threshold: 0,
    onScrollHeadClick: () => { },
    onHeadChange: () => { },
};

function ScrollSpy({
    headContent,
    childContent,
    isStickyHead,
    threshold,
    onScrollHeadClick,
    onHeadChange,
}) {
    const [activeIndex, setActiveIndex] = useState(0);
    const childrenRef = useRef(null);
    const parentRef = useRef(null);

    const onHeadClick = (id) => {
        const activeBoundingRect = childrenRef?.current?.children[id]?.offsetTop;
        const scrollToPosition = parentRef.current.offsetHeight;
        window.scrollTo({
            top: activeBoundingRect - (isStickyHead ? scrollToPosition : 0),
            behavior: 'smooth',
        });
        onScrollHeadClick && onScrollHeadClick(id);
    };

    useEffect(() => {
        let headerOffsetHeight = isStickyHead ? parentRef.current.offsetHeight + threshold : 0;
        let triggerMargin = `-${headerOffsetHeight}px 0px -${window.innerHeight - headerOffsetHeight
            }px 0px`;
        let observer = new IntersectionObserver(
            (enteries) => {
                enteries.forEach((entry) => {
                    let currentIndex = parseInt(entry.target.id);
                    // console.log(currentIndex, entry.isIntersecting, entry.isVisible, entry);
                    if (entry.isIntersecting) {
                        setActiveIndex(currentIndex);
                        onHeadChange && onHeadChange(currentIndex);
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
								${styles.headData} ${id === activeIndex ? styles.activeheadData : ''}
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
