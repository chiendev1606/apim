import React from 'react';
import {Form, FormControlProps} from 'react-bootstrap';
import {Box} from '@mui/material';

interface IFormControl extends FormControlProps {
  name: string;
  error: string;
  hasError?: boolean;
  control: any;
  ref: any;
}

const FormControl: React.FC<IFormControl> = ({ as, name, size, type, error, hasError, ref }) => {
  return (
    <Box>
      <Form.Label htmlFor={name}>Password</Form.Label>
      <Form.Control ref={ref} as={as} size={size} type={type} id={name} />
      {hasError && <Form.Text className="text-danger">{error}</Form.Text>}
    </Box>
  );
};

export default FormControl;
