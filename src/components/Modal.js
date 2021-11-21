import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const Modal = ({ modalVisible, setModalVisible }) => {
  return ReactDOM.createPortal(
    <>
    { 
      modalVisible ?
      
      <div className="modal-container ui raised very padded text container segment"> 
        <h2>Disclaimer</h2>
        <p>This website that has informationis for US residents only.  By clicking 'I understand', you acknlowedge that information may not be applicable to other sovereign entities.</p>
        <div className="modal-link-container ui segmented container">
          <a 
            href="javascript:void(0)" 
            className="ui button green"
            onClick={(event) => {setModalVisible(!modalVisible)}}
          >
            Acknowledge
          </a>
        </div>
      </div>
 
      : null
    }
   </>,
   document.querySelector('#modal-portal')
  );
}

export default Modal;