import { useState } from 'react';

// Form Control info here: https://chakra-ui.com/docs/components/form-control/usage
import { Button } from '@chakra-ui/react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'

import { loginUser } from '../utils/API';
import Auth from '../utils/auth';

const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [validated] = useState(false);
  const [showFormErrorMessage, setShowFormErrorMessage] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const response = await loginUser(userFormData);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const { token, user } = await response.json();
      console.log(user);
      Auth.login(token);
    } catch (err) {
      console.error(err);
      setShowFormErrorMessage(true);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <>
      <FormControl noValidate validated={validated} onSubmit={handleFormSubmit}>
        <FormErrorMessage dismissible onClose={() => setShowFormErrorMessage(false)} show={showFormErrorMessage} variant='danger'>
          Something went wrong with your login credentials!
        </FormErrorMessage>
        <FormControl.Group className='mb-3'>
          <FormLabel htmlFor='email'>Email</FormLabel>
          <FormHelperText>We`&apos;`ll never share your email.</FormHelperText>
          <FormControl.Control
            type='text'
            placeholder='Your email'
            name='email'
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <FormErrorMessage type='invalid'>Email is required!</FormErrorMessage>
        </FormControl.Group>

        <FormControl.Group className='mb-3'>
          <FormLabel htmlFor='password'>Password</FormLabel>
          <FormControl.Control
            type='password'
            placeholder='Your password'
            name='password'
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <FormErrorMessage type='invalid'>Password is required!</FormErrorMessage>
        </FormControl.Group>
        <Button
          disabled={!(userFormData.email && userFormData.password)}
          type='submit'
          variant='success'>
          Submit
        </Button>
      </FormControl>
    </>
  );
};

export default LoginForm;
