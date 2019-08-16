import React from 'react';
import { Portal } from 'react-portal';

const Modal = ({ isOpen, modalContent, actions = [] }) =>
  isOpen && (
    <Portal>
      <aside className="c-modal-cover fadeIn">
        <div className="c-modal slideIn">
          <div className="modalWrapper">
            <div className="modalHeader">
              <i className="icn-person material-icons">error</i>
            </div>
            <div className="c-modal_body">{modalContent}</div>
            {actions.map(({ label, onClick }) => (
              <button className="btn btn-info" onClick={onClick}>
                {label}
              </button>
            ))}
          </div>
        </div>
      </aside>
    </Portal>
  );

export default Modal;
