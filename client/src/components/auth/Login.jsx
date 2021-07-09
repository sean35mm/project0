import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';

const Login = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: ''
	});

	const { email, password } = formData;

	const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();
		console.log('Success');
	};

	return (
		<Fragment>
			<h1 className='large text-primary'>Sign In</h1>
			<p className='lead'>
				<i className='fas fa-user'></i> Sign Into Your Account
			</p>
			<form className='form' onSubmit={(e) => onSubmit(e)}>
				<div className='form-group'>
					<input
						type='email'
						placeholder='Email Address'
						name='email'
						required
						value={email}
						onChange={(e) => onChange(e)}
					/>
				</div>
				<div className='form-group'>
					<input
						type='password'
						placeholder='Password'
						minLength='6'
						required
						value={password}
						name='password'
						onChange={(e) => onChange(e)}
					/>
				</div>
				<input type='submit' value='Login' className='btn btn-primary' />
			</form>
			<p className='my-1'>
				Don't have an account? <Link to='/register'>Sign Up</Link>
			</p>
		</Fragment>
	);
};

export default Login;
