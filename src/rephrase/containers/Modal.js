import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';


const MyVerticallyCenteredModal = (props) => {
    return (
        <Modal
            {...props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            animation={false}
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    <div className="text-center"><i className="bi bi-life-preserver"></i></div>
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

export default class AppModal extends React.Component {
    render() {
        const { show, onHide, children } = this.props;

        return (
            <div className="help">
                <MyVerticallyCenteredModal show={show} onHide={onHide}>
                    {children}
                </MyVerticallyCenteredModal>
            </div>
        );
    }
}
