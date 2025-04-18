import Joi from 'joi';

// export const loginSchema = (
//   required = 'Поле обязательно для заполнения',
//   min = 'Логин должен быть не менее 3 символов',
//   max = 'Логин должен быть не более 15 символов',
// ) =>
//   Joi.string().min(3).max(15).required().messages({
//     'string.empty': required,
//     'string.min': min,
//     'string.max': max,
//   });

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
  min = 'Пароль должен быть не менее 8 символов',
  max = 'Пароль должен быть не более 25 символов',
  pattern = 'Некорректный пароль',
) =>
  // TODO: задать необходимую валидацию для пароля
  Joi.string()
    .min(8)
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

// export const passwordOptionalSchema = (
//   min = 'Пароль должен быть не менее 4 символов',
//   pattern = 'Некорректный пароль',
// ) =>
//   // TODO: задать необходимую валидацию для пароля
//   Joi.string()
//     .min(4)
//     // .regex(
//     //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
//     // )
//     .required()
//     .messages({
//       'string.min': min,
//       'string.pattern.base': pattern,
//     })
//     .allow('');

// export const passwordConformationSchema = (ref: string) =>
//   Joi.any()
//     .valid(Joi.ref(ref))
//     .required()
//     .options({ messages: { 'any.only': 'Пароль должен совпадать' } });

// export const passwordPreviosCheckSchema = () =>
//   Joi.any()
//     .invalid(Joi.ref('password'))
//     .required()
//     .options({ messages: { 'any.invalid': 'Пароль совпадает' } });

export const nameSchema = (
  required = 'Поле обязательно для заполнения',
  min = 'Значение должно быть не менее 3 символов',
  max = 'Значение должно быть не более 3 символов',
) =>
  Joi.string()
    .min(3)
    .max(200)
    .regex(/^[a-zA-Zа-яёА-ЯЁ]+(?:[-' ][a-zA-Zа-яёА-ЯЁ]+)*$/)
    .required()
    .messages({
      'string.pattern.base': `Некорректное значение`,
      'string.empty': required,
      'string.min': min,
    });

// export const stringSchema = (
//   required = 'Поле обязательно для заполнения',
//   max = 'Слишком длинный текст',
// ) =>
//   Joi.string().max(1000).required().messages({
//     'string.empty': required,
//     'string.max': max,
//   });
// export const stringOptionalSchema = (max = 'Слишком длинный текст') =>
//   Joi.string()
//     .max(1000)
//     .required()
//     .messages({
//       'string.max': max,
//     })
//     .allow('');

// export const numberSchema = (
//   required = 'Поле обязательно для заполнения',
//   base = 'Поле содержит только числа',
// ) =>
//   Joi.number().integer().required().messages({
//     'number.required': required,
//     'number.base': base,
//   });

// export const methodSchema = () =>
//   Joi.string()
//     .valid('get', 'post', 'put', 'delete', 'options', 'patch')
//     .required();

// export const routeNameSchema = (
//   required = 'Поле обязательно для заполнения',
//   min = 'Логин должен быть не менее 5 символов',
// ) =>
//   Joi.string().min(5).required().messages({
//     'string.empty': required,
//     'string.min': min,
//   });
