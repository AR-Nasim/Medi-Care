import { createUserWithEmailAndPassword, getAuth, updateProfile } from '@firebase/auth';
import React, { useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';
initializeAuthentication();

const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const auth = getAuth();

    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }
    const handleRegistration = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password Must be at least 6 characters long.')
            return;
        }
        registerNewUser(email, password);
    }
    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                setUserName();
            })
            .catch(error => {
                setError(error.message);
            })
    }
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }

    return (
        <div className="mt-5">
            <div className="row d-flex justify-content-center pt-5">
                <div className="col-lg-7 mt-3">
                    <form action="">
                        <div className="form-floating mb-3 shadow-sm">
                            <input onBlur={handleNameChange} type="email" className="form-control" id="floatingEmail" placeholder="name@example.com" />
                            <label for="floatingEmail">Name</label>
                        </div>
                        <div className="form-floating mb-3 shadow-sm">
                            <input onBlur={handleEmailChange} type="text" className="form-control" id="floatingName" placeholder="Name" />
                            <label for="floatingName">Email Address</label>
                        </div>
                        <div class="form-floating">
                            <input onBlur={handlePasswordChange} type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                            <label for="floatingPassword">Password</label>
                        </div>
                        {
                            error && <p>{error}</p>
                        }
                        <br />
                        <button onClick={handleRegistration} className="btn-custom">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;