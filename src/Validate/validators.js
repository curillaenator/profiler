export const required = (value) => (value ? undefined : "Обязательное поле");

export const minLength = (min) => (value) =>
  value && value.length < min ? `не меньше ${min} символов` : undefined;

export const maxLength = (max) => (value) =>
  value && value.length > max ? `максимум ${max} символов` : undefined;

export const combinedValidators = (...validators) => (value) =>
  validators.reduce((err, val) => err || val(value), undefined);
