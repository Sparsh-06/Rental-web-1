import React from 'react'
import { useEffect, useState } from 'react'
import '../Styles/signup.css'
import { Button, Input, InputGroup, InputRightElement,Icon } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom';
import { useFirebase } from './Context/Firebase';
import {FcGoogle} from 'react-icons/fc'

function Login() {

  const [show, setshow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const firebase = useFirebase()
  const navigate = useNavigate()

  const handleClick = () => {
    setshow((showed) => !showed)
  };


  const handleSignin = async (e) => {
    e.preventDefault();
    await firebase.signinuser(email, password).then(console.log("Login Sucesssss")).catch((error) => console.log(error))
    navigate('/')
  }

  return (
    <div>
      <section className="signup">
        <div className="loginpage">
          <form onSubmit={handleSignin}>
            <h1>Login</h1>
            <div>
              <Input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className='forminput' name="gmail" placeholder="Enter your email" size='sm' required />
            </div>
            <div>
              <InputGroup size='lg'>
                <Input onChange={(e) => setPassword(e.target.value)} value={password} pr='4.5rem' type={show ? 'text' : 'password'} name="password" className='forminput' placeholder="Enter Password" size='sm' required />
                <InputRightElement width='4.5rem'>
                  <Button h='1.75rem' size='xs' className='showhide' onClick={handleClick}>{show ? 'Hide' : 'Show'}</Button>
                </InputRightElement>
              </InputGroup>
            </div>
            <div className="formgrid">
              <Button type="submit" value="Submit" colorScheme='teal' size='md'>
                Sign In
              </Button>
              <Button className='button2' onClick={firebase.signinwithgoogle} value="SignupGoogle" colorScheme="facebook" size='md' >
                Sign In with Google <Icon style={{ marginLeft: '3px', marginTop: '1.8px' }} boxSize={4} as={FcGoogle} />
              </Button>
            </div>
            <div>
              <Link to={'/signup'}>Back to Sign Up</Link>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Login
