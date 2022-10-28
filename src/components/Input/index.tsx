import React from 'react';
import { Input, InputProps } from 'antd';
interface InputPropsType extends InputProps {}
const InputComponent: React.FC<InputPropsType> = (props) => {
  return (
    <>
      <Input {...props} />
    </>
  );
};
export default InputComponent;
