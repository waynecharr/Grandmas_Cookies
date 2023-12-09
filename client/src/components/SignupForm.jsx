import { useState } from 'react';

// Form Control info here: https://chakra-ui.com/docs/components/form-control/usage
import { Button } from '@chakra-ui/react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'

import { createUser } from '../utils/API';
import Auth from '../utils/auth';

const SignupForm = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

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
      const response = await createUser(userFormData);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const { token, user } = await response.json();
      console.log(user);
      Auth.login(token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <>
      {/* This is needed for the validation functionality above */}
      <FormControl noValidate validated={validated} onSubmit={handleFormSubmit}>
        {/* show alert if server response is bad */}
        <FormErrorMessage dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your signup!
        </FormErrorMessage>

        <FormControl.Group className='mb-3'>
          <FormLabel htmlFor='username'>Username</FormLabel>
          <FormControl
            type='text'
            placeholder='Your username'
            name='username'
            onChange={handleInputChange}
            value={userFormData.username}
            required
          />
          <FormErrorMessage type='invalid'>Username is required!</FormErrorMessage>
        </FormControl.Group>

        <FormControl className='mb-3'>
          <FormLabel htmlFor='email'>Email</FormLabel>
          <FormControl
            type='email'
            placeholder='Your email address'
            name='email'
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
            <FormHelperText>We`&apos;`ll never share your email.</FormHelperText>
          <FormErrorMessage type='invalid'>Email is required!</FormErrorMessage>
        </FormControl>

        <FormControl className='mb-3'>
          <FormLabel htmlFor='password'>Password</FormLabel>
          <FormControl
            type='password'
            placeholder='Your password'
            name='password'
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <FormErrorMessage type='invalid'>Password is required!</FormErrorMessage>
        </FormControl>
        <Button
          disabled={!(userFormData.username && userFormData.email && userFormData.password)}
          type='submit'
          variant='success'>
          Submit
        </Button>
      </FormControl>
    </>
  );
};

export default SignupForm;
