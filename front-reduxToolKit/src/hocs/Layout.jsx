import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/navigation/Footer';
import { useDispatch } from 'react-redux';
import {authCheck, authGoogle, authLoader, authRefresh } from '../redux/thunks/authThunk';
import queryString from 'query-string';



const Layout = (props) => {

    let location = useLocation();

    const dispatch = useDispatch()

    useEffect(() => {
        const values = queryString.parse(location.search);

        const state = values.state ? values.state : null;
        const code = values.code ? values.code : null;

        console.log(state);
        console.log(code);

        if (state && code){
            dispatch(authGoogle(state,code));
        }else{
            dispatch(authRefresh({ access: localStorage.getItem('access') }));
            dispatch(authCheck({ access: localStorage.getItem('access') }));
            dispatch(authLoader({ access: localStorage.getItem('access') }));

        }
    }, [location]);


    return(
        <div>

                <Navbar/>
                <ToastContainer autoClose={5000} />
                {props.children}
                <Footer/>

        </div>
    )
}



export default Layout