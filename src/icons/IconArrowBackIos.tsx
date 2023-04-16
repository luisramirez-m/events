import { HTMLAttributes } from 'react';

export interface IIcon extends HTMLAttributes<HTMLOrSVGElement> {
  height?: number;
  width?: number;
}

const IconArrowBackIos = ({ height = 32, width = 32 }: IIcon) => (
  <svg
    data-testid="icon-arrow-back-ios"
    fill="currentColor"
    height={height}
    viewBox="0 96 960 960"
    width={width}
    xmlns="http://www.w3.org/2000/svg">
    <path d="M372 948 21 597q-5-5-7-10t-2-11q0-6 2-11t7-10l351-351q11-11 28-11t28 11q12 12 12 28.5T428 261L113 576l315 315q12 12 11.5 28.5T428 947q-12 12-28.5 12T372 948Z" />
  </svg>
);

export default IconArrowBackIos;
