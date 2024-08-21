import React from 'react'
import Link from 'next/link'

export default function NavSocialLinks({ data }) {
  return (
    <div>
        <Link href={data.href} className='all-links-socials'>
            {data.title}
        </Link>
    </div>
  )
}
