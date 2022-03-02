import React from 'react';
import { Link } from 'react-router-dom';

const style = {
  logo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    width: '100%',
  },
};
const Login = () => {
  return (
    <div className='login'>
      <div className='login login__container'>
        <div style={style.logo}>
          <svg
            width='64'
            height='64'
            viewBox='0 0 32 32'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle cx='16' cy='16' r='16' fill='#3751FF' />
            <path
              d='M11 10C11 9.44772 11.4477 9 12 9H15.9905C18.2127 9 19.9333 9.60955 21.1524 10.8287C22.3841 12.0478 23 13.765 23 15.9803C23 18.2088 22.3841 19.9391 21.1524 21.1713C19.9333 22.3904 18.2127 23 15.9905 23H12C11.4477 23 11 22.5523 11 22V10Z'
              fill='url(#paint0_linear_584_285)'
            />
            <defs>
              <linearGradient
                id='paint0_linear_584_285'
                x1='11'
                y1='9'
                x2='23'
                y2='23'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='white' stopOpacity='0.7' />
                <stop offset='1' stopColor='white' />
              </linearGradient>
            </defs>
          </svg>
          <h3>Dashboard Kit</h3>
        </div>
        <h2>Log In to Dashboard Kit</h2>
        <div>Enter your email and password below</div>
        <form>
          <label htmlFor='email'>EMAIL</label>
          <br />
          <input
            type='text'
            name='email'
            placeholder='Email address'
            className='login__input'
          />
          <br />
          <label htmlFor='password'>PASSWORD</label>
          <br />
          <input
            type='password'
            name='password'
            placeholder='Password'
            className='login__input'
          />
        </form>
        <Link
          to={'dashboard/overview'}
          className='login__button'
          style={{ textDecoration: 'none' }}
        >
          Log in
        </Link>
        <div>
          Don’t have an account? <a href='#'>Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
