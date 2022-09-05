/**
 * https://www.w3schools.com/howto/howto_css_devices.asp
 */

import React from 'react';
import './Device.scss';


export default class Device extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectAppIndex: null
        };
        this.handleClickApp = this.handleClickApp.bind(this);
        this.handleCloseApp = this.handleCloseApp.bind(this);
    }

    handleClickApp(e) {
        e.preventDefault();
        const { disableClickApps } = this.props;
        if (disableClickApps) {
            this.setState({ selectAppIndex: null });
            return;
        }

        const index = parseInt(e.currentTarget.getAttribute('data-app-index'))
        this.setState({ selectAppIndex: index });
    }

    handleCloseApp(e) {
        e.preventDefault();
        this.setState({ selectAppIndex: null });
    }

    renderAppsGrid(appsInRow = 3) {
        const { apps } = this.props;

        let html = [];
        for (let i = 0; i < apps.length; i += appsInRow) {
            html.push(
                <div className='row' key={i}>
                    <div className="col-sm app" data-app-index={i} onClick={this.handleClickApp}>
                        <div className="app-icon text-center"><span className={`bi bi-${apps[i]['icon']}`} /></div>
                        <div className="app-name text-center">{apps[i]['name']}</div>
                    </div>
                    {((i + 1) < apps.length) &&
                        <div className="col-sm app" data-app-index={i + 1} onClick={this.handleClickApp}>
                            <div className="app-icon text-center"><span className={`bi bi-${apps[i + 1]['icon']}`} /></div>
                            <div className="app-name text-center">{apps[i + 1]['name']}</div>
                        </div>
                    }
                    {((i + 2) < apps.length) &&
                        <div className="col-sm app" data-app-index={i + 2} onClick={this.handleClickApp}>
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

    renderShowApp(index) {
        const { apps } = this.props;
        const app = apps[index];

        return (
            <div className="app-help">
                <div className="row">
                    <div className="col">
                        <div className="app-help-content">
                            <div className="close-icon" onClick={this.handleCloseApp}><span className="bi bi-x-circle" /></div>
                            <h3><span className={`bi bi-${app['icon']}`} />{app['name']}</h3>
                            <p>{app['about']}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        const { disableClickApps } = this.props;
        const { selectAppIndex } = this.state;

        return (
            <div>
                <div className="smartphone">
                    <div className="content">
                        <div className="apps">
                            <div className="container">
                                <div>{this.renderAppsGrid()}</div>
                            </div>
                        </div>
                        {selectAppIndex !== null &&
                            <div className="app-help">
                                {this.renderShowApp(selectAppIndex)}
                            </div>
                        }
                    </div>
                </div>
                {!disableClickApps &&
                    <div className='device-help text-center'>Click any of the apps for more information</div>
                }
            </div>
        );
    }
}