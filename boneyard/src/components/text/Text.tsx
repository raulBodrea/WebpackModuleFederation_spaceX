import styled from 'styled-components';
import {
  typography,
  compose,
  system,
  color,
  space,
  layout,
} from 'styled-system';
import theme from '../theme';

const Text = (styled as any)('div')`
  color: ${theme.colors.black100};
  ${compose(typography, color, space, layout)}
  ${system({
    textAlign: true,
    whiteSpace: true,
    textTransform: true,
    textDecoration: true,
  })};
`;

export default Text;
