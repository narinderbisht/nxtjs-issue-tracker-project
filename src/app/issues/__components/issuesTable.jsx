import { Table, Flex, Button, Callout } from '@radix-ui/themes';
import { FaEdit } from 'react-icons/fa';
import Link from 'next/link';
import DeleteButton from '../../components/ui/DeleteButton';
import EditLinkButton from '../../components/ui/EditLinkButton';

export default async function IssuesTable({ perPage, currentPage, query }) {
    const skipPage = currentPage ? currentPage : 1;

    const whereCondition = query ? {
        
            title: {
                contains: query.toString()
            }
        
    } : {};
    
    const issues = await prisma.issue.findMany({
        take: perPage,
        skip: Number(skipPage),
        orderBy: {
        id: 'desc'
        },
        where:whereCondition
    });
    return (
       
        <table className="table">
            <thead>
                <tr>
                    <th>Issue Title</th>
                    <th>Isssue Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {issues.map((issue, index) => (
                    <tr key={index}>
                        <td>{issue.title}</td>
                        <td>{ issue.status }</td>
                        <td>
                            <div className="flex flex-row gap-2 overflow-x-hidden">
                                <EditLinkButton href={`/issues/${issue.id}`}>Edit</EditLinkButton>
                                <DeleteButton issueId={issue.id}>Delete</DeleteButton>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
                        
    )
}
