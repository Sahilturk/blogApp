'use client'
import BackButtton from '@/components/BackButtton';
import FormPost from '@/components/FormPost'
import { FormInputPost } from '@/types'
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react'
import { SubmitHandler } from 'react-hook-form'

const CreatePage = () => {
    const router = useRouter();
    const handleCreatePost: SubmitHandler<FormInputPost> = (data) => {
            createPost(data);
    }
    const { mutate : createPost , isLoading} = useMutation({
      mutationFn: (newPost: FormInputPost) => {
          return axios.post('/api/posts/create' , newPost);
      },
      onError : (error) => {
        console.error(error);
      },
      onSuccess:() => {
          router.push('/');
          router.refresh();
      },
    })

  return (
    <div>
        <BackButtton/>
        <h1 className=' text-2xl font-bold text-center my-4'>Add New Post</h1>
        <FormPost submit={handleCreatePost} isEditing={false}/>
    </div>
  )
}

export default CreatePage