import React from 'react';
import Device from '../device/Device';
import Examples from '../examples/Examples';
import { getApps } from '../../data/apps.js';
import './Command.scss';

export default class Command extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            apps: getApps(true, props.excludedApps)
        };
    }

    getIcon(caption) {
        const { apps } = this.state;
        const app = apps.find((a) => a['name'] === caption);
        const icon = app && app['icon'];
        return icon;
    }

    render() {
        const { title, description, examples, showAppHelp } = this.props;
        const { apps } = this.state;
        const hasExamples = Boolean(examples) && examples.length > 0;

        return (
            <div className="command">
                <div className="row">
                    <div className="col">
                        <div className="header text-center">
                            <h1>{title}</h1>
                            <div>{description}</div>
                        </div>
                    </div>
                </div>
                <div className="row body">
                    <div className="col">
                        <Device showAppHelp={showAppHelp} apps={apps} />
                    </div>
                    {hasExamples && (
                        <div className="col">
                            <Examples examples={examples} apps={apps} />
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
