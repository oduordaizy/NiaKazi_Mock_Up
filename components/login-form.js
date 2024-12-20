"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {useState} from 'react'
import {useRouter} from 'next/router';


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false)
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });

  //const router = useRouter(); //Initializing Next.js Router

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors({email: '' , password: ''});

    //Basic Validation

    if(!email || !password){
      setErrors({
        email: !email ? "Email is required" : '',
        password: !password ? "Password is required" : ''
      });
      return;
    }

    try{
      //API call to authenticate
      const response = await fetch('/recruiter/login', {
        method: 'POST',
        body: JSON.stringify({email, password, remember}),
        headers: {
          'Content-Type': 'application/json',
        },

      });

      const data = await response.json();

      if (response.ok){
        //redirecting to the protected page which is the recruiters dashboard
        router.push('/recruiters/dashboard');
      }else{
        //Handling server side validation errors
        setErrors({
          ...errors,
          email: data.message || 'Invalid login Credentials'
        });
      }
    } catch(error){
      console.error(error);
      setErrors({
        ...errors,
        email: 'An error occurred. Please try again later',
      });
    }
  }


    return(
      <div>
        <h1>Welcome to Daisy Rec</h1>
        <form id="loginForm" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email}
            onChange={(e) => setEmail(e.target.value)} required />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
  
        
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} 
          onChange={(e) => setPassword(e.target.value)}
          required />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
  
        <div>
          <input type="checkbox" id="remember" checked={remember} 
        
          onChange={()=>setRemember(!remember)} />
          <label htmlFor="remember">Remember me</label>

        </div>
       
       <div>
       <button type="submit" id="submit">Sign In</button>
       </div>

        <p>Don't have an account? <a href="/registration/signup">Sign up</a></p>
  
      </form>
      </div>

      );
};

export default LoginForm;
  