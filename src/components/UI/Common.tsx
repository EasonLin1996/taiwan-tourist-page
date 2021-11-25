import styles from './Common.module.scss';

export const IconHover = (props) => {
	const { init, hover, className } = props;
	return (
		<div className={`${className || ''} ${styles['iconHoverWrap']}`}>
			<img alt="" src={init} /><img alt="" src={hover} />
		</div>
	);
};