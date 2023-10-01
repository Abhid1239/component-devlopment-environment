import React, { useCallback, useEffect, useRef, useState } from 'react';
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
    const childrensRef = useRef(null);
    const tabsRef = useRef(null);

    const onHeadClick = useCallback((id) => {
        const activeBoundingRect = childrensRef?.current?.children[id]?.offsetTop;
        const scrollToPosition = tabsRef.current.offsetHeight;
        window.scrollTo({
            top: activeBoundingRect - (isStickyHead ? scrollToPosition : 0),
            behavior: 'smooth',
        });
        onScrollHeadClick && onScrollHeadClick(id);
    }, []);

    useEffect(() => {
        let headerOffsetHeight = isStickyHead ? tabsRef.current.offsetHeight + threshold : 0;
        let triggerMargin = `-${headerOffsetHeight}px 0px -${window.innerHeight - headerOffsetHeight
            }px 0px`;
        let isScrollableContainer =
            tabsRef.current.offsetWidth > window.innerWidth ||
            tabsRef.current.offsetWidth > childrensRef.current.offsetWidth;
        let observer = new IntersectionObserver(
            (enteries) => {
                enteries.forEach((entry) => {
                    let currentIndex = parseInt(entry.target.id);
                    // console.log(currentIndex, entry.isIntersecting, entry.isVisible, entry);
                    if (entry.isIntersecting) {
                        isStickyHead &&
                            isScrollableContainer &&
                            tabsRef.current.children[currentIndex].scrollIntoView({
                                behavior: 'smooth',
                                inline: 'center',
                            });
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
        Array.from(childrensRef.current.children).forEach((ele) => observer.observe(ele));

        () => {
            Array.from(childrensRef.current.children).forEach((ele) => observer.unobserve(ele));
        };
    }, []);

    const scrollSpyHead = () => {
        return (
            <nav
                ref={tabsRef}
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
            <div ref={childrensRef}>
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
