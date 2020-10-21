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
      borderRadius: 4,
      color: 'primary',
      bg: 'transparent',
      p: 2,
      border: '1px solid rgba(0,0,0,0.5)',
      borderColor: 'primary',
      outlineColor: 'primary',
      '&:hover': {
        borderColor: 'text',
        color: 'background',
        bg: 'text',
      },
      cursor: 'pointer',
    }}
  />
));

export default Button;
