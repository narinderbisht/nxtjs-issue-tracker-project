'use client'
import React, { useState } from 'react'
import { Table, Flex, Button, Callout } from '@radix-ui/themes';
import { FaEdit } from 'react-icons/fa';
import Link from 'next/link';
import DeleteButton from '../../components/ui/DeleteButton';
import EditLinkButton from '../../components/ui/EditLinkButton';

export default function IssuesTable({ issues }) {
    const [message, setMessage] = useState('');
  return (
      <div className="flex flex-col">
          <div className="overflow-x-auto">
              <div className="inline-block min-w-full align-middle">
                  <div className="overflow-hidden shadow">
          {message &&
              <Callout.Root className="mt-2 mb-2">
                  <Callout.Text>
                      {message}
                  </Callout.Text>
              </Callout.Root>
          }
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
                            <div className="flex flex-row gap-2 overflow-x-hidde">
                            <EditLinkButton href={`/issues/${issue.id}`}>Edit</EditLinkButton>
                            <DeleteButton issueId={issue.id}>Delete</DeleteButton>
                            </div>
                        </td>
                    
                    </tr>
                ))}
            </tbody>
        </table>
          </div>
          </div>
          </div>
          </div>
  )
}
