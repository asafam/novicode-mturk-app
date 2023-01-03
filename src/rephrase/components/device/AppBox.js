import React from 'react';
import './AppBox.scss';

const AppBox = ({ appName, appIcon }) => {
    return (
        <div className="app-box">
            <div className="app-icon text-center">
                <span className={`bi bi-${appIcon}`} />
            </div>
            <div className="app-name text-center">{appName}</div>
        </div>
    );
};

export default AppBox;
