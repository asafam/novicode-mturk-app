/**
 * https://www.w3schools.com/howto/howto_css_devices.asp
 */

import React from 'react';
import './Device.scss';


export default class Device extends React.Component {

    renderAppsGrid(appsInRow = 3) {
        const { apps } = this.props;
        let html = [];
        for (let i = 0; i < apps.length; i += appsInRow) {
            html.push(
                <div className='row' key={i}>
                    <div className="col-sm app">
                        <div className="app-icon text-center"><span className={`bi bi-${apps[i]['icon']}`} /></div>
                        <div className="app-name text-center">{apps[i]['name']}</div>
                    </div>
                    {((i + 1) < apps.length) &&
                        <div className="col-sm app">
                            <div className="app-icon text-center"><span className={`bi bi-${apps[i + 1]['icon']}`} /></div>
                            <div className="app-name text-center">{apps[i + 1]['name']}</div>
                        </div>
                    }
                    {((i + 2) < apps.length) &&
                        <div className="col-sm app">
                            <div className="app-icon text-center"><span className={`bi bi-${apps[i + 2]['icon']}`} /></div>
                            <div className="app-name text-center">{apps[i + 2]['name']}</div>
                        </div>
                    }
                </div>
            );
        }
        return (
            <div className="apps">
                {html}
            </div>
        );
    }

    render() {


        return (
            <div className="smartphone">
                <div className="content">
                    <div className="apps">
                        <div className="container">
                            {this.renderAppsGrid()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}