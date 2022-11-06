import React, { useState } from 'react';

const AddUser = (props) => {
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [cell, setCell] = useState('');
  const [uuid, setUuid] = useState('');

  const imageChangeHandler = (event) => {
    setImage(event.target.value);
  };

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const phoneChangeHandler = (event) => {
    setPhone(event.target.value);
  };

  const cellChangeHandler = (event) => {
    setCell(event.target.value);
  };

  const uuidChangeHandler = (event) => {
    setUuid(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    let user = {
      name: name,
      uuid: uuid,
      image: image,
      phone: phone,
      cell: cell,
    };

    props.addUser(user);
  };

  return (
    <div className='card bg-dark px-2 my-5'>
      <form onSubmit={submitHandler}>
        <div className='mb-3'>
          <label htmlFor='image' className='form-label text-white'>
            Image
          </label>
          <input
            type='text'
            className='form-control'
            id='image'
            onChange={imageChangeHandler}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='name' className='form-label text-white'>
            Name
          </label>
          <input
            type='text'
            className='form-control'
            id='name'
            onChange={nameChangeHandler}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='phone' className='form-label text-white'>
            Phone
          </label>
          <input
            type='tel'
            className='form-control'
            id='phone'
            onChange={phoneChangeHandler}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='cell' className='form-label text-white'>
            Cell
          </label>
          <input
            type='tel'
            className='form-control'
            id='cell'
            onChange={cellChangeHandler}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='uuid' className='form-label text-white'>
            Uuid
          </label>
          <input
            type='text'
            className='form-control'
            id='image'
            onChange={uuidChangeHandler}
          />
        </div>
        <button type='submit' className='btn btn-sm btn-primary float-end my-3'>
          Create
        </button>
      </form>
    </div>
  );
};

export default AddUser;
