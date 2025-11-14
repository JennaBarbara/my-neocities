"use client"

import Image from "next/image";
import Card from '@/app/components/card'
import Button from "@/app/components/button"
import Heading from "@/app/components/heading"
import SubHeading from "../components/sub-heading"
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
        <div className="flex flex-col gap-4">
        <p>
          I’m Jenna, I usually go by JenBarb or JenBarb_ online. I like doing crafts and programming. If you live in Toronto you might remember me from the time I drew fanart of a guy on a segway grabbing a raccoon and BlogTO interviewed me about it. I grew up on a bee farm. 
        </p>
        <p>
          Lately I&apos;ve been into digital art, mostly using Clip Studio Paint I like the program&apos;s vector tools for being able to make clean looking illustrations without needing to spend too much time doing cleanup. That said, I&apos;ll probably be getting back into watercolour and gouache soon. 
        </p>
        <p>
          I&apos;ve also been enjoing sewing (mainly wearable garments for myself, from vintage and deadstock fabric, but I occasionally make cosplays), reading fantasy & sci books, and going to concerts these days. 
        </p>

        </div>

        </Card>
           <Card
            title="Projects"
        >
          <div className="flex flex-col gap-4">
            <SubHeading text="Raccoons to Riches" />
            <p>
              I made the art assets and some limited UI design and code contributions on this upcoming videogame, built with the Godot Engine. It&apos;s a roguelike deckbuilder about running an item shop in a fantasy setting. The steam page can be found <a className="text-slate-600 font-bold" href="https://store.steampowered.com/app/3778620/Raccoons_to_Riches/">here</a>. 
            </p>
            <SubHeading text="The Freesewing Sophie Slip" />
             <p>
              Freesewing is an open-source platform for generating made-to-measure sewing patterns. The designs the patterns are based on are written as javascript code. I wanted to sew myself a slip dress, so I decided to try using the FreeSewing API to draft a new design. The Sophie Slip can be found on the official FreeSewing website,  <a className="text-slate-600 font-bold" href="https://freesewing.eu/designs/sophie/">here</a>. 
            </p>  
            <SubHeading text="L.A.D.Y. Radio Fan Animated Music Video" />
             <p>
              During the final COVID lockdown of 2022 I went into a sort of trance and tempararily learned how to animate and made a fan video for a song by the band TWRP. You can find it <a className="text-slate-600 font-bold" href="https://www.youtube.com/watch?v=EFQqJNu01BA">here</a>.
            </p>             
          </div>
        </Card>
        </div>

           {/* right section */}
        <div  className="col-span-1 flex flex-col content-start gap-2">
           <Card
            title="Links"
            >
            <Button 
              size="sm"
              onClick={() => redirect("https://store.steampowered.com/app/3778620/Raccoons_to_Riches/", RedirectType.push)}
              >
              Raccoons to Riches
            </Button> 
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
            <Button 
              size="sm"
              onClick={() => redirect("https://mastodon.art/@JenBarb_", RedirectType.push)}
              >
                Mastodon
            </Button>
            <Button 
              size="sm"
              onClick={() => redirect("https://www.tumblr.com/jenbarb", RedirectType.push)}
              >
                Tumblr
            </Button>
        </Card> 
           
        </div>
   </>
  );
}
