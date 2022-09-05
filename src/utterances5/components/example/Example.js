import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Device from '../device/Device';
import './Example.scss';


export default class Home extends React.Component {

    getApps() {
        return [
            { name: 'Navigation', icon: 'car-front', about: 'Directions, traffic conditions, time to travel, estimate time of arrival, estimate time of departure, and distance.' },
            { name: 'Weather', icon: 'cloud-sun', about: 'Information on weather, weather conditions, and temperature.' },
            { name: 'Calendar', icon: 'calendar-date', about: 'Information on calendar meetings and availability, and related actions (e.g., create, update and delete a calendar entry).' },
            { name: 'Reminders', icon: 'bookmark', about: 'Information on reminders and related actions (e.g., create, update, and delete reminders).' },
            { name: 'Messages', icon: 'chat', about: 'Information about messages and related actions (e.g., compose and reply to messages).' },
            { name: 'Music', icon: 'music-note-beamed', about: 'Songs, playlist, podcasts, and related actions (e.g., start, stop, play, pause, restart, etc).' },
            { name: 'Timer', icon: 'alarm', about: 'Information about alarms and timers, and related actions (e.g., create, update, delete, snooze, etc).' },
            { name: 'Mail', icon: 'envelope', about: 'Information on emails, mail boxes, and related actions (e.g. compose, reply and forward).' },
            { name: 'Smart Home', icon: 'house', about: 'Information on smart home devices and related actions (e.g., control the a/c, the boiler, unlock the door, etc).' },
            { name: 'Events & Tickets', icon: 'ticket-perforated', about: 'Information about public events, and purchasing tickets to some event types.' },
            { name: 'Shopping', icon: 'cart', about: 'Information on products and related actions (e.g., check the availability of products, and purchasing products).' },
            { name: 'Map & Places', icon: 'pin-map', about: 'Information about public and private locations (e.g., start date and time, addresses, proximity, etc).' },
        ];
    }

    getIcon(caption) {
        const apps = this.getApps();
        const app = apps.find(a => a['name'] === caption);
        const icon = app && app['icon'];
        return icon;
    }

    render() {
        const { title, description, examples, disableClickApps } = this.props;
        const hasExamples = Boolean(examples) && examples.length > 0;
        const apps = this.getApps();

        return (
            <div className="example">
                <div className="row">
                    <div className="col">
                        <div className="header text-center">
                            <h1>{title}</h1>
                            <div>{description}</div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Device disableClickApps={disableClickApps} apps={apps} />
                    </div>
                    {hasExamples &&
                        <div className="col align-self-center">
                            <h5 className='examples-header'>Examples:</h5>
                            <div className="card card-block">
                                <Carousel variant="dark" interval="10000">
                                    {examples.map((example, i) => (
                                        <Carousel.Item className="instruction-example positive-example" key={i}>
                                            <div className="vertical-center-container">
                                                <div className="vertical-center">
                                                    <div className="example-title utterance-text text-center">{example['title']}</div>
                                                    {example['caption'] &&
                                                        <div className="example-caption utterance-text text-center">{this.getIcon(example['caption']) && <span className={`bi bi-${this.getIcon(example['caption'])}`} />}{example['caption']}<span /></div>
                                                    }
                                                </div>
                                            </div>
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}