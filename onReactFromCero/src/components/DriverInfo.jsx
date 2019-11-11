import React from 'react';
import '../assets/styles/components/DriverInfo.scss';

const DriverInfo = () => {
  return (
    <div className='driverInfo'>
      <div className='driverInfo__carnet'>
        <i className='fas fa-user' />
        <div className='info'>
          <p className='carnet--name'>Driver name</p>
          <div className='califacation'>
            <i className='fas fa-star' />
            <p>4.5</p>
          </div>
        </div>
      </div>
      <div className='driverInfo__payMethod'>
        <div className='method'>
          <i className='fas fa-money-bill' />
          <p>Efectivo</p>
        </div>
        <p className='price'>$ 1000</p>
      </div>
      <div className='driverInfo__options'>
        <button type='button'>
          <i className='fas fa-phone' />
          <p>Contactar</p>
        </button>
        <button type='button'>
          <i className='fas fa-share-alt' />
          <p>Compartir</p>
        </button>
        <button type='button'>
          <i className='fas fa-window-close' />
          <p>Cancelar</p>
        </button>
      </div>
    </div>
  );
};
export default DriverInfo;
