import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';
import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import initializeAuthentication from '../Firebase/firebase.init';
initializeAuthentication();

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const auth = getAuth();

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }
    const handleRegistration = e => {
        e.preventDefault();
          processLogin(email, password);
      }
    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                history.push(redirect_uri);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <div className="mt-5 pt-5">
            <div className="row d-flex justify-content-center pt-4">
                <h2>Please <span>Login</span></h2>
                <div className="col-lg-7 mt-3">
                    <form action="">
                        <div className="form-floating mb-3 shadow-sm">
                            <input onBlur={handleEmailChange} type="email" className="form-control" id="floatingEmail" placeholder="name@example.com" />
                            <label for="floatingEmail">Email Address</label>
                        </div>
                        <div class="form-floating">
                            <input onBlur={handlePasswordChange} type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                            <label for="floatingPassword">Password</label>
                        </div>
                        {
                            error && <p>{error}</p>
                        }
                        <br />
                        <button onClick={handleRegistration} className="btn-custom">Login</button>
                    </form>
                </div>
            </div>
            <p className="mt-3">New User? <Link to='/register'>Register Now</Link></p>
            <br />
            <button onClick={handleGoogleLogin} className="btn btn-custom">Google Sign In</button>
        </div>
    );
};

export default Login;