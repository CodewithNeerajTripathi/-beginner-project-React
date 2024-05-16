import React from 'react'

export default function Navigation() {
  return (
    <div>
        <nav className=' flex gap-[400px] h-[80px] w-full  pt-5 pl-4'>
          <div className=' size-[84px]'>
            <img src="https://res.cloudinary.com/dmubfrefi/image/private/s--SsRAzZ39--/c_crop,h_2813,w_5000,x_0,y_0/c_scale,w_384/f_auto/q_auto/v1/dee-about-cms-prod-medias/cf68f541-fc92-4373-91cb-086ae0fe2f88/002-nike-logos-swoosh-white.jpg?_a=BAACwmBs" alt="logo" />
           

          </div>
          <ul className=' flex gap-20 font-medium '>
            <li>Menu</li>
            <li>Location</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <div className=' h-7 w-[80px]  bg-red-500 text-white text-center'>
            <button className=' '>Login</button>
          </div>
        </nav>
    </div>
  )
}
