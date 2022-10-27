import React from 'react'
import {useState} from 'react'
import logo from './offsidelogo.png';
import {useNavigate} from 'react-router-dom'

const LoginForm = ({Login, error}) =>{
    
    const [details, setDetails] = useState({name:"", email:"", password:""})

    const navigate = useNavigate();

    const submitHandler = (e) =>{
        e.preventDefault();
        
        Login(details);
    }

    return(
        <form onSubmit={submitHandler}>
            <div className='form-inner'>
                <img src={logo} className="logo-login"></img>
                <h2>Inicio de Sesión</h2>
                
                <div className='form-group'>
                    <label htmlFor='email'>Email:</label>
                    <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Contraseña</label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
                </div>
                <input type="submit" value="Acceder" onClick={navigate('/show-users')}></input>
                
            </div>
        </form>
    )
}
export default LoginForm;