import React from "react";
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email : '',
            password : ''
        }
    }

    // for sign in with google start
    // unsubscribeFromAuth = null;

    // componentDidMount() {
    //     this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
    //     this.setState({ currentUser: user });
    //     });
    // }

    // componentWillUnmount() {
    //     this.unsubscribeFromAuth();
    // }
    // end sign in with google

    handleSubmit = event =>{
         event.preventDefault();

         this.setState({email : '' , password : ''});
    }

    handleChange = event =>{
        const {value,name} = event.target;

        this.setState({[name]:value});
    }

    render (){
        return(
            <div className='sign-in'>
                <h2>I Already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                     name='email'
                     type='email'
                     value={this.state.email}
                     handleChnage={this.handleChange}
                     label='email'
                     required />
                  

                    <FormInput 
                    name='password' 
                    type='password' 
                    value={this.state.password}
                    handleChnage={this.handleChange}
                    label='password'
                    required />
                    
                    <div className='buttons'>
                        <CustomButton type='submit' > Sign in </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> 
                            {''}
                            Sign in with google {''}
                        </CustomButton>
                    </div>
                    

                </form>
            </div>
        )
    }

}

export default SignIn;