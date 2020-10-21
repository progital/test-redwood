import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms';

const UserForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.user?.id);
  };

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="email"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Email
        </Label>
        <TextField
          name="email"
          defaultValue={props.user?.email}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="email" className="rw-field-error" />

        <Label
          name="password"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Password
        </Label>
        <TextField
          name="password"
          defaultValue={props.user?.password}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="password" className="rw-field-error" />

        <Label
          name="displayName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Display name
        </Label>
        <TextField
          name="displayName"
          defaultValue={props.user?.displayName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="displayName" className="rw-field-error" />

        <Label
          name="userName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          User name
        </Label>
        <TextField
          name="userName"
          defaultValue={props.user?.userName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="userName" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  );
};

export default UserForm;
