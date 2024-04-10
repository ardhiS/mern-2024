import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Label, TextInput } from 'flowbite-react';

const SignUp = () => {
  return (
    <div className='min-h-screen mt-20 mx-3'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-10'>
        {/* left */}
        <div className='flex-1'>
          <Link to='/' className='font-bold dark:text-white text-4xl'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
              Ardhi
            </span>
            Blogs
          </Link>

          <p className='text-sm mt-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            iste ratione distinctio culpa adipisci, facere aut ea numquam
            voluptas maiores quasi veritatis tempora, pariatur incidunt amet
            voluptatum nulla praesentium quae!
          </p>
        </div>
        {/* Right */}
        <div className='flex-1'>
          <form className='flex flex-col gap-4'>
            <div>
              <Label value='Your Username' />
              <TextInput type='text' placeholder='username' id='username' />
            </div>
            <div>
              <Label value='Email' />
              <TextInput
                type='text'
                placeholder='company@gmail.com'
                id='email'
              />
            </div>
            <div>
              <Label value='Password' />
              <TextInput type='password' placeholder='password' id='password' />
            </div>
            <Button gradientDuoTone='purpleToPink' value='SignUp' type='submit'>
              Sign Up
            </Button>
          </form>

          <div className='flex gap-2 text-sm mt-5'>
            <span>already have an account ?</span>
            <Link to='/signin' className='text-blue-500 ml-2'>
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
