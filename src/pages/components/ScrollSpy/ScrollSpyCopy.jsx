import React, { useEffect, useRef, useState } from 'react';
import styles from './ScrollSpy.module.scss';
import PropTypes from 'prop-types';

const propTypes = {
    headContent: PropTypes.arrayOf(PropTypes.string),
    childContent: PropTypes.node,
    shouldSticky: PropTypes.bool,
};

const defaultProps = {
    headContent: '',
    shouldSticky: false,
};

function ScrollSpy({ headContent, childContent, shouldSticky }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const childrenRef = useRef(null);
    const parentRef = useRef(null);
    const activeIndexRef = useRef(0);

    const onHeadClick = (id) => {
        const activeBoundingRect = childrenRef?.current?.children[id]?.getBoundingClientRect();
        const scrollToPosition = activeBoundingRect.top - parentRef.current.offsetHeight;
        window.scrollBy({
            top: scrollToPosition,
            behavior: 'smooth',
        });
    };
    const changeSelector = () => {
        const activeBoundingRect =
            childrenRef?.current?.children[activeIndexRef.current]?.getBoundingClientRect();
        const topHeadOffset = parentRef?.current?.offsetHeight + 100; // skeptical
        const isNotFirstChild = activeIndexRef.current > 0;
        const isNotLastChild = activeIndexRef.current < childrenRef.current.children.length - 1;
        if (activeBoundingRect.height + activeBoundingRect.top < topHeadOffset && isNotLastChild) {
            setActiveIndex(activeIndexRef.current + 1);
            activeIndexRef.current = activeIndexRef.current + 1;
            console.log('a');
        } else if (activeBoundingRect.top > topHeadOffset && isNotFirstChild) {
            setActiveIndex(activeIndexRef.current - 1);
            activeIndexRef.current = activeIndexRef.current - 1;
            console.log('b');
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', changeSelector);
        return () => {
            window.removeEventListener('scroll', changeSelector);
        };
    }, []);

    const scrollSpyHead = (Sticky = false) => {
        return (
            <nav
                ref={parentRef}
                className={`
					${styles.headWrapper} 
					${Sticky ? styles.stickyHeaderStyles : ''}
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
                    <div key={id} id={id}>
                        {cont}
                    </div>
                ))}
            </div>
        );
    };
    return (
        <div className={styles.scrollSpy}>
            {shouldSticky && scrollSpyHead(true)}
            {scrollSpyHead()}
            {srollSpyContent()}
        </div>
    );
}

ScrollSpy.propTypes = propTypes;
ScrollSpy.defaultProps = defaultProps;

export default ScrollSpy;
