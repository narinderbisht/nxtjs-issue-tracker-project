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
import ErrorMessage from '../../components/ErrorMessage';
import Spinner from '../../components/Spinner';

export default function IssueForm({issue}) {

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(createIssueSchema)
  });

  const [error, setError] = useState("");
  const [isSubmitting, SetIsSubmitting] = useState(false);

  const router = useRouter();

  const onSubmit = async(data) => {
    //console.log(data);
    try {
        SetIsSubmitting(true);
        if (issue)
            await axios.patch(`/api/issues/${issue.id}`, data);
        else
        await axios.post('/api/issues', {
            title: data.title,
            description: data.description,
            userId: 1
        }
        );
       
      router.push('/issues');
      router.refresh();
    } catch (error) {
      SetIsSubmitting(false);
      console.log(error);
      setError("An unexpected error occured");
    }

    
  }

  return (
    <div className="max-w-xl">
      {error &&
        <Callout.Root color='red' className="mb-2">
          <Callout.Text>
            {error}
          </Callout.Text>
        </Callout.Root>
      }
    
    <form className="max-w-2xl space-y-3" onSubmit={handleSubmit(onSubmit)}>
      
        <TextField.Root>
                  <TextField.Input 
                      defaultValue={issue ? issue.title : ''}
          placeholder='Issue Title' {...register('title')} />
        </TextField.Root>
        <ErrorMessage>{ errors.title?.message }</ErrorMessage>
      
        <Controller
          name="description"
                  control={control}
                  defaultValue={issue ? issue.description : ''}
          render={({ field }) => {
            return <SimpleMDE placeholder="Issue Description" {...field} />
          }}
        />
        <ErrorMessage>{ errors.description?.message }</ErrorMessage>
        
              <Button disabled={isSubmitting}>
                  {issue ? 'Update Issue' : 'Submit Isssue'} {isSubmitting && <Spinner />}</Button>
      </form>
      </div>
  )
}
