import React, { useState } from 'react';
import { Button, Input, InputGroup, InputRightElement, Icon } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { useFirebase } from '../Backend Components/Context/Firebase';
import { FcGoogle } from 'react-icons/fc'


function Signup() {
    const [show, setshow] = useState(false);
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const firebase = useFirebase();
    const navigate = useNavigate()

    const handleClick = () => {
        setshow(!show);
    };


    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await firebase.signupuser(email, password, name);
            console.log('User signed up:', userCredential.user);
            // Redirect to the login page
            navigate('/login');
        } catch (error) {
            console.error('Signup error:', error.message);
        }
        // await firebase.signupuser(email, password, name)
        //     .then((value) => console.log(value))
        //     .catch((error) => {
        //         console.error('Signup error:', error.message);
        //         // Handle signup error, e.g., display an error message to the user
        //     });
    };

    return (
        <div>
            <section className="signup">
                <div className="signuppage">
                    <form onSubmit={handleSignup}>
                        <h1>Sign Up</h1>
                        <div>
                            <Input onChange={(e) => setname(e.target.value)} value={name} className='forminput' type="text" name="name" placeholder='Name' size='sm' required />
                        </div>
                        <div>
                            <Input type="email" onChange={(e) => setemail(e.target.value)} value={email} className='forminput' name="gmail" placeholder="Email Id" size='sm' required />
                        </div>
                        <div>
                            <InputGroup size='xs'>
                                <Input onChange={(e) => setpassword(e.target.value)} value={password} pr='4.5rem' type={show ? 'text' : 'password'} name="password" className='forminput' placeholder="Enter Password" size='sm' required />
                                <InputRightElement mt={'12px'} width='4.5rem'>
                                    <Button h='1.75rem' size='xs' className='showhide' onClick={handleClick}>
                                        {show ? 'Hide' : 'Show'}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </div>
                        <div className="formgrid">
                            <Button type="submit" value="Sign Up" colorScheme='teal' size='md'>
                                Sign Up
                            </Button>
                            <Button className='button2' onClick={firebase.signinwithgoogle} value="SignupGoogle" colorScheme="facebook" size='md' >
                                Sign Up with Google <Icon style={{ marginLeft: '3px', marginTop: '1.8px' }} boxSize={4} as={FcGoogle} />
                            </Button>
                        </div>
                        <Link className='already' to={'/login'}>
                            Already have an account
                        </Link>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Signup;
