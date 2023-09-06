
'use client';

import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React from 'react'

function Login() {
  return (
    <div className='p-8'>
      <h2 className=' text-white font-bold text-5xl text-center'> Login</h2>

    <form className="flex max-w-md mx-auto mt-16 flex-col gap-4">
    <div>
      <div className="mb-2 block">
        <Label
          htmlFor="email2"
          value="Your email"
          className='text-white'
        />
      </div>
      <TextInput
        id="email2"
        placeholder="name@flowbite.com"
        required
        shadow
        type="email"
      />
    </div>
    <div>
      <div className="mb-2 block">
        <Label
          htmlFor="password2"
          value="Your password"
          className='text-white'
        />
      </div>
      <TextInput
        id="password2"
        required
        shadow
        type="password"
      />
    </div>


    <Button type="submit" className="bg-[#1B59F8]">
      Login
    </Button>
  </form>
  </div>

  )
}

export default Login





