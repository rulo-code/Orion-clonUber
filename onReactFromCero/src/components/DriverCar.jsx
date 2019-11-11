import React from 'react';
import carro from '../assets/static/renault.png';
import '../assets/styles/components/DriverService.scss';

const DriverCar = () => {
  return (
    <div className='driverService'>
      <h3>Xpress</h3>
      <div className='service--info'>
        <div>
          <p className='placa'>H31DDD</p>
          <p>Renault Logan, 2019</p>
        </div>
        <img src={carro} alt='carro' />
      </div>
    </div>
  );
};
export default DriverCar;

