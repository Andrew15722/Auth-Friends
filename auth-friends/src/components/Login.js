import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
	const login = (event) => {
		event.preventDefault();
		axios.post('http://localhost:5000');
	};

	return (
		<div>
			<form>
				<label>User Name</label>
				<input type="text" name="username" placeholder="username" />

				<label>Password</label>
				<input type="password" name="password" placeholder="password" />
			</form>
		</div>
	);
};

export default Login;
