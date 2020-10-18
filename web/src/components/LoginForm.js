import { Label, Box, Input, Checkbox, Button } from 'theme-ui';

const LoginForm = () => {
  return (
    <Box
      as="form"
      sx={{
        border: '1px solid rgba(0,0,0,0.5)',
        borderRadius: '4px',
        p: 20,
        boxShadow: '0px 4px 6px 2px rgba(0,0,0,0.2)',
      }}
      onSubmit={(e) => e.preventDefault()}
    >
      <Label htmlFor="username">Username</Label>
      <Input name="username" id="username" mb={3} />
      <Label htmlFor="password">Password</Label>
      <Input type="password" name="password" id="password" mb={3} />
      <Box>
        <Label mb={3}>
          <Checkbox />
          Remember me
        </Label>
      </Box>

      <Button
        sx={{
          color: 'background',
          bg: 'primary',
          '&:hover': {
            bg: 'text',
          },
          cursor: 'pointer',
        }}
      >
        Login
      </Button>
    </Box>
  );
};

export default LoginForm;
