import React from 'react';
// Insert CSS types here
import { useQuery, useMutation } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import { DELETE_COOKIE } from '../utils/mutations';
import Auth from '../utils/auth';
import { deleteCookieId } from '../utils/localStorage';