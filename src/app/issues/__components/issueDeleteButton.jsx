'use client'
import { AlertDialog, Button,Flex } from '@radix-ui/themes';
import { FaTrash } from 'react-icons/fa';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function IssueDeleteButton({ issueId }) {
    const [error, setError] = useState('');
    const router = useRouter();

    const deleteIssueHandle = async () => {
        try {
            await axios.delete(`/api/issues/${issueId}`);
            router.push('/issues');
            router.refresh();
        } catch (error) {
            console.log(error);
            setError(true);
        }

    }
    return (
        <AlertDialog.Root>
            <AlertDialog.Trigger>
            <Button color="red"><FaTrash/></Button>
            </AlertDialog.Trigger>
            <AlertDialog.Content style={{ maxWidth: 450 }}>
            <AlertDialog.Title>Delete Issue</AlertDialog.Title>
            <AlertDialog.Description size="2">
                Are you sure? This data will no longer be accessible.
            </AlertDialog.Description>
            <Flex gap="3" mt="4" justify="end">
                <AlertDialog.Cancel>
                <Button variant="soft" color="gray">
                    Cancel
                </Button>
                </AlertDialog.Cancel>
                <AlertDialog.Action>
                <Button variant="solid" color="red" onClick={deleteIssueHandle}>
                    Delete
                </Button>
                </AlertDialog.Action>
            </Flex>
            </AlertDialog.Content>
        </AlertDialog.Root>
    )
}
