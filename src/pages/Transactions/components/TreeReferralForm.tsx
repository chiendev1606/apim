import React from 'react';
import { Box, Stack } from '@mui/material';
import { Form } from 'react-bootstrap';
import { UseFormRegister } from 'react-hook-form';

export interface TreeReferralFormProps {
  register: UseFormRegister<Record<string, any>>;
}

const TreeReferralForm: React.FC<TreeReferralFormProps> = ({ register }) => {
  return (
    <Stack spacing={1} direction="column">
      <Box>
        <Form.Label htmlFor="username">Parent Agent</Form.Label>
        <Form.Control
          required
          as={'input'}
          size="sm"
          type="text"
          id="username"
          {...register('parent_agent', {
            required: 'Parent agent is required',
          })}
        />
      </Box>
      <Box>
        <Form.Label htmlFor="nick_name">Nick name</Form.Label>
        <Form.Control
          required
          as={'input'}
          size="sm"
          type="text"
          id="nick_name"
          {...register('nick_name', {
            required: 'Nick name is required',
          })}
        />
      </Box>
      <Box>
        <Form.Label htmlFor="id">Id</Form.Label>
        <Form.Control
          required
          as={'input'}
          size="sm"
          type="text"
          id="id"
          {...register('id', {
            required: 'Id is required',
          })}
        />
      </Box>
      <Box>
        <Form.Label htmlFor="pw">Password</Form.Label>
        <Form.Control
          required
          as={'input'}
          size="sm"
          type="text"
          id="pw"
          {...register('pw', {
            required: 'Password is required',
          })}
        />
      </Box>
      <Box>
        <Form.Label htmlFor="confirm_pw">Confirm Password</Form.Label>
        <Form.Control
          required
          as={'input'}
          size="sm"
          type="password"
          id="confirm_pw"
          {...register('confirm_pw', {
            required: 'Confirm password is required',
          })}
        />
      </Box>
      <Box>
        <Form.Label htmlFor="point_rate">Point rate (%)</Form.Label>
        <Form.Control
          required
          as={'input'}
          size="sm"
          type="text"
          id="point_rate"
          {...register('point_rate', {
            required: 'Point rate is required',
          })}
        />
      </Box>
      <Box>
        <Form.Label htmlFor="agent_privileges">Agent Privileges</Form.Label>
        <Form.Select
          {...register('agent_privileges', {
            required: 'Point rate is required',
          })}>
          <option value="0">Choose</option>
          <option value="1">AgentA</option>
          <option value="2">AgentB</option>
          <option value="3">AgentC</option>
          <option value="4">AgentD</option>
        </Form.Select>
      </Box>
    </Stack>
  );
};
export default TreeReferralForm;
