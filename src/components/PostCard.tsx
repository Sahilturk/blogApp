import { Tag } from '@prisma/client';
import Link from 'next/link'
import React, { FC } from 'react'

interface PostCardProps{
  post: {
     id : string;
     title : string;
     content : string;
     tag: Tag;
  };
}
const PostCard: FC<PostCardProps> = ({ post}) => {
  const { title , content, tag} = post;
  return (
    <div className="card bg-base-100 w-full shadow-xl border">
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{content}</p>
    <div className="card-actions justify-end">
       <span className="badge">{tag.name}</span>
      <Link href='/blog/1' className=' text-blue-400 hover:underline'>Read more .....</Link>
    </div>
  </div>
</div>
  )
}

export default PostCard