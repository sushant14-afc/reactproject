import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ Component: Component, ...rest }) => {
    return <Route
        {...rest}
        render={props =>
            isAuthenticated() && isAuthenticated().user.role===0 ?
                (<Component{...props} />) : (<Redirect to={{
                    pathname: "/signin",
                    state: { from: props.location }
                }} />)}/>
};

export default PrivateRoute;