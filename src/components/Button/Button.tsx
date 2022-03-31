import React, { FC } from 'react';
import {styled} from "@storybook/theming";

export interface IButtonProps {
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  text?: string;
}

const CustomButton = styled.button`
  background: red;
  border: 1px solid #ccc;
  border-radius: 3px;
  color: #333;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  padding: 5px 10px;
  text-transform: uppercase;
  &:hover {
    background: #eee;
  }
  
`;


export const Button: FC<IButtonProps> = ({ onClick, disabled, className, text }) => (
  <CustomButton type="button" className={className} onClick={onClick} disabled={disabled}>
    {text}
  </CustomButton>
);
