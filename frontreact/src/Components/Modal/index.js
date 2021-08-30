import React from 'react'
import { Modal as ModalBS } from 'react-bootstrap'

export const Modal = ({modalState, hideModal, title, children}) => (
  <ModalBS
    dialogClassName='modal-Sesion'
    show={modalState}
    onHide={hideModal}
  >
    <ModalBS.Header closeButton>
      <ModalBS.Title>{title}</ModalBS.Title>
    </ModalBS.Header>

    <ModalBS.Body>
      {children}
    </ModalBS.Body>

  </ModalBS>
)
