import styles from './Button.module.css';
import dangerStyles from './Danger.module.css';

const Button = (props) => {
	let extraClass = null;
	if (props.variant === 'danger') {
		extraClass = dangerStyles.danger;
	}
	return (
		<button className={`${styles.button} ${extraClass}`}>
			{props.children}
		</button>
	);
};

export default Button;
