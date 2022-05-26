import { Text as OriginalText } from 'boneyard';
import React from 'react';

const Text = ({ children, ...props }) => (
  <OriginalText color="white" {...props}>
    {children}
  </OriginalText>
);

export default Text;
