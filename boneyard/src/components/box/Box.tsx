// example Box.js
import styled from 'styled-components';
import {
  space,
  color,
  layout,
  flexbox,
  grid,
  border,
  position,
  shadow,
  compose,
} from 'styled-system';

const Box = (styled as any).div(
  {
    boxSizing: 'border-box',
    minWidth: 0,
  },
  compose(space, color, layout, flexbox, border, position, shadow, grid)
);

export default Box;
