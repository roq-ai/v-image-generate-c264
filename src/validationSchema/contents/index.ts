import * as yup from 'yup';

export const contentValidationSchema = yup.object().shape({
  type: yup.string().required(),
  prompt: yup.string().required(),
  image: yup.string(),
  video: yup.string(),
  user_id: yup.string().nullable(),
  organization_id: yup.string().nullable(),
});
