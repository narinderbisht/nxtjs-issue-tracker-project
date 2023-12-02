'use client'
import { TextField, Button, Callout, Text } from '@radix-ui/themes';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Controller, useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { createIssueSchema } from '../../validationSchemas';
import ErrorMessage from '@/app/components/ErrorMessage';

export default function newIssue() {

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(createIssueSchema)
  });

  const [error, setError] = useState("");

  const router = useRouter();

  const onSubmit = async(data) => {
    //console.log(data);
    try {
      
      await axios.post('/api/issues', {
        title: data.title,
        description: data.description,
        userId: 1
      }
      );
      router.push('/issues');
    } catch (error) {
      console.log(error);
      setError("An unexpected error occured");
    }

    
  }

  return (
    <div>
      {error &&
        <Callout.Root color='red' className="mb-2">
          <Callout.Text>
            {error}
          </Callout.Text>
        </Callout.Root>
      }
    
    <form className="max-w-2xl space-y-3" onSubmit={handleSubmit(onSubmit)}>
      
        <TextField.Root>
          <TextField.Input placeholder='Issue Title' {...register('title')} />
        </TextField.Root>
        <ErrorMessage>{ errors.title?.message }</ErrorMessage>
      
        <Controller
          name="description"
          control={control}
          render={({ field }) => {
            return <SimpleMDE placeholder="Issue Description" {...field} />
          }}
        />
        <ErrorMessage>{ errors.description?.message }</ErrorMessage>
        
        <Button>Submit Isssue</Button>
      </form>
      </div>
  )
}
