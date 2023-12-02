'use client'
import { TextField, Flex, Button } from '@radix-ui/themes';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Controller, useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function newIssue() {

  const {
    register,
    handleSubmit,
    control
  } = useForm();

  const router = useRouter();

  const onSubmit = async(data) => {
    console.log(data);

    await axios.post('/api/issues', {
      title: data.title,
      description: data.description,
      userId: 1
    }
    );
    router.push('/issues');
    
  }

  return (
    <form className="max-w-2xl space-y-3" onSubmit={handleSubmit(onSubmit)}>
        <TextField.Root>
          <TextField.Input placeholder='Issue Title' {...register('title')} />
        </TextField.Root>
        <Controller
          name="description"
          control={control}
          render={({ field }) => {
            return <SimpleMDE placeholder="Issue Description" {...field} />
          }}
        />
        
        <Button>Submit Isssue</Button>
    </form>
  )
}
