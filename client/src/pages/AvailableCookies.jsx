import React from 'react';
// Insert CSS types here
import { useQuery, useMutation } from '@apollo/client';
import { BUY_COOKIE } from '../utils/mutations';
import Auth from '../utils/auth';
import { addCookieId } from '../utils/localStorage';