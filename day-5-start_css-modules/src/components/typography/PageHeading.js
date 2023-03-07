import styles from './PageHeading.module.css';

const PageHeading = (props) => {
	return (
		<h2 className={styles.heading}>{props.children}</h2>
	);
};

export default PageHeading;
