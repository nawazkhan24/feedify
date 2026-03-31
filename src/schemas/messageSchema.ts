import * as z from "zod"

export const messageSchema = z.object({
    content: z.string().min(10,'content must be atleast of 10 characters').max(300,'content must be atmost of 300 characters')
})