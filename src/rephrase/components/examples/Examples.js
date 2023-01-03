import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Examples.scss';

export default class Examples extends React.Component {
    getIcon(caption) {
        const { apps } = this.props;
        if (!apps) return null;

        const app = apps.find((a) => a['name'] === caption);
        const icon = app && app['icon'];
        return icon;
    }

    render() {
        const { examples, interval } = this.props;

        return (
            <div className="example">
                <div className="col align-self-center">
                    <h5 className="examples-header">Examples:</h5>
                    <div className="card card-block instruction-examples">
                        <Carousel variant="dark" interval={interval || "1000"}>
                            {examples.map((example, i) => (
                                <Carousel.Item
                                    className="instruction-example positive-example"
                                    key={i}
                                >
                                    <div className="vertical-center-container">
                                        <div className="vertical-center">
                                            <div className="example-title utterance-text text-center">
                                                {example['title']}
                                            </div>
                                            {example['caption'] && (
                                                <div className="example-caption utterance-text text-center">
                                                    {this.getIcon(
                                                        example['caption']
                                                    ) && (
                                                        <span
                                                            className={`bi bi-${this.getIcon(
                                                                example[
                                                                    'caption'
                                                                ]
                                                            )}`}
                                                        />
                                                    )}
                                                    {example['caption']}
                                                    <span />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        );
    }
}
