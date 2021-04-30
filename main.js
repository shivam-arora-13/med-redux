import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
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
        routes = <Switch>
            <Route path ='/' exact component={home} />
            <Route path='/about' exact component={about} /> 
            <Route path='/wth' exact component={WTH} /> 
            <Route path = '/Error' exact component={Error} /> 
            <Route path ='/Login' exact component={Login}   />
            <Route path ='/Signup' exact component={Signup}   />
            <Redirect to="/"/>
            </Switch>
    }else{
        routes = <Switch>
        <Route path ='/' exact component={home} />
        <Route path='/about' exact component={about} /> 
        <Route path='/wth' exact component={WTH} /> 
        <Route path = '/Error' exact component={Error} /> 
        <Route path='/donorspeaks' exact component={DonorSpeaks} />  
        <Route path='/ngoBeneficiary' exact component={ngoBeneficiary} />
        <Route path='/ngoList'  exactcomponent={ngoList} /> 
        <Route path='/medicinelist' exact component={medicinelist} /> 
        <Route path='/blog' exact component={blog} />      
        <Route path='/BlogArticle' exact component={BlogArticle} />
        { props.role==="ngo" && <Route path='/addblog' exact component={Addblogs} />}
        <Redirect to="/"/>
        </Switch>
    }

        return(
            <div className="page-container">
                <div className="content-wrap">
                        <Header/>
                        {routes}
                        <Footer/>
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
