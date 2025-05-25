import Joi from 'joi';

export const emailSchema = (
  required = 'Поле обязательно для заполнения',
  email = 'Проверьте правильность введенного email',
) =>
  Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.empty': required,
      'string.email': email,
    });

export const passwordSchema = (
  required = 'Поле обязательно для заполнения',
  min = 'Пароль должен быть не менее 6 символов',
  max = 'Пароль должен быть не более 25 символов',
  pattern = 'Некорректный пароль',
) =>
  // TODO: задать необходимую валидацию для пароля
  Joi.string()
    .min(6)
    .max(25)
    // .regex(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    // )
    .required()
    .messages({
      'string.required': required,
      'string.empty': required,
      'string.min': min,
      'string.max': max,
      'string.pattern.base': pattern,
    });

export const nameSchema = (
  required = 'Поле обязательно для заполнения',
  min = 'Значение должно быть не менее 3 символов',
) =>
  Joi.string()
    .min(3)
    .regex(/^[a-zA-Zа-яёА-ЯЁ]+(?:[-' ][a-zA-Zа-яёА-ЯЁ]+)*$/)
    .required()
    .messages({
      'string.pattern.base': `Некорректное значение`,
      'string.empty': required,
      'string.min': min,
    });

export const stringScheme = (
  required = 'Поле обязательно для заполнения'
) => Joi.string()
    .regex(/^[a-zA-Zа-яёА-ЯЁ]+(?:[-' ][a-zA-Zа-яёА-ЯЁ]+)*$/)
    .required()
    .messages({
      'string.empty': required,
    });

export const stringArrayScheme = (
  required = 'Поле обязательно для заполнения'
) => Joi.string()
  .regex(/^[a-zA-Zа-яёА-ЯЁ]+(?:[\s,]+[a-zA-Zа-яёА-ЯЁ]+)*$/)
  .required()
  .messages({
    'string.empty': required,
    'string.pattern.base': 'Поле должно содержать слова, разделённые пробелами или запятыми',
  });

export const booleanScheme = (
  required = 'Необходимо выбрать один из вариантов'
) => Joi.boolean()
    .required()
    .messages({
      'string.empty': required,
    });

export const phoneSchema = () => Joi.string()
  .regex(/^(\+7|8)?\d{11}$/)
  .required()
  .messages({
    'string.pattern.base': 'Некорректный российский номер телефона',
    'string.empty': 'Номер телефона не может быть пустым',
  });

export const fileSchema = () => Joi.any()
  .required()
  .messages({
    'any.required': 'Файл обязателен',
  });