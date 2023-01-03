import React from 'react';
import { getTaskDescription } from '../../data/tasks';
import Examples from '../examples/Examples';
import { getExamples } from '../../data/examples';
import './Help.scss';

export default class Instructions extends React.Component {
    getTitle(mode) {
        if (mode === 'rewrite-simple-complex') {
            return <span>Rewrite a Simple Command as a Complex Command</span>;
        } else if (mode === 'rewrite-complex-different-apps') {
            return <span>Rewrite a Complex Command in Different Apps</span>;
        } else {
            return <span>Write a Complex Command</span>;
        }
    }

    getRequirments() {
        return [
            {
                title: 'Relevant',
                desc: 'The different parts in your complex command should be related to one another. '
            },
            {
                title: 'Can be done by a virtual assistant',
                desc: 'Think of instructions that are possible for a virtual assistant to perform. As a rule of thumb, if a virtual assistant (like Siri or Alexa) can do each of the simple commands that make the complex command, then it is valid.'
            },
            {
                title: 'Useful',
                desc: 'Think about real-life scenarios where you could use this ideal virtual assistance in your favor.'
            },
            {
                title: 'Diverse',
                desc: 'Don’t repeat yourself. Think of commands in different apps or different commands in the same app. '
            },
            {
                title: 'Unambiguous',
                desc: 'A person can clearly understand the intents within your instruction.'
            },
            {
                title: 'Referential',
                desc: 'Instead of repeating a mention (for example, to a name, a place or a time) use a pronoun or other referring expression.'
            }
        ];
    }

    getExamples(mode) {
        const examples = getExamples(mode);
        switch (mode) {
            case 'rewrite-complex-different-apps':
                return examples.map((example) => ({
                    title: (
                        <div>
                            <p>
                                <span className="label text-blue">
                                    Original:
                                </span>
                                {example['complexOrig']}
                            </p>
                            <p>
                                <span className="label text-purple">New:</span>
                                {example['complexNew']}
                            </p>
                        </div>
                    ),
                    caption: example['caption']
                }));
            case 'rewrite-simple-complex':
                return examples.map((example) => ({
                    title: (
                        <div>
                            <p>
                                <span className="label text-blue">Simple:</span>
                                {example['simple']}
                            </p>
                            <p>
                                <span className="label text-purple">
                                    Complex:
                                </span>
                                {example['complex']}
                            </p>
                        </div>
                    ),
                    caption: example['caption']
                }));
            default:
                return [];
        }
    }

    render() {
        const { mode } = this.props;
        const title = this.getTitle(mode);
        const requirements = this.getRequirments();
        const taskDescription = getTaskDescription(mode);
        const examples = this.getExamples(mode);

        return (
            <div className="help page">
                <div className="row">
                    <div className="col">
                        <div className="header text-center">
                            <h1 className="text-center">
                                <span className="title-small">Your task:</span>
                                {title}
                            </h1>
                            <div>{taskDescription}</div>
                        </div>
                    </div>
                </div>
                {examples && (
                    <div className="row examples">
                        <Examples examples={examples} interval={10000} />
                    </div>
                )}
                <div className="row">
                    <div className="col">
                        <h3>Requirements</h3>
                        <ol className="requirements">
                            {requirements.map((requirement, i) => (
                                <li className="requirement" key={i}>
                                    <div className="requirement-title bold">
                                        {requirement['title']}
                                    </div>
                                    <div className="requirement-desc">
                                        {requirement['desc']}
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        );
    }
}
