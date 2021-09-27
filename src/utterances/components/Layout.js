import React from 'react';
import Sidebar from './Sidebar';

const Layout = (header, progress, children) => {
    return (
        <div className="utterances">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col">
                            <Sidebar status={status} />
                        </div>
                        <div className="col">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
    );
}