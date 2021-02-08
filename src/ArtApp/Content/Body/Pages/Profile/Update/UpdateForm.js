import { Field } from "react-final-form";
import { Input, Textarea } from "../../../../../UIComponents/Inputs/Inputs";
import ButtonUI from "../../../../../UIComponents/ButtonUI/ButtonUI";
import {
  required,
  minLength,
  maxLength,
  combinedValidators,
} from "../../../../../../Validate/validators";

import styles from "./update.module.scss";

const Contacts = (props) => {
  return (
    <div className={styles.contacts}>
      {Object.keys(props.contacts).map((c) => (
        <div className={styles.contact} key={c}>
          <Field
            name={c}
            placeholder={c}
            component={Input}
            initialValue={props.contacts[c]}
          />
        </div>
      ))}
    </div>
  );
};

const UpdateForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={styles.form}>
      <h3>Кто вы?</h3>

      <div className={styles.input}>
        <Field
          name="fullName"
          placeholder="Ваше полное имя"
          component={Input}
          validate={combinedValidators(required, minLength(3))}
          initialValue={props.user.fullName}
        />
      </div>

      <h3>Укажите профессию</h3>

      <div className={styles.input}>
        <Field
          name="lookingForAJobDescription"
          placeholder="Ваша специализация"
          component={Input}
          validate={combinedValidators(required, minLength(10))}
          initialValue={props.user.lookingForAJobDescription}
        />
      </div>

      <h3>Ищите работу?</h3>

      <div className={styles.checkbox}>
        <Field
          name="lookingForAJob"
          type="checkbox"
          component="input"
          initialValue={props.user.lookingForAJob}
        />
        Да
      </div>

      <h3>Расскажите кратко о себе</h3>

      <div className={styles.textarea}>
        <Field
          name="aboutMe"
          placeholder="Коротко о ваших стремлениях..."
          component={Textarea}
          initialValue={props.user.aboutMe}
          validate={combinedValidators(required, maxLength(300), minLength(15))}
          resize="none"
          minheight="8rem"
          maxheight="8rem"
          textalign="center"
        />
      </div>

      <h3>Ваши контакты</h3>

      <Contacts contacts={props.user.contacts} />

      <div className={styles.buttons}>
        <div className={styles.submit}>
          <ButtonUI
            title="Обновить профиль"
            disabled={
              !props.values.fullName || !props.values.lookingForAJobDescription
            }
          />
        </div>

        <div className={styles.erase}>
          <ButtonUI
            title="очистить"
            type="secondary"
            disabled={props.pristine}
            handler={props.form.reset}
          />
        </div>
      </div>
    </form>
  );
};
export default UpdateForm;
