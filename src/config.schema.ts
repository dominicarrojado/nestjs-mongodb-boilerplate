import * as Joi from 'joi';

export const configValidationSchema = Joi.object({
  STAGE: Joi.string().required(),
  PORT: Joi.number().default(3000).required(),
  DB_URL: Joi.string().required(),
  DB_PORT: Joi.number().default(27017).required(),
});
