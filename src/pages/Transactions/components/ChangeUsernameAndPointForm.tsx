import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { Box } from '@mui/material';
import { Form } from 'react-bootstrap';

export interface ChangeUsernameAndPointProps {
  register: UseFormRegister<Record<string, any>>;
}

const ChangePoint: React.FC<ChangeUsernameAndPointProps> = ({ register }) => {
  return (
    <Box sx={{ pb: 1.4 }}>
      <Form.Label htmlFor="point_rate">Point rate</Form.Label>
      <Form.Control
        required
        as={'input'}
        size="sm"
        type="text"
        id="point_rate"
        {...register('point_rate', {
          required: 'New username is required',
        })}
      />
    </Box>
  );
};

const ChangeUsername: React.FC<ChangeUsernameAndPointProps> = ({ register }) => {
  return (
    <Box sx={{ pb: 1.4 }}>
      <Form.Label htmlFor="username">New nickname (2~15 characters)</Form.Label>
      <Form.Control
        required
        as={'input'}
        size="sm"
        type="text"
        id="username"
        {...register('username', {
          required: 'New username is required',
        })}
      />
    </Box>
  );
};

export { ChangeUsername, ChangePoint };
