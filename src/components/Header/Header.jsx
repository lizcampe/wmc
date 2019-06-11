import React from 'react';

import Logo from './Logo/Logo';
import UserArea from './UserArea/UserArea';

const Header =()=> (
	<div className= "header">
	<h1> My App's Name </h1>
	<UserArea/>
	<Logo/>
	</div>
	);


export default Header;