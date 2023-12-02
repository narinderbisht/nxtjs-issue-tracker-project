import { z } from 'zod'
export const createIssueSchema = z.object({
    title: z.string().min(1, 'The title is required').max(250, 'The title max length exceed.'),
    description: z.string("The description is required").min(1, 'The description is required')
});