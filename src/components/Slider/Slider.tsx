import React from "react";
import styles from "./Slider.module.scss";
import sliderData from "../../data/data";

export const Slider = () => {
	return (
		<div className={styles.slider}>
			<div className={styles.slider__container}>
				{sliderData.map((item, index) => (
					<p className={styles.slider__item} key={index}>{item}</p>
				))}
			</div>
			<div className={styles.slider__container}>
				{sliderData.map((item, index) => (
					<p className={styles.slider__item} key={index}>{item}</p>
				))}
			</div>
		</div>
	);
};
