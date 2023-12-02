import { z } from 'zod';
import prisma from '../../../../../prisma/client';
import { createIssueSchema } from '@/app/validationSchemas';
export async function PATCH(req, {params}) {
    try {
        
        const body = await req.json();
        
        const validation = createIssueSchema.safeParse(body);
        if (!validation.success)
            return Response.json(validation.error.format(), { status: 401 });

        const issue = await prisma.issue.findUnique({
            where: { id: parseInt(params.id) }
        });

        if (!issue)
            return Response.json("Data record did not found", { status: 401 });

        await prisma.issue.update({
            where: {
                id: parseInt(params.id)
            },
            data: {
                title: body.title,
                description: body.description
            }
        });

        return Response.json("Data updated", { status: 201 });

    } catch (error) {
        return Response.json(error, { status: 500 });
    }
}