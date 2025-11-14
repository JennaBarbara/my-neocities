"use client"

import Card from "@/app/components/card"
import Heading from "@/app/components/heading"
import Button from "@/app/components/button"
import { getHomePath } from "../path"
import { redirect, RedirectType } from 'next/navigation'
import { posts } from '@/app/home/weblog/posts'
import JsxParser from 'react-jsx-parser'

export default function Weblog() {

    const dateDisplayOptions: Intl.DateTimeFormatOptions  = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };

  return (
  <>
      {/* header section */}
        <Heading text="˖⁺‧₊JenBarb's Log on the Web₊‧⁺˖" className="col-span-1 md:col-span-5 text-2xl p-4" />

        {/* main section */}
        <div  className="col-span-1 md:col-span-4 flex flex-col content-start gap-2">
            {posts.map((post, key) => (
                <Card  title={post.title}
                    key={`post-${key}`}
                >
                    <JsxParser
                        jsx={post.content}
                    />
                    <p>{`posted: ${new Date(post.date).toLocaleDateString("en-US", dateDisplayOptions)}`}</p>
            </Card>
            ))}
        </div>
        {/* right section */}
        <div className="col-span-1 flex flex-col content-start gap-2">
        <Card
            title="Nav"
        >
         <Button
            size="sm"
            onClick={() => redirect(getHomePath(), RedirectType.push)}>Back To Home</Button>
        </Card>
        </div>
  </>
  )
}