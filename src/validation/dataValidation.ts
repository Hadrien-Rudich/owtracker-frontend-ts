import { z } from 'zod';

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
// const battleTagRegex = /^(?=.*[#])[A-Za-z\d#]{3,20}$/;
const dateFormatRegex = /^\d{2}\/\d{2}\/\d{2}$/;

export type NewUser = z.infer<typeof RegisterSchema>;

export const RegisterSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  // battleTag: z.string().refine((value) => battleTagRegex.test(value), {
  //   message: 'Invalid BattleTag Format',
  // }),
  password: z.string().refine((value) => passwordRegex.test(value), {
    message: 'Invalid Password Format',
  }),
});

export const LoginSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  password: z.string().refine((value) => passwordRegex.test(value), {
    message: 'Invalid Password Format',
  }),
});

export const NewGameSchema = z.object({
  result: z
    .string()
    .refine((result) => ['win', 'loss', 'draw'].includes(result), {
      message: 'Game requires a result',
    }),
  map: z
    .string()
    .min(1)
    .refine((map) => map.length >= 1, {
      message: 'Game requires a map',
    }),
  heroes: z
    .array(z.string())
    .min(1)
    .max(4)
    .refine((heroes) => heroes.length >= 1 && heroes.length <= 4, {
      message: 'Game requires 1-4 heroes',
    }),
  date: z.string().refine((date) => dateFormatRegex.test(date), {
    message: 'Game requires a date',
  }),
});

export const GameUpdateSchema = z.object({
  result: z
    .string()
    .refine((result) => ['win', 'loss', 'draw'].includes(result), {
      message: 'Select a valid result',
    }),
  map: z.string(),
  heroes: z
    .array(z.string())
    .min(1)
    .max(4)
    .refine((heroes) => heroes.length >= 1 && heroes.length <= 4, {
      message: 'Game requires 1-4 heroes',
    }),
  date: z.string().refine((date) => dateFormatRegex.test(date), {
    message: 'Select a valid date',
  }),
});
