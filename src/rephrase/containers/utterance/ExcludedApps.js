import React from 'react';
import App from '../../components/device/AppBox';

const ExcludedApps = ({ apps }) => {
    return (
        <div className="excluded-apps">
            <div className="row">
                <p>
                    The following apps <b>should not</b> be used in your
                    command:
                </p>
                <div className="row">
                    {apps.map((app, i) => (
                        <div className="col-sm-3 app-container" key={i}>
                            <App appName={app['name']} appIcon={app['icon']} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExcludedApps;
