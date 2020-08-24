import React from 'react';
import './styles.scss';

const Header = (props) => {
    return (
        <header data-test="headerComponent">
            <div className="wrap">
                <div className="logo">
                    <span data-test="logo">Posts Site</span>
                </div>
            </div>
        </header>
    )
};

export default Header;