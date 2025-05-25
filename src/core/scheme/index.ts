import Joi from "joi";
import {
  emailSchema,
  nameSchema,
  stringScheme,
  passwordSchema,
  phoneSchema,
  stringArrayScheme,
  fileSchema,

} from "./scheme-components";

export const authSchema = Joi.object({
  email: emailSchema(),
  password: passwordSchema(),
});

export const registrationSchema = Joi.object({
  name: nameSchema(),
  email: emailSchema(),
});


export const confRegScheme = Joi.object({
  author_names: stringArrayScheme(),
  send_name: stringArrayScheme(),
  phone: phoneSchema(),
  email: emailSchema(),
  title: stringScheme(),
  type: stringScheme(),
  annotation: stringScheme(),
  file: fileSchema(),
})
