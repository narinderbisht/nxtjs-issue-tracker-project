'use client'
import { AlertDialog, Button,Flex } from '@radix-ui/themes';
import { FaTrash } from 'react-icons/fa';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function IssueDeleteButton({ children, issueId }) {
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
    <>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button className="btn btn-error btn-sm" onClick={() => document.getElementById('my_modal_1').showModal()}><FaTrash/> { children}</button>
        <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
            <h3 className="font-bold text-lg">Delete Data!</h3>
            <p className="py-4">Are you sure? This data will no longer be accessible.</p>
            <div className="modal-action">
            <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn" onClick={deleteIssueHandle}>Delete</button>
                <button className="btn">Close</button>
            </form>
            </div>
        </div>
            </dialog>
    </>
        
    )
}
