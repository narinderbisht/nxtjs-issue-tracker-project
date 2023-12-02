import { z } from 'zod';
//import { prisma } from '@prisma/client';
//import prisma from '@prisma/db'
import { PrismaClient } from "@prisma/client";  
/*export async function POST(req,res){
    const data  =await req.json()
    console.log(data)
    return Response.json({ data })
    //res.status(200).json({ message: 'Hello from Next.js!' })

    //return NextResponse.json(data)
}*/
export async function POST(req, res ) {
    try {
        const createIssueSchema = z.object({
            title: z.string().min(1, 'The title is required').max(250, 'The title max length exceed.'),
            description: z.string().min(10, 'The description is required')
        });
        const body = await req.json();
        const validation = createIssueSchema.safeParse(body);
        if (!validation.success) {
            return Response.json(validation.error.format(), { status: 400 });
            
        }
        //console.log(body);
        const prisma = new PrismaClient(); 
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