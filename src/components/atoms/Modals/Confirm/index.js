import { Modal, Button } from "react-bootstrap";

export default function ModalConfirm({ show, handleClose, handleProceed }) {
  return (
    <Modal show={show} onHide={handleClose} className="confirmation">
      <Modal.Header closeButton>
        <Modal.Title className="text-primary">Confirmation</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Are you sure want to proceed this one?</p>
      </Modal.Body>

      <Modal.Footer>
        <Button
          variant="light"
          className="px-4"
          style={{ backgroundColor: "#e9ecef" }}
          onClick={handleClose}
        >
          Close
        </Button>
        <Button
          variant="primary"
          className="text-white"
          onClick={handleProceed}
        >
          Proceed
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
