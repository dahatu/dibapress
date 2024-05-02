"use client";

import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

const UIButton = styled.button`
  margin: 0px;
  padding: 0.275rem 0.65rem;
  outline: 0px;
  user-select: none;
  cursor: pointer;
  background-color: unset;
  color: rgba(0, 0, 0, 0.62);
  border-radius: 0.475rem;
  isolation: isolate;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  -webkit-box-align: center;
  align-items: center;
  transition-property: background-color, background, border-color, color, fill,
    stroke, opacity, box-shadow, transform;
  transition-duration: 200ms;
  border-width: 1px;
  font-family: inherit;
  letter-spacing: normal;
  font-weight: 500;
  font-size: 0.8125rem;
  line-height: 1.38462;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.09);
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  width: auto;
  --accent: hsla(252, 100%, 63%, 1);
  --accentHover: hsla(252, 100%, 73%, 1);
  --border: hsla(252, 100%, 63%, 1);
  --accentContrast: white;
  --alpha: hsla(0, 0%, 0%, 0.03);
  gap: 1rem;
  position: relative;
  -webkit-box-pack: start;
  justify-content: flex-start;
  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
  &:active {
    background-color: rgba(0, 0, 0, 0.06);
  }
  &:focus {
    border-color: rgba(0, 0, 0, 0.16);
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px,
      rgba(0, 0, 0, 0.05) 0px 0px 0px 4px;
  }
  @media (prefers-color-scheme: dark) {
    & {
      background-color: rgba(255, 255, 255, 0.03);
      color: #fff;
      border-color: rgba(255, 255, 255, 0.07);
      box-shadow: rgba(0, 0, 0, 0.38) 0px 2px 3px -1px,
        rgba(0, 0, 0, 0.4) 0px 1px 0px 0px;
    }
    &:hover {
      background-color: rgba(255, 255, 255, 0.08);
    }
    &:active {
      background-color: rgba(255, 255, 255, 0.10);
    }
    &:focus {
      border-color: rgba(255, 255, 255, 0.14);
      box-shadow: rgba(0, 0, 0, 0.48) 0px 2px 3px -1px,
        rgba(0, 0, 0, 0.4) 0px 1px 0px 0px,
        rgba(255, 255, 255, 0.08) 0px 0px 0px 4px;
    }
  }
`;

type Props = React.PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

const Button: React.FC<Props> = ({ children, ...props }) => {
  return <UIButton {...props}>{children}</UIButton>;
};

export default Button;
