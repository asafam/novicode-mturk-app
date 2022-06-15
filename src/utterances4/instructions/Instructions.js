import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import './Instructions.scss';


export default class Instructions extends React.Component {

    render() {
        const { onClickBack, onClickNext } = this.props;

        return (
            <div className="instructions help">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col">
                            <h1>Instructions</h1>
                            <h4>Please write complex instructions that you would ask an ideal virtual assistant.</h4>
                        </div>
                    </div>

                    <div className="row mb-5">
                        <div className="col-6">
                            <div className="instruction defintion">
                                <h3><span className="text-purple">Complex Instuctions</span> are</h3>
                                <div className="instruction-body">
                                    <ul>
                                        <li>Made of <span className="text-purple">multiple</span> simple instructions. A simple instruction performs a single action or query
                                            you'd ask a virtual assistance (e.g., send text message or check the weather).</li>
                                        <li>Executed in a specific <span className="text-purple">order</span>: in sequences, upon conditions, or run in loops.</li>
                                        <li>Ideally, we want instructions that will require a human more than a single mobile app action or a Goole search to complete</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="instruction examples">
                                <div className="row">
                                    <Carousel variant="dark" interval="10000">
                                        <Carousel.Item className="instruction-example positive-example">
                                            <div className="vertical-center-container">
                                                <div className="vertical-center">
                                                    <div className="example-title utterance-text text-center"><span className="text-green bi bi-check" />Archive every unread email from Amazon and Zillow in my inbox</div>
                                                    <div className="example-caption text-green">
                                                        <div><span className="bold">Is complex</span> since it incorporates 2 simple virtual assistant instructions:
                                                            <ol>
                                                                <li>Archive every unread email from Amazon</li>
                                                                <li>Archive every unread email from Zillow</li>
                                                            </ol>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Carousel.Item>
                                        <Carousel.Item className="instruction-example positive-example">
                                            <div className="vertical-center-container">
                                                <div className="vertical-center">
                                                    <div className="example-title utterance-text text-center"><span className="text-green bi bi-check" />Get directions to the Eagles game if they play home today</div>
                                                    <div className="example-caption text-green">
                                                        <div><span className="bold">Is complex:</span>
                                                            <ol>
                                                                <li>Check the Eagles games schedule whether they play home today</li>
                                                                <li>If the answer to (1) is positive, then get directions to the team's game</li>
                                                                <li>To perform (2), it should also get the location of the Eagles game (i.e., the actual stadium address)</li>
                                                            </ol>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Carousel.Item>
                                        <Carousel.Item className="instruction-example negative-example">
                                            <div className="vertical-center-container">
                                                <div className="vertical-center">
                                                    <div className="example-title utterance-text text-center"><span className="text-red bi bi-x" />Remind me to submit my essay at 11:00pm</div>
                                                    <div className="example-caption text-red">
                                                        <div><span className="bold">Is not complex</span>. This is a simple instruction that performs a single action</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Carousel.Item>
                                        <Carousel.Item className="instruction-example negative-example">
                                            <div className="vertical-center-container">
                                                <div className="vertical-center">
                                                    <div className="example-title utterance-text text-center"><span className="text-red bi bi-x" />Tell me if tomorrow is Groundhog Day</div>
                                                    <div className="example-caption text-red">
                                                        <div><span className="bold">Is not complex</span>. This is a simple instruction that performs a single action</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mb-5">
                        <div className="col-8">
                            <div className="instruction">
                                <h3>Interesting!</h3>
                                <div className="instruction-body">
                                    <p>Think about real-life scenarios where you could use this ideal virtual assistance in your favor.</p>
                                    <p>Don't try to “test” the system’s intelligence, but rather try to come up with information-dependant
                                        instructions for actual real-world needs and scenarios.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mb-5">
                        <div className="col-6">
                            <div className="instruction">
                                <h3>Diverse</h3>
                                <div className="instruction-body">
                                    <p>Think of instructions that express commands and queries in different domains.
                                        Your final complex instruction can also be comprised of different domains.</p>
                                    <ul>
                                        <li><span className="text-purple bold">Commands</span> are instructions ordering something to be done</li>
                                        <li><span className="text-purple bold">Queries</span> are information-seeking instructions. Feel free to include  <span className="text-purple">
                                            specifics</span> (e.g., "the yellow ...", "every", "earliest", etc), <span className="text-purple">conditions</span> or <span className="text-purple">
                                                aggregation operations</span> (count, sum, min, max,
                                            average), whenever relevant</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="vertical-center-container">
                                <div className="vertical-center">
                                    <div className="domains">
                                        <p>Think about complex commands in the following domains:</p>
                                        <div className="utterance-text">
                                            <div className="domain-example"><span className="bi bi-cloud-sun" />Weather information,</div>
                                            <div className="domain-example"><span className="bi bi-truck" />travel and navigation, </div>
                                            <div className="domain-example"><span className="bi bi-envelope" />mail, </div>
                                            <div className="domain-example"><span className="bi bi-geo" />events information, </div>
                                            <div className="domain-example"><span className="bi bi-google" />general knowledge, </div>
                                            <div className="domain-example"><span className="bi bi-cart" />shopping, </div>
                                            <div className="domain-example"><span className="bi bi-chat" />messaging, </div>
                                            <div className="domain-example"><span className="bi bi-bookmark" />reminders, </div>
                                            <div className="domain-example"><span className="bi bi-calendar-date" />schedule, </div>
                                            <div className="domain-example"><span className="bi bi-house" />smart home, </div>
                                            <div className="domain-example"><span className="bi bi-heart-pulse" />health and nutrition, and more apps</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mb-5">
                        <div className="col-6">
                            <div className="instruction">
                                <h3>Can be done by a virtual assistant</h3>
                                <p className="instruction-body">Think of instructions that are hard, but are possible for a virtual assistant
                                    to perform. As a rule of thumb, if a virtual assistant (like Siri or Alexa) can do each of the simple
                                    instructions that make the complex instruction, then it is valid.</p>

                            </div>
                        </div>
                        <div className="col-6">
                            <div className="vertical-center-container">
                                <div className="vertical-center">
                                    <div className="instruction-example">
                                        <div className="example-title utterance-text"><span className="example-icon bi bi-close" /><span className="text-red bi bi-x" />Get me the phone number of the most popular nanny
                                            in my area that is available tonight</div>
                                        <div className="example-caption text-red">This instruction cannot be done as the data required to complete it is not available - one may
                                            argue that there is no reliable source of the most popular nannies. Even if there was a reliable source, it is not easily
                                            accessible for virutal assistants.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mb-5 ambiguity">
                        <div className="col-6">
                            <div className="instruction">
                                <h3>Unambiguous</h3>
                                <p className="instruction-body">A person can clearly understand the intents within the instruction.</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="ambiguity-examples">
                                <Carousel variant="dark" interval="10000">
                                    <Carousel.Item className="instruction-example positive-example">
                                        <div className="vertical-center-container">
                                            <div className="vertical-center">
                                                <div className="example-title utterance-text text-center"><span className="text-red bi bi-x" />If it is safe to travel to Barcelona
                                                    then book me a ticket for next week</div>
                                                <div className="example-caption text-red">
                                                    <div><span className="bold">Ambiguous</span> because <span className="utterance-text">"safe"</span> is not clearly defined. Safe to walk? Safe from health
                                                        or crime perspectives? Safe for elder people?</div>
                                                </div>
                                            </div>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item className="instruction-example positive-example">
                                        <div className="vertical-center-container">
                                            <div className="vertical-center">
                                                <div className="example-title utterance-text text-center"><span className="text-red bi bi-x" />Remind me to feed the cat at 8am tomorrow in case I have evening meetings </div>
                                                <div className="example-caption text-red">
                                                    <div><span className="bold">Ambiguous</span> because <span className="utterance-text">"8am tomorrow"</span> can be understood as the time to feed the cat, but
                                                        it can also be understood as the time to switch the reminder on.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </div>
                    </div>

                    {onClickBack && onClickNext &&
                        <div className="row mb-3">
                            <div className="col">
                                <div className="mt-4 d-grid gap-2 d-sm-flex justify-content-sm-center">
                                    <button type="button" className="btn btn-outline-secondary btn-lg px-4 gap-3" onClick={onClickBack}><i className="bi bi-chevron-left" /></button>
                                    <button type="button" className="btn btn-primary btn-lg px-4" onClick={onClickNext}><i className="bi bi-chevron-right" /></button>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div >
        );
    }
}