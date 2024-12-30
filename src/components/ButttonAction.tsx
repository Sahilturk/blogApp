'use client'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { Pencil, Trash2 } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { FC } from 'react'

interface ButttonActionProps {  
  postId : string,
}
const ButttonAction: FC<ButttonActionProps> = ({postId}) => {
  const router = useRouter();
  const { mutate: deletePost } = useMutation({
    mutationFn :async () => {
        return axios.delete(`/api/posts/${postId}`)
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
        <Link href={`/edit/${postId}`} className=' btn mr-2'>
        <Pencil />Edit
        </Link>
        <button onClick={() => deletePost()} className=' btn btn-error'>
        <Trash2 />Delete
        </button>
    </div>
  )
}

export default ButttonAction