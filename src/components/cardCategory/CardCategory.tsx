import React from 'react';
import { Typography } from 'antd';
import styles from './CardCategory.module.scss';

interface PropsType {
	data: {
		title: string,
		imgUrl: string,
	}
}

export const CardCategory: React.FC<PropsType> = ({ data }) => {
	return (
		<div style={{position: "relative"}}>
			<img src={data.imgUrl} alt={data.title} />
			<span className={styles['title-box']}>
				<Typography.Title level={2} className={styles['title']}>{data.title}</Typography.Title>
			</span>
		</div>
	)
}
