import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

interface IAgentModal {
  show: boolean;
  closeModal: () => void;
  title: string;
}

const AgentsModal: React.FC<IAgentModal> = ({ children, closeModal, show, title }) => {
  return (
    <Modal show={show} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title as={'h5'}>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button size="sm" variant="secondary" onClick={closeModal}>
          Close
        </Button>
        <Button form="hook-form" size="sm" variant="primary" type="submit">
          Ok
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AgentsModal;
