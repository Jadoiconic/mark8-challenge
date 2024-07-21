
import React from 'react';
import styles from './Skeleton.module.css'; 

const Skeleton: React.FC = () => {
    return (
        <div className={styles.skeletonContainer}>
            <div className={styles.skeletonHeader}></div>
            <div className={styles.skeletonBody}>
                <div className={styles.skeletonLine}></div>
                <div className={styles.skeletonLine}></div>
                <div className={styles.skeletonLine}></div>
            </div>
            <div className={styles.skeletonHeader}></div>
            <div className={styles.skeletonBody}>
                <div className={styles.skeletonLine}></div>
                <div className={styles.skeletonLine}></div>
                <div className={styles.skeletonLine}></div>
            </div>
            <div className={styles.skeletonHeader}></div>
            <div className={styles.skeletonBody}>
                <div className={styles.skeletonLine}></div>
                <div className={styles.skeletonLine}></div>
                <div className={styles.skeletonLine}></div>
            </div>
            <div className={styles.skeletonHeader}></div>
            <div className={styles.skeletonBody}>
                <div className={styles.skeletonLine}></div>
                <div className={styles.skeletonLine}></div>
                <div className={styles.skeletonLine}></div>
            </div>
            <div className={styles.skeletonHeader}></div>
            <div className={styles.skeletonBody}>
                <div className={styles.skeletonLine}></div>
                <div className={styles.skeletonLine}></div>
                <div className={styles.skeletonLine}></div>
            </div>
            <div className={styles.skeletonHeader}></div>
            <div className={styles.skeletonBody}>
                <div className={styles.skeletonLine}></div>
                <div className={styles.skeletonLine}></div>
                <div className={styles.skeletonLine}></div>
            </div>
            <div className={styles.skeletonHeader}></div>
            <div className={styles.skeletonBody}>
                <div className={styles.skeletonLine}></div>
                <div className={styles.skeletonLine}></div>
                <div className={styles.skeletonLine}></div>
            </div>
            <div className={styles.skeletonHeader}></div>
            <div className={styles.skeletonBody}>
                <div className={styles.skeletonLine}></div>
                <div className={styles.skeletonLine}></div>
                <div className={styles.skeletonLine}></div>
            </div>
        </div>
    );
};

export default Skeleton;
