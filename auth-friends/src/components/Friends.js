import React, { useState } from 'react';

const Friends = () => {
	const [ friends, setFriends ] = useState({ id: '', name: '', age: '', email: '' });

	// const handleChange = () => {};

	return (
		<div>
			<form>
				<label>id </label>
				<input type="text" name="id" placeholder="id" value={friends.id} />

				<label>name </label>
				<input type="text" name="name" placeholder="name" value={friends.name} />

				<label>age </label>
				<input type="text" name="age" placeholder="age" value={friends.age} />

				<label>email </label>
				<input type="email" name="email" placeholder="email" value={friends.email} />

				<input type="submit" />
			</form>
		</div>
	);
};

export default Friends;
