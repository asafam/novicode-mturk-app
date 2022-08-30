import React from 'react';
import './Help.scss';


export default class Instructions extends React.Component {

    getRequirments() {
        return [
            {
                title: "Relevant",
                desc: "The different parts in your complex request should be related to one another. "
            },
            {
                title: "Can be done by a virtual assistant",
                desc: "Think of instructions that are possible for a virtual assistant to perform. As a rule of thumb, if a virtual assistant (like Siri or Alexa) can do each of the simple instructions that make the complex instruction, then it is valid."
            },
            {
                title: "Useful",
                desc: "Think about real-life scenarios where you could use this ideal virtual assistance in your favor."
            },
            {
                title: "Diverse",
                desc: "Don’t repeat yourself. Think of instructions in different apps. "
            },
            {
                title: "Unambiguous",
                desc: "A person can clearly understand the intents within your instruction."
            },
        ]
    }

    render() {
        const requirements = this.getRequirments();

        return (
            <div className="instructions">
                <div className="row">
                    <div className="col">
                        <div className="header text-center">
                            <h1 className='text-center'><span className="title-small">Your task:</span>Write Complex instructions</h1>
                            <p>Now, you think of something you can ask your
                                virtual assistant that involves multiple apps
                                (or the same app multiple times).</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h3>Requirements</h3>
                        <ol className="requirements">
                            {requirements.map((requirement, i) => (
                                <li className="requirement" key={i}>
                                    <div className="requirement-title bold">{requirement['title']}</div>
                                    <div className="requirement-desc">{requirement['desc']}</div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        );
    }
}