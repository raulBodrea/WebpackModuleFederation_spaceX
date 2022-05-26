import propTypes from 'prop-types';
import styled from 'styled-components';
import {
  border,
  color,
  compose,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  variant,
} from 'styled-system';
import theme from '../theme';

const variants = {
  primary: {
    border: 'none',
    background: theme.colors.white100,
    opacity: 0.8,
    fontWeight: 900,

    ['&&:hover']: {
      filter: 'brightness(1.15)',
      opacity: 0.9,
    },
    ['&&:active']: {
      filter: 'brightness(1.3)',
      opacity: 1,
    },
    ['&&:disabled']: {
      filter: 'brightness(0.5)',
    },
  },
  secondary: {
    background: 'transparent',
    color: 'gray200',
    fontWeight: 900,
    border: `2px solid #666`,
    opacity: 0.85,

    ['&&:hover']: {
      filter: 'brightness(1.3)',
      opacity: 0.95,
    },
    ['&&:active']: {
      filter: 'brightness(1.6)',
      opacity: 1,
    },
    ['&&:disabled']: {
      opacity: 0.5,
    },
  },
};

const Button = (styled as any)('button')`
  text-transform: uppercase;
  color: theme.colors.white100;
  font-size: 14px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: ${props =>
    props.paddingSize === 'sm'
      ? props.variant === 'primary'
        ? '15px 25px'
        : '12px 25px'
      : props.variant === 'primary'
      ? '20px 35px'
      : '17px 35px'};
  justify-content: center;
  ${props => (props.width ? `width: ${props.width};` : '')}
  ${props => (props.height ? `height: ${props.height};` : '')}
  &&:hover {
    cursor: pointer;
  }

  &&:disabled {
    cursor: not-allowed;
  }

  ${variant({ variants })};
  ${compose(space, color, layout, flexbox, border, position, shadow, grid)}
`;

Button.defaultProps = {
  variant: 'primary',
};

Button.propTypes = {
  variant: propTypes.oneOf(['primary', 'secondary', 'ternary']),
};

export default Button;
