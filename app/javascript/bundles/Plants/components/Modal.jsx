import React from 'react';
import { Portal } from 'react-portal';

const Modal = ({ isOpen, modalContent, actions = [] }) =>
  isOpen && (
    <Portal>
      <aside className="c-modal-cover fadeIn">
        <div className="c-modal slideIn">
          <div className="modalWrapper">
            <div className="modalHeader">
              <img src="https://img.icons8.com/ios-filled/25/000000/double-left.png" className="back-arrow"/>
              <h3 className="icn-person material-icons animated bounce">tiny garden</h3>
              <div>
                
              </div>
            </div>
            <div className="c-modal_body">
              <img src={modalContent.url} alt={modalContent.name} />
              <div className="plant-modal">
                <h1>{modalContent.name}</h1>
                <p>{modalContent.price}</p>
              </div>
            </div>
            {actions.map(({ label, onClick, i }) => (
              <button className="btn btn-info" onClick={onClick} key={modalContent.name}>
                {label}
              </button>
            ))}
          </div>
        </div>
      </aside>
    </Portal>
  );

export default Modal;
