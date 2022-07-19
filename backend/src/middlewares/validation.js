import { body, validationResult } from 'express-validator';
import createError from 'http-errors';

export const createContactValidationRules = [
  body('first_name')
    .not().isEmpty()
    .withMessage('First name is required'),
  body('last_name')
    .not().isEmpty()
    .withMessage('Last name is required'),
  body('phone_number')
    .not().isEmpty()
    .withMessage('Phone number is required')
    .isNumeric()
    .withMessage('Please enter a valid Phone number'),
  body('email')
    .not().isEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Please enter a valid email')
];

const loginValidationRules = [
  body('email')
    .not().isEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Please enter a valid email'),
  body('password')
    .not().isEmpty()
    .withMessage('Password is required'),
];

const myValidationResult = validationResult.withDefaults({
  formatter: (error) => ({
    title: error.msg,
    param: error.param,
  }),
});

export const validate = (type) => async (req, res, next) => {
  let validationRules;
  let nType = type;
  if (!nType) nType = req.url.split('/').pop();

  switch (nType) {
    case 'create-contact':
      validationRules = createContactValidationRules;
      break;
    case 'login':
      validationRules = loginValidationRules;
      break;
    default:
      validationRules = null;
  }

  try {
    if (!validationRules) {
      throw createError(400, 'Validate type is not valid.');
    }

    await Promise.all(validationRules.map((validationRule) => validationRule.run(req)));

    const errors = myValidationResult(req);

    if (errors.isEmpty()) {
      return next();
    }

    const error = {
      statusCode: 400,
      message: errors.array(),
    };

    return next(error);
  } catch (error) {
    return next(error);
  }
};
