import React, { useState } from 'react'
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { registerRequest } from '../../actions';
import './RegisterStyle.css';

const Register = ({registerRequest}) => {

	const navigate = useNavigate()

	const initialValue = {
		email: '',
		name: '',
		password: '',
	}

	const [registerValues, setRegisterValues] = useState({initialValue})

	const handleInput = (event) => {
		setRegisterValues({
			...registerValues,
			[event.target.name]: event.target.value
		})
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		registerRequest(registerValues)
		navigate('/')
	}

	return (
		<>
			<section className='register'>
				<section className='register__container'>
					<h2>Regístrate</h2>
					<form className='register__container--form' onSubmit={handleSubmit}>
						<input 
							name='name' 
							className='input' 
							type='text' 
							placeholder='Nombre' 
							onChange={handleInput}
						/>
						<input 
							name='email' 
							className='input' 
							type='text' 
							placeholder='Correo' 
							onChange={handleInput}
						/>
						<input 
							name='password' 
							className='input' 
							type='password' 
							placeholder='Contraseña' 
							onChange={handleInput}
						/>
						<button className='button'>Registrarme</button>
					</form>
					<Link to='/login'>
						Iniciar sesión
					</Link>
				</section>
			</section>
		</>
	)
}

const mapDispatchToProps = {
	registerRequest,
};

export default connect(null, mapDispatchToProps)(Register)