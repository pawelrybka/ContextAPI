import { ReactNode } from 'react';
import styles from './MainLayout.module.css';
import React from 'react';

type MainLayoutProps = {
	children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
	return <div className={styles.root}>{children}</div>;
};

export default MainLayout

