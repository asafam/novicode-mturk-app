import React from 'react';
import { getInstructions } from '../../data/instructions';
import Examples from '../examples/Examples';
import './Help.scss';

export default class Instructions extends React.Component {
    getTitle(mode) {
        if (mode === 'rewrite-simple-complex') {
            return <span>Rewrite a Simple Command as a Complex Command</span>;
        } else if (mode === 'rephrase') {
            return <span>Rephrase a Complex Command</span>;
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
        if (mode === 'rewrite-simple-complex') {
            return [
                {
                    title: (
                        <div>
                            <p>
                                <span className="label text-blue">Simple:</span>
                                Will it rain tomorrow?
                            </p>
                            <p>
                                <span className="label text-purple">
                                    Complex:
                                </span>
                                Remind me to bring an umbrella if it rains
                                tomorrow in Manhattan.
                            </p>
                        </div>
                    ),
                    caption: 'Turn to a Condition'
                },
                {
                    title: (
                        <div>
                            <p>
                                <span className="label text-blue">Simple:</span>
                                Route to the mall?
                            </p>
                            <p>
                                <span className="label text-purple">
                                    Complex:
                                </span>
                                Route to the mall and from the mall to the
                                doctor's office.
                            </p>
                        </div>
                    ),
                    caption: 'Turn to a Sequence'
                },
                {
                    title: (
                        <div>
                            <p>
                                <span className="label text-blue">Simple:</span>
                                Remove reminder to pick up my sister.
                            </p>
                            <p>
                                <span className="label text-purple">
                                    Complex:
                                </span>
                                Remove all reminders for this week to pick up my
                                sister.
                            </p>
                        </div>
                    ),
                    caption: 'Turn to a Repitition'
                }
            ];
        } else if (mode === 'rephrase') {
        } else {
            return null;
        }
    }

    render() {
        const { mode } = this.props;
        const title = this.getTitle(mode);
        const requirements = this.getRequirments();
        const instruction = getInstructions(mode);
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
                            <div>{instruction}</div>
                        </div>
                    </div>
                </div>
                {examples && (
                    <div className="row examples">
                        <Examples examples={examples} />
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
