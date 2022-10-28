import React, { useState } from 'react';
import { Radio, RadioProps } from 'antd';

interface ItemDataType extends RadioProps {
  value: string | number;
  title: string;
}

interface RadioPropsType extends RadioProps {
  data: ItemDataType[];
}

const RadioComponent: React.FC<RadioPropsType> = (props) => {
  const { data } = props;
  //   const [valueRadio, setValueRadio] = useState('1');
  const children = data.map(({ value, title }, i) => (
    <Radio key={i.toString(36) + i} value={value}>
      {title}
    </Radio>
  ));
  return (
    <>
      <Radio.Group {...props}>{children}</Radio.Group>
    </>
  );
};
export default RadioComponent;
