import React, {Component} from 'react';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import {auth, SignInWithGoogle} from "../../firebase/firebase.util";
import './sign-in.styles.scss';

class SignIn extends Component {

    constructor(props){
        super(props);

        this.state={
            email:'',
            password:''
        }
    }

    handleSubmit= async event =>{
        event.preventDefault();
        const {email, password}= this.state;

        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'', password:''});
        }catch (e) {
            console.log(e);
        }

    }

    handleChange= event =>{
       const {value,name}= event.target;
       this.setState({[name]:value})

    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name='email'
                        value={this.state.email} required
                       handleChange={this.handleChange}
                        label='Email'
                    />

                    <FormInput
                        type="password"
                        name='password'
                        value={this.state.password} required
                        handleChange={this.handleChange}
                        label='PassWord'
                    />

                    <div className="buttons">
                        <CustomButton type="submit" value='Submit Form'>SIGN IN</CustomButton>
                        <CustomButton
                            onClick={SignInWithGoogle}
                            isGoogleSignIn >
                            SIGN IN WITH GOOGLE</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;