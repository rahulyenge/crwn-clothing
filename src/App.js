import React from 'react';
import './App.css';
import { Switch , Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SingInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth,createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './components/redux/user/user.action';

import Header from './components/header/header.component';

class App extends React.Component {
 
  unsubscribeFromAuth = null;

  componentDidMount(){
  const {setCurrentUser} = this.props;
   this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
       if(userAuth){
          const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot(snapShot => {
             setCurrentUser ({
                id: snapShot.id,
                ...snapShot.data()
              })
          });
          
       }
       
       setCurrentUser( userAuth );
      });
  }
  componentWillMount(){
  //  this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div >
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route  path='/shop' component={ShopPage}/>
          <Route exact path='/signin'  render={()=> this.props.currentUser ? (<Redirect to='/' />) : (<SingInAndSignUp />)}/>
        </Switch>
        
      </div>
    );
  }
  
}  

const mapStateToProps = ({user}) =>({
  currentUser: user.currentUser
})

const mapDispatchToProps = display =>({
  setCurrentUser: user => display(setCurrentUser(user))

})

export default connect(mapStateToProps,mapDispatchToProps)(App);
