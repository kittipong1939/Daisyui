import React from 'react'

export default function RegisterForm(){
   return (
    <div className='p-4'>
    <div className='text-3xl'>RegisterForm</div>
    <form >
    <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Username</span>
    
  </div>
  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
  <div className="label">

  </div>
</label>
    </form>
    <form >
    <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Password</span>

  </div>
  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
  <div className="label">

  </div>
</label>
    </form>
    </div>
   )
}
