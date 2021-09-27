import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Example from './Example';
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
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Help: Writing an utterance (with examples)
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

export default class Help extends React.Component {
    render() {
        const { show, onHide } = this.props;

        return (
            <div className="help">
                <MyVerticallyCenteredModal show={show} onHide={onHide}>
                    <Example />
                </MyVerticallyCenteredModal>
            </div>
        );
    }
}
