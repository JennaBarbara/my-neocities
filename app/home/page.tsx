"use client"

import Image from "next/image";
import Card from '@/app/components/card'
import Button from "@/app/components/button"
import Heading from "@/app/components/heading"
import { getWeblogPath } from "./weblog/path";
import { redirect, RedirectType } from 'next/navigation'


export default function Home() {
  return (
    <>
        {/* header section */}
        <Heading text="˖⁺‧₊JenBarb's Online Space₊‧⁺˖" className="col-span-1 md:col-span-5 text-2xl p-4" />

        {/* left section */}
        <div className="col-span-1 flex flex-col content-start gap-2">
        <Card
            title="WebLog"
        >
        <Button 
            size="sm"
            onClick={() => redirect(getWeblogPath(), RedirectType.push)}
            >
                All Posts
        </Button>
          
        </Card>
        <Card
            title="Shrines"
        >
            Coming Soon!
        </Card>
        </div>

           {/* main section */}
        <div  className="col-span-1 md:col-span-3 flex flex-col content-start gap-2">
        <Card
            title="About"
        >
        I’m Jenna, I usually go by JenBarb or JenBarb_ online. I like doing crafts and programming. If you live in Toronto you might remember me from the time I drew fanart of a guy on a segway grabbing a raccoon and BlogTO interviewed me about it. 
        </Card>
           <Card
            title="Projects"
        >
                Coming Soon!
        </Card>
        </div>

           {/* right section */}
        <div  className="col-span-1 flex flex-col content-start gap-2">
              <Card
            title="Links"
        >
            <Button 
                size="sm"
                onClick={() => redirect("https://bsky.app/profile/jenbarb.bsky.social", RedirectType.push)}
                >
                    BlueSky
                </Button>
             <Button 
             size="sm"
            onClick={() => redirect("https://www.instagram.com/jenbarb_/", RedirectType.push)}
                >
                    Instagram
                </Button>
                
        </Card> 
           
        </div>
   </>
  );
}
