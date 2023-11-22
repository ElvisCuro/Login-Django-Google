import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { useDispatch } from 'react-redux';
import { authFacebook } from '../../redux/thunks/authThunk';

const Facebook = () => {
    const dispatch = useDispatch();
    let location = useLocation();

    useEffect(() => {
        const values = queryString.parse(location.search);
        const state = values.state ? values.state : null;
        const code = values.code ? values.code : null;

        console.log('State: ' + state);
        console.log('Code: ' + code);

        if (state && code) {
            dispatch(authFacebook({state, code}));
        }
    }, [location]);

    return (
        <div className='container'>
            <div className='jumbotron mt-5'>
                <h1 className='display-4'>Welcome to Auth System!</h1>
                <p className='lead'>This is an incredible authentication system with production level features!</p>
                <hr className='my-4' />
                <p>Click the Log In button</p>
                <Link class='btn btn-primary btn-lg' to='/login' role='button'>Login</Link>
            </div>
        </div>
    );
};

export default Facebook