import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Device from '../device/Device';
import './Example.scss';


export default class Home extends React.Component {

    getApps() {
        return [
            { name: 'Map & Navigation', icon: 'truck' }, { name: 'Weather', icon: 'cloud-sun' }, { name: 'Calendar', icon: 'calendar-date' },
            { name: 'Reminders', icon: 'bookmark' }, { name: 'Messages', icon: 'chat' }, { name: 'Music & Podcasts', icon: 'music-note-beamed' },
            { name: 'Health', icon: 'heart-pulse' }, { name: 'Mail', icon: 'envelope' }, { name: 'Smart Home', icon: 'house' },
            { name: 'Events & Tickets', icon: 'ticket-perforated' }, { name: 'Shopping', icon: 'cart' }, { name: 'photos', icon: 'camera' },
        ];
    }

    getIcon(caption) {
        const apps = this.getApps();
        const app = apps.find(a => a['name'] === caption);
        const icon = app && app['icon'];
        return icon;
    }

    render() {
        const { title, description, examples } = this.props;
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
                        <Device apps={apps} />
                    </div>
                    {hasExamples &&
                        <div className="col align-self-center">
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