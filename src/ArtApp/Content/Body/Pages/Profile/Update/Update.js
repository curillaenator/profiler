import { Form } from "react-final-form";
import { FORM_ERROR } from "final-form";
import UpdateForm from "./UpdateForm";

import styles from "./update.module.scss";
import ButtonUI from "../../../../../UIComponents/ButtonUI/ButtonUI";

const Update = (props) => {
  // console.log(props);
  const onSubmit = (formData) => {
    formData.userId = props.ownerId;
    return props.updateProfile(formData).then((r) => {
      r.resultCode === 0 && props.editMode();
      return r.resultCode !== 0 && { [FORM_ERROR]: r.messages[0] };
    }); // if ok => close form, if error => show error
  };

  return (
    <div className={styles.update}>
      <h2>Обновить данные профиля</h2>
      <div className={styles.cancel}>
        <ButtonUI
          title="отмена"
          type="secondary"
          fontsize="10px"
          handler={props.editMode}
        />
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
            icons={props.icons}
          />
        )}
      />
    </div>
  );
};

export default Update;
