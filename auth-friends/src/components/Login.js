import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
	const [ credentials, setCredentials ] = useState({ username: '', password: '' });

	const handleChange = (event) => {
		setCredentials({
			...credentials,
			[event.target.name]: event.target.value
		});
		console.log('credentials', credentials);
	};

	const login = (event) => {
		event.preventDefault();
		axios // * had to add /api/login in order to get my api call to work.
			.post('http://localhost:5000/api/login', credentials)
			.then((res) => {
				localStorage.setItem('token', res.data.payload);
				console.log(res);
				this.props.history.push('/friends');
			})
			.catch((err) => console.log(err.response));
	};

	return (
		<div>
			<form onSubmit={login}>
				<label>User Name</label>
				<input
					type="text"
					name="username"
					placeholder="username"
					onChange={handleChange}
					value={credentials.username}
				/>

				<label>Password</label>
				<input
					type="password"
					name="password"
					placeholder="password"
					onChange={handleChange}
					value={credentials.password}
				/>

				<input type="submit" />
			</form>
		</div>
	);
};

export default Login;
