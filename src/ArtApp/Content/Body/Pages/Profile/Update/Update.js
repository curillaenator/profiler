import { Form } from "react-final-form";
// import { FORM_ERROR } from "final-form";
import UpdateForm from "./UpdateForm";

import styles from "./update.module.scss";
import ButtonUI from "../../../../../UIComponents/ButtonUI/ButtonUI";

const Update = (props) => {
  //   console.log(props);
  const onSubmit = (formData) => {
    // refactor formdata to match server API
    const contactsUpd = {};

    Object.keys(props.user.contacts).forEach((c) => {
      formData[c] ? (contactsUpd[c] = formData[c]) : (contactsUpd[c] = null);
      delete formData[c];
    });

    formData.contacts = contactsUpd;
    formData.userId = props.ownerId;

    // request server for update
    props
      .updateProfile(formData)
      .then((r) => r.resultCode === 0 && props.editMode()); // if ok, close form
  };

  return (
    <div className={styles.update}>
      <h2>Обновить данные профиля</h2>
      <div className={styles.cancel}>
        <ButtonUI title="отмена" type="secondary" handler={props.editMode} />
      </div>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, values, submitError, form, pristine }) => (
          <UpdateForm
            handleSubmit={handleSubmit}
            pristine={pristine}
            form={form}
            values={values}
            submitError={submitError}
            ownerId={props.ownerId}
            user={props.user}
            editMode={props.editMode}
          />
        )}
      />
    </div>
  );
};

export default Update;
