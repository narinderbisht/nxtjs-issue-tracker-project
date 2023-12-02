import React from 'react'
import { Table, Flex, Butto, Button } from '@radix-ui/themes';
import { FaTrash, FaEdit } from 'react-icons/fa';
import Link from 'next/link';

export default function IssuesTable({issues}) {
  return (
    <div>
        <Table.Root>
            <Table.Header>
                <Table.Row>
                    <Table.ColumnHeaderCell>Issue Title</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Isssue Status</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Action</Table.ColumnHeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {issues.map((issue, index) => (
                    <Table.Row>
                        <Table.Cell>{issue.title}</Table.Cell>
                        <Table.Cell>{ issue.status }</Table.Cell>
                        <Table.Cell>
                            <Flex align="center" gap="3">
                                <Button color='red' variant='soft'>
                                    <FaTrash/>
                                </Button>
                                <Button align="center" color='green' variant='soft'>
                                    <Link href={`/issues/${issue.id}`}><FaEdit/></Link>
                                </Button>
                            </Flex>
                        </Table.Cell>
                    
                    </Table.Row>
                ))}
            </Table.Body>
        </Table.Root>
    </div>
  )
}
