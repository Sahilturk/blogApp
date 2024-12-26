import BackButtton from '@/components/BackButtton'
import ButttonAction from '@/components/ButttonAction'
import React from 'react'

const BlogDetailPage = () => {
    return (
        <div>
            <BackButtton/>
            <div className=' mb-8'>
                <h2 className='text-2xl font-bold my-4'>Post</h2>
                <ButttonAction/>
            </div>
            <p className=' text-slate-700'>content</p>
        </div>
    )
}

export default BlogDetailPage