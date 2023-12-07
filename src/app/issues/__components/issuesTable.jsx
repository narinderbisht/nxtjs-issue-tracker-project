'use client'
import React, { useState } from 'react'
import { Table, Flex, Button, Callout } from '@radix-ui/themes';
import { FaEdit } from 'react-icons/fa';
import Link from 'next/link';
import IssueDeleteButton from './issueDeleteButton';

export default function IssuesTable({ issues }) {
    const [message, setMessage] = useState('');
  return (
      <div>
          {message &&
              <Callout.Root className="mt-2 mb-2">
                  <Callout.Text>
                      {message}
                  </Callout.Text>
              </Callout.Root>
          }
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
                    <Table.Row key={index}>
                        <Table.Cell>{issue.title}</Table.Cell>
                        <Table.Cell>{ issue.status }</Table.Cell>
                        <Table.Cell>
                            <Flex align="center" gap="3">
                                <IssueDeleteButton issueId={issue.id}/>
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
