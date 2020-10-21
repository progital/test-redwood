import React from 'react';

const Button = React.forwardRef((props, ref) => (
  <button
    ref={ref}
    variant="primary"
    {...props}
    sx={{
      appearance: 'none',
      display: 'inline-block',
      textAlign: 'center',
      lineHeight: 'inherit',
      textDecoration: 'none',
      fontSize: 'inherit',
      px: 3,
      py: 2,
      border: 0,
      borderRadius: 4,
      color: 'background',
      bg: 'primary',
      '&:hover': {
        bg: 'text',
      },
      cursor: 'pointer',
    }}
  />
));

export default Button;
