import { z } from 'zod';

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const battleTagRegex = /^(?=.*[#])[A-Za-z\d#]{3,20}$/;

export type NewUser = z.infer<typeof RegisterSchema>;

export const RegisterSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  battleTag: z.string().refine((value) => battleTagRegex.test(value), {
    message: 'Invalid BattleTag Format',
    // 'BattleTag must meet the following format: 1 hash, 1 letter, 1 digit, 3 chars min, 20 chars max',
  }),
  password: z.string().refine((value) => passwordRegex.test(value), {
    message: 'Invalid Password Format',
    // 'Password must meet the following format: 1 uppercase, 1 lowercase, 1 digit, 1 special char, 8 chars min, 25 chars max',
  }),
});

export const LoginSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  password: z.string().refine((value) => passwordRegex.test(value), {
    message: 'Invalid Password Format',
    // 'Password must meet the following format: 1 uppercase, 1 lowercase, 1 digit, 1 special char, 8 chars min, 25 chars max',
  }),
});
