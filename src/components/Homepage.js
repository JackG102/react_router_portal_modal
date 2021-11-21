import React from 'react';

const Homepage = ({ modalVisible, setModalVisible }) => {
  console.log('hello');
  return (
    <div>
      <h1>Homepage!</h1>
      <div class="ui toggle checkbox">
        <input 
          type="checkbox" 
          name="toggle_modal" 
          checked={modalVisible}
          onClick={(event)=> {setModalVisible(!modalVisible)}}
        />
        <label>Toggle Modal</label>
      </div>
    </div>
  );
}

export default Homepage;