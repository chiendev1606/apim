import React from 'react';
import { Box, Stack } from '@mui/material';
import { Form } from 'react-bootstrap';
import { UseFormRegister } from 'react-hook-form';

interface IChangePasswordForm {
  register: UseFormRegister<Record<string, any>>;
}

const ChangePasswordForm: React.FC<IChangePasswordForm> = ({ register }) => {
  return (
    <Stack spacing={2} sx={{ pb: 2 }} direction="column">
      <Box>
        <Form.Label htmlFor="new_password">New password</Form.Label>
        <Form.Control
          required
          as={'input'}
          size="sm"
          type="password"
          id="new_password"
          {...register('new_password', {
            required: 'New password is required',
          })}
        />
      </Box>
      <Box>
        <Form.Label htmlFor="confirm_pw">Re-enter new password</Form.Label>
        <Form.Control
          required
          as={'input'}
          size="sm"
          type="password"
          id="confirm_pw"
          {...register('confirm_pw', {
            required: 'Confirm pw is required',
          })}
        />
      </Box>
    </Stack>
  );
};
export default ChangePasswordForm;
