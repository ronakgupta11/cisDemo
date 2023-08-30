
'use client';

import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React from 'react'

function Login() {
  return (
    <form className="flex max-w-md flex-col gap-4">
    <div>
      <div className="mb-2 block">
        <Label
          htmlFor="email2"
          value="Your email"
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
        />
      </div>
      <TextInput
        id="password2"
        required
        shadow
        type="password"
      />
    </div>


    <Button type="submit">
      Login
    </Button>
  </form>
  )
}

export default Login





