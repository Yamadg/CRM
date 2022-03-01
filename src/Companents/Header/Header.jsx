import React from 'react';

import style from './Header.module.scss'

import Button from "../Button/Button";

const Header = () => {
	return (
		<header className={style.header}>
			<div className={style.header__wrapper}>
			<div className={style.header__title}>
				<h1>My product</h1>
				<h6>Product table</h6>
			</div>
			<button className={style.header__button}>
				<svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg" className={style.header__button__svg}>
					<path d="M11 1H3C2.46957 1 1.96086 1.21071 1.58579 1.58579C1.21071 1.96086 1 2.46957 1 3V19C1 19.5304 1.21071 20.0391 1.58579 20.4142C1.96086 20.7893 2.46957 21 3 21H15C15.5304 21 16.0391 20.7893 16.4142 20.4142C16.7893 20.0391 17 19.5304 17 19V7L11 1Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
					<path d="M11 1V7H17" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
					<path d="M9 17V11" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
					<path d="M6 14H12" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
					Create a product
			</button>
			</div>

		</header>
	);
};

export default Header;