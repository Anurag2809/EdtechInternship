import React from 'react'

function Card() {
  return (
    <div>
    <figure><img src="https://cdn.pixabay.com/photo/2015/12/03/01/27/play-1073616_640.png" width={'120px'} height={'120px'} alt="Shoes" /></figure>
  <div class="card-body">
  {/* <Accordion/> */}
  <p className="text-xl text-center">TITLE</p>

  <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-2 w-20 mx-auto  border border-gray-400 rounded shadow'>EDIT</button>
</div>
    </div>
  )
}

export default Card;