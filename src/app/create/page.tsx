'use client';   
import BackButtton from '@/components/BackButtton';
import FormPost from '@/components/FormPost'
import { FormInputPost } from '@/types'
import React from 'react'
import { SubmitHandler } from 'react-hook-form'

const CreatePage = () => {

    const handleCreatePost: SubmitHandler<FormInputPost> = (data) => {
            console.log(data);
    }

  return (
    <div>
        <BackButtton/>
        <h1 className=' text-2xl font-bold text-center my-4'>Add New Post</h1>
        <FormPost submit={handleCreatePost} isEditing={false}/>
    </div>
  )
}

export default CreatePage