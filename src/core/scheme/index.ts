import Joi from "joi";
import {
  emailSchema,
  nameSchema,
  // nameSchema,
  // loginSchema,
  passwordSchema,

} from "./scheme-components";

export const authSchema = Joi.object({
  email: emailSchema(),
  password: passwordSchema(),
});

export const registrationSchema = Joi.object({
  name: nameSchema(),
  email: emailSchema(),
});

// export const settingsSchema = Joi.object({
//   first_name: stringSchema(),
//   last_name: stringSchema(),
//   old_password: passwordPreviosCheckSchema(),
//   password: passwordOptionalSchema(),
//   password2: passwordOptionalSchema("password"),
// });

// export const formSpaceSchema = Joi.object({
//   name: stringSchema(),
// });

// export const formRouteSchema = Joi.object({
//   name: routeNameSchema(),
//   description: stringSchema(),
//   method: methodSchema(),
//   url: stringSchema(),
//   http_code: numberSchema(),
//   content_type: stringSchema(),
//   response: stringSchema(),
//   active: Joi.boolean(),
//   logging_enable: Joi.boolean(),
// });

// export const filteredLogsSchema = Joi.object({
//   startDate: Joi.date(),
//   endDate: Joi.date(),
// });

// export const supportSchema = Joi.object({
//   name: stringSchema(),
//   email: emailSchema(),
//   message: stringSchema(),
// });

// export const recoveryPasswordSchema = Joi.object({
//   email: emailSchema(),
// });
