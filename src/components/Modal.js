import React from 'react';

const Modal = () => {
  return (
    <div className="modal-container ui raised very padded text container segment"> 
      <h2>Who are you?</h2>
      <p>This website is intended for US residents only. Please click the appropriate link below:</p>
      <div className="modal-link-container ui segmented container">
        <a href="/" className="ui button">Reader</a>
        <a href="/about" className="ui button">Content Creator</a>
      </div>
    </div>
  );
}

export default Modal;