import { z } from 'zod';
//import { prisma } from '@prisma/client';
//import prisma from '@prisma/db'
//import { PrismaClient } from "@prisma/client"; 
import prisma from '../../../../prisma/client';
import { createIssueSchema } from '../../validationSchemas'; 

export async function POST(req) {
    try {
        
        const body = await req.json();
        const validation = createIssueSchema.safeParse(body);
        if (!validation.success) {
            return Response.json(validation.error.format(), { status: 400 });
            
        }
        //console.log(body);
        //const prisma = new PrismaClient(); 
        const issueCreated = await prisma.issue.create({
            data: {
                title: body.title,
                description: body.description,
                userId: body.userId
            }
        });
        //console.log(issueCreated);
        return Response.json(issueCreated, { status: 200 });
    } catch (error) {
        //console.log(error);
        return Response.json(error, { status: 500 });
    }
}
