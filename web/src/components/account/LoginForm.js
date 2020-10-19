import { Box, Button } from 'theme-ui';
import {
  Form,
  FormError,
  FieldError,
  TextField,
  Label,
} from '@redwoodjs/forms';

const LoginForm = ({ onSave, error, loading, ...props }) => {
  const onSubmit = (data) => {
    onSave(data);
  };

  return (
    <Form onSubmit={onSubmit} error={error}>
      <FormError
        error={error}
        wrapperClassName="rw-form-error-wrapper"
        titleClassName="rw-form-error-title"
        listClassName="rw-form-error-list"
      />
      <Box
        sx={{
          border: '1px solid rgba(0,0,0,0.5)',
          borderRadius: '4px',
          p: 20,
          boxShadow: '0px 4px 6px 2px rgba(0,0,0,0.2)',
          width: 400,
          maxWidth: '90%',
        }}
      >
        <Label
          name="email"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
          sx={{ mt: 0, mb: 0 }}
        >
          Email
        </Label>
        <TextField
          name="email"
          defaultValue=""
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'invalid email address',
            },
          }}
        />
        <FieldError name="email" className="rw-field-error" />

        <Label
          name="password"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
          sx={{ mt: 2, mb: 0 }}
        >
          Password
        </Label>
        <TextField
          name="password"
          defaultValue=""
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="password" className="rw-field-error" />

        <Button
          sx={{
            mt: 3,
            color: 'background',
            bg: 'primary',
            '&:hover': {
              bg: 'text',
            },
            cursor: 'pointer',
          }}
          disabled={loading}
        >
          Login
        </Button>
      </Box>
    </Form>
  );
};

export default LoginForm;
