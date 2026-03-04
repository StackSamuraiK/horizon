import z from "zod"

export const signupSchema = z.object({
    email: z.string().email(),
})

export const signinSchema = z.object({
    email: z.string().email(),
})

export type SignupInput = z.infer<typeof signupSchema>
export type SigninInput = z.infer<typeof signinSchema>