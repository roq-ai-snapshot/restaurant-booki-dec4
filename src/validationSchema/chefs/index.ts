import * as yup from 'yup';

export const chefValidationSchema = yup.object().shape({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  specialty: yup.string().required(),
  experience_years: yup.number().integer().required(),
  restaurant_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
