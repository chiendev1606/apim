import React from 'react';
import { styled } from '@mui/material';
import { Space, SpaceProps } from 'antd';
interface TypeSpaceProps extends SpaceProps {}

const SpaceStyled = styled(Space)({
  alignItems: 'flex-end'
});

const SpaceComponent: React.FC<TypeSpaceProps> = (props) => {
  return (
    <>
      <SpaceStyled {...props} />
    </>
  );
};
export default SpaceComponent;
