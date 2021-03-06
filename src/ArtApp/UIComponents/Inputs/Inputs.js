import styles from "./inputs.module.scss";

export const Input = ({ input, meta, ...props }) => {
  // console.log({ ...meta });
  const hasError = meta.touched && meta.error;
  return (
    <div className={styles.input + " " + (hasError && styles.inputError)}>
      <input {...input} {...props} style={{ padding: props.padding }} />
      {hasError && <p>{"* " + meta.error}</p>}
    </div>
  );
};

export const Textarea = ({ input, meta, ...props }) => {
  // console.log({ ...meta });
  const hasError = meta.touched && meta.error;
  return (
    <div className={styles.textarea + " " + (hasError && styles.textareaError)}>
      <textarea
        {...input}
        {...props}
        style={{
          resize: props.resize,
          minHeight: props.minheight,
          maxHeight: props.maxheight,
          textAlign: props.textalign,
        }}
      ></textarea>
      {hasError && <p>{"* " + meta.error}</p>}
    </div>
  );
};
