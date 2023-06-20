import React from 'react';
import Accordion from './Accordion';

const CardGrid = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
      <div className="card bg-base-200 shadow-xl">
  <figure><img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" width={'120px'} height={'120px'} alt="Shoes" /></figure>
  <div class="card-body">
    <Accordion/>
    <button className='btn-primary rounded p-4'>Continue</button>
  </div>
</div>

<div className="card bg-base-200 shadow-xl">
  <figure><img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" width={'120px'} height={'120px'} alt="Shoes" /></figure>
  <div class="card-body">
    <Accordion/>
    <button className='btn-primary rounded p-4'>Continue</button>
  </div>
</div>

<div className="card bg-base-200 shadow-xl">
  <figure><img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" width={'120x'} height={'120px'} alt="Shoes" /></figure>
  <div class="card-body">
    <Accordion/>
    <button className='btn-primary rounded p-4'>Continue</button>
  </div>
</div>

<div className="card bg-base-200 shadow-xl">
  <figure><img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" width={'120px'} height={'120px'} alt="Shoes" /></figure>
  <div class="card-body">
    <Accordion/>
    <button className='btn-primary rounded p-4'>Continue</button>
  </div>
</div>
    </div>
  );
};

export default CardGrid;
