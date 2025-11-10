"use client"

import Image from "next/image";
import Card from '@/app/components/card'
import Button from "@/app/components/button"
import Heading from "@/app/components/heading"
import { redirect, RedirectType } from 'next/navigation'
import { Bruno_Ace_SC } from 'next/font/google'

const bruno = Bruno_Ace_SC({
  weight: '400'
})


export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-t from-cyan-200 to-sky-500">

      <main className="grid grid-cols-1 md:grid-cols-5 min-h-screen w-full max-w-4xl content-start py-20 px-4 bg-blue-50/50 gap-x-2 gap-y-4">
          {/* header section */}
        <Heading text="˖⁺‧₊JenBarb's Online Space₊‧⁺˖" className="col-span-1 md:col-span-5 text-2xl p-4" />

        {/* left section */}
        <div className="col-span-1 flex flex-col content-start gap-2">
        <Card
            title="WebLog"
        >
         Coming Soon!
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
      </main>
    </div>
  );
}
