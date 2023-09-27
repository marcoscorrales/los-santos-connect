import React from "react";
import styles from "./Slider.module.scss";
import sliderData from "../../data/data";
import { FaPlus } from "react-icons/fa";

export const Slider = () => {
	return (
		<div className={styles.slider}>
			<div className={styles.slider__container}>
				{sliderData.map((item, index) => (
					<p className={styles.slider__item} key={index}>
						<FaPlus color="#1D8348" size={20} />
						{item}
					</p>
				))}
			</div>
			<div className={styles.slider__container}>
				{sliderData.map((item, index) => (
					<p className={styles.slider__item} key={index}>
						<FaPlus color="#1D8348" size={20} />
						{item}
					</p>
				))}
			</div>
		</div>
	);
};
