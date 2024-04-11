import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import {
  singInSuccess,
  signInFailure,
  signInStart,
} from '../redux/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      return dispatch(signInFailure('Please fill in all fields'));
    }

    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success === 'false') {
        dispatch(signInFailure(data.message));
      }

      if (res.ok) {
        dispatch(singInSuccess(data));
        navigate('/');
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className='min-h-screen mt-20 mx-3'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-10'>
        {/* left */}
        <div className='flex-1'>
          <Link to='/' className='font-bold dark:text-white text-4xl'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
              Sign In
            </span>
          </Link>

          <p className='text-sm mt-5'>
            This is the demo project you can Sign In with your email and
            password or Google
          </p>
        </div>
        {/* Right */}
        <div className='flex-1'>
          <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <div>
              <Label value='Email' />
              <TextInput
                type='text'
                placeholder='company@gmail.com'
                id='email'
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value='Password' />
              <TextInput
                type='password'
                placeholder='*****'
                id='password'
                onChange={handleChange}
              />
            </div>
            <Button
              gradientDuoTone='purpleToPink'
              type='submit'
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size='sm' />
                  <span className='pl-3'>Loading...</span>
                </>
              ) : (
                'Sign In'
              )}
            </Button>
          </form>

          <div className='flex gap-2 text-sm mt-5'>
            <span>Dont have an account ?</span>
            <Link to='/signup' className='text-blue-500 ml-2'>
              Sign Up
            </Link>
          </div>

          {errorMessage && (
            <Alert className='mt-5' color='failure'>
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
