import React, { useEffect } from 'react';
import Header from '.././Header';
import { connect } from 'react-redux';
import { checkAuthenticated, load_user } from '.././Auth/actions/auth.js';

const Layout = ({ checkAuthenticated, load_user, children }) => {
    useEffect(() => {
        checkAuthenticated();
        load_user();
    }, []);

    return (
        <div>
            <Header />
            {children}
        </div>
    );
};

export default connect(null, { checkAuthenticated, load_user })(Layout);
