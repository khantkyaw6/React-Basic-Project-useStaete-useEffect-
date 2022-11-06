import React from 'react';

const User = ({ user, remove }) => {
  const removeHandler = () => {
    remove(user.uuid);
  };

  return (
    <div className='card mb-2'>
      <div className='row'>
        <div className='col-2'>
          <img
            className='m-2'
            width='50px'
            height='50px'
            alt='profile_pic'
            src={user.image}
          />
        </div>
        <div className='col-5'>
          <strong>Ph:{user.phone}</strong> <br />
          <strong>Cell:{user.cell} </strong>
        </div>
        <div className='col-3'>
          <h5 className='mt-2'>{user.name}</h5>
        </div>
        <div className='col-1'>
          <button
            className='btn btn-sm btn-danger mt-2'
            onClick={removeHandler}
          >
            <i className='fa-solid fa-trash'></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;
