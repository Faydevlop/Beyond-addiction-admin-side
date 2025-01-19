import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginAuth } from '../redux/features/userAuthSlice'; // Adjust the import path as per your project structure

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, error: loginError, loading } = useSelector((state) => state.auth);

  // Validate form data
  const validate = () => {
    const newErrors = { email: '', password: '' };

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);

    // Return true if there are no errors
    return !newErrors.email && !newErrors.password;
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      try {
        // Dispatch the login action
        const result = await dispatch(loginAuth(formData)).unwrap();
        console.log('Login successful:', result);
        navigate('/dashboard');
      } catch (err) {
        console.error('Login failed:', err);
      }
    }
  };

  return (
    <div className="grid min-h-screen w-full grid-cols-1 lg:grid-cols-2">
      <div className="flex items-center justify-center bg-muted p-6 lg:p-12">
        <div className="mx-auto w-full max-w-md space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-4xl font-bold">
              Beyond <span className="text-[#008080]">Addiction</span>
            </h1>
            <h1 className="text-2xl font-bold">Welcome back</h1>
            <p className="text-muted-foreground">
              Enter your email and password to access the Beyond Addiction admin dashboard.
            </p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="email"
                placeholder="m@example.com"
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="password"
                required
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>
            <button
           
              className="inline-flex items-center justify-center bg-[#008080] text-white gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
              type="submit"
              disabled={loading}
            >
                 <Link to={'/dashboard'}>
            
              {loading ? 'Logging in...' : 'Login'}
              </Link>
            </button>
          </form>
          {loginError && <p className="text-red-500 text-sm text-center mt-2">{loginError}</p>}
        </div>
      </div>
      <div className="relative hidden lg:block">
        <img
          src="https://images.pexels.com/photos/5699522/pexels-photo-5699522.jpeg"
          alt="Motivational quote"
          className="object-cover"
          width="800"
          height="800"
          style={{ aspectRatio: '800 / 800', objectFit: 'cover' }}
        />
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-transparent to-muted/50 p-6 text-center text-white">
          <blockquote className="max-w-md text-4xl font-semibold leading-tight">
            "Addiction is a disease, not a moral failing. Together, we can overcome it."
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Login;
