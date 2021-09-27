import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';


const MyVerticallyCenteredModal = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            animation={false}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Help
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    {props.children}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

const Help = () => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Button variant="info" onClick={() => setModalShow(true)}>
                Help
            </Button>

            <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} >
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h5>Good example</h5>
                            <div className="card border-success rounded mb-3 p-3" style={{"height": "321px"}}>
                                <strong>Context</strong>
                                <p>A workout</p>

                                <strong>Your administrative assistance can do the following:</strong>
                                <ol>
                                    <li>Get weather information</li>
                                    <li>Send a text message to anyone on your contact list</li>
                                </ol>

                                <strong>Response</strong>
                                <p><span style={{"background-color": "#7FFF00"}}>Tell Thomas to bring shorts </span><span style={{"background-color": "yellow"}}>if it's going to be hot tomorrow</span></p>
                            </div>

                            <div className="card border-success rounded mb-3 p-3" style={{"height": "321px"}}>
                                <strong>Context</strong>
                                <p>A concert</p>

                                <strong>Your administrative assistance can do the following:</strong>
                                <ol>
                                    <li>Get events information</li>
                                    <li>Create a reminder</li>
                                </ol>

                                <strong>Response</strong>
                                <p><span style={{"background-color": "yellow"}}>Create a reminder for </span><span style={{"background-color": "#7FFF00"}}>every Drake's concert this summer in the city</span></p>
                            </div>
                        </div>
                        <div className="col">
                            <h5>Bad example</h5>
                            <div className="card border-danger rounded mb-3 p-3" style={{"height": "321px"}}>
                                <strong>Context</strong>
                                <p>A workout</p>

                                <strong>Your administrative assistance can do the following:</strong>
                                <ol>
                                    <li>Get weather information</li>
                                    <li>Send a text message to anyone on your contact list</li>
                                </ol>

                                <strong>Response (<span style={{ "color": "red" }}>wrong - using just one intent</span>)</strong>
                                <p style={{ "color": "red" }}>Is it going to be hot tomorrow?</p>
                            </div>
                        </div>
                    </div>
                </div>



            </MyVerticallyCenteredModal>
        </>
    );
};

export default Help;
