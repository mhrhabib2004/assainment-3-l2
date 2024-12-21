
import { z } from "zod";


// Create blog validation
const createBlogValidation = z.object({
    body: z.object({
        title: z.string({
            required_error: 'Title is required',
        }),
        content: z.string({
            required_error: 'content is required',
        }),
        author: z.string({
            required_error: 'content is required',
        }),
    }),
});


// Update blog validation
const updateBlogValidation = z.object({
    body: z.object({
        title: z.string().optional(),
        content: z.string().optional(),
    }),
});


export const BlogValidation = {
    createBlogValidation,
    updateBlogValidation
};