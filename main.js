import React from 'react';
import { Route, Router, Switch, Redirect,withRouter } from 'react-router-dom';
import history from '../history'
import Header from './header_footer/Navbar';
import Footer from './header_footer/footer';
import Addblogs from './forms/addblog';
import AddMedicine from './forms/addmedicine';
import home from './home_page/home';
//import Blog from './blog_page_article/blog_page';
import about from './about/about';
import { connect } from 'react-redux';
import ngoList from './ngoList/ngoList';
import medicinelist from './medicinesList/medicinelist';
import DonorSpeaks from './donor_speaks/DonorSpeaks';
import ngoBeneficiary from './ngo_beneficiary/ngoBeneficiary';
import Login from './Login_signup/Login';
import Signup from './Login_signup/Signup';
import Error from './Login_signup/Error';
import blog from './blog_page_article/blog_page';
import BlogArticle from './blog_page_article/blog_article';
import WTH from './waystohelp/wth'

import "./main.css";



const Main = (props)=>{

    let routes = null;
    if(props.role===null){
        routes = <>
            <Route exact path ='/Login' component={Login}   />
            <Route exact path ='/Signup' component={Signup}   />
            
        </>
    }else{
        routes = <>
        <Route exact path='/donorspeaks' component={DonorSpeaks} />  
        <Route path='/ngoBeneficiary' component={ngoBeneficiary} />
        <Route path='/ngoList' component={ngoList} /> 
        <Route path='/medicinelist' component={medicinelist} /> 
        <Route path='/blog' component={blog} />      
        <Route path='/BlogArticle' component={BlogArticle} />
        { props.role==="ngo" && <Route exact path='/addblog' component={Addblogs} />}
        </>
    }

        return(
            <div className="page-container">
                <div className="content-wrap">
                    <Router history={history}>
                        <Header/>
                        <Switch>
                        <Route exact path ='/home' component={home} />
                        <Route exact path='/about' component={about} /> 
                        <Route exact path='/wth' component={WTH} /> 
                        <Route exact path = '/Error' component={Error} /> 
                        {routes}
                        <Redirect to="/home"/>
                        </Switch>
                        <Footer/>
                    </Router>
                </div>
            </div>
        );
}


const mapStateToProps = state =>{
    return {
        role : state.user.role
    }
}

export default connect(mapStateToProps)(Main); 
