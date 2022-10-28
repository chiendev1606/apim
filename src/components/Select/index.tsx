import React from 'react';
import { Select, SelectProps } from 'antd';
const { Option } = Select;

interface SelectPropsType extends SelectProps {
  data: number[];
}
const SelectComponent: React.FC<SelectPropsType> = (props) => {
  const { data } = props;

  const children = data.map((i) => (
    <Option key={i.toString(36) + i} value={i.toString(36) + i}>
      {i.toString(36) + i}
    </Option>
  ));

  return (
    <>
      <Select {...props}>{children}</Select>
    </>
  );
};
export default SelectComponent;
