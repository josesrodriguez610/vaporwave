"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [bg, setBg] = useState<string | null>(null);

  useEffect(() => {
    const allowed = [1, 2, 3, 4, 6, 8, 9, 10, 11, 12, 13];
    const randomIndex = allowed[Math.floor(Math.random() * allowed.length)];
    setBg(`https://kreweofvaporwave.com/background/back${randomIndex}.png`);
  }, []);

  return (
    <div
      className="min-h-screen bg-black"
      style={
        bg
          ? {
              backgroundImage: `
      linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)),
      url(${bg})
    `,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }
          : undefined
      }
    >
      <main className="mx-auto max-w-6xl px-2 md:px-0 pt-10 pb-28 md:pt-10">
        {/* Title */}
        <header className="mb-20 text-center">
          <h1
            className="
        text-5xl sm:text-6xl font-extrabold italic
              text-yellow-300
              [text-shadow:
                -2px_-2px_0_#000,
                2px_-2px_0_#000,
                -2px_2px_0_#000,
                2px_2px_0_#000
              ]
  "
          >
            the Krewe of Vaporwave
          </h1>
          {/* <p className="mt-4 text-sm uppercase tracking-widest text-neutral-500">
            installation · video · sound
          </p> */}
        </header>

        {/* Content */}
        <section className="grid grid-cols-1 gap-20 md:grid-cols-2 md:items-start">
          {/* Flyer */}
          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-none md:max-w-[500px] border dark:border-neutral-800 dark:bg-neutral-950">
              <Image
                src="https://scontent-dfw5-3.cdninstagram.com/v/t51.75761-15/476585746_18489307171049984_4045083051430817237_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ig_cache_key=MzU2MDk5NzE5MjkxMjQ2MDE1MQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=_uTHadf2_QAQ7kNvwHBFz43&_nc_oc=AdmWIFUQK_Il5OXbUJZFwlJmER0XdYPyNP41srxA-2An74s5u21yIf5M0-2U8MJrKTY&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-dfw5-3.cdninstagram.com&_nc_gid=s5AlHM4MPpJNZZZ6uUxqfw&oh=00_AfnwVAPK-IC11jNoPF1lRqRztNuY_0-wnlWd6KW0XkyaFA&oe=69566888"
                alt="Event Flyer"
                width={800}
                height={1120}
                className="h-auto w-full object-contain"
                priority
              />
              {/* <p className="mt-3 text-center text-xs text-neutral-500">
                Official flyer releasing soon
              </p> */}
            </div>
          </div>

          {/* Info */}
          <div className="max-w-md bg-black/40 p-6 backdrop-blur-sm">
            <h2 className="mb-4 text-xs uppercase tracking-widest text-neutral-300">
              Title
            </h2>

            <p className="mb-8 text-base leading-relaxed text-neutral-100">
              Description: A curated audiovisual experience exploring memory,
              nostalgia, and digital decay through installation, projection, and
              sound.
            </p>

            <dl className="mb-10 space-y-3 text-sm text-neutral-200">
              <div className="flex gap-4">
                <dt className="w-20 text-neutral-400">Date</dt>
                <dd>TBD</dd>
              </div>
              <div className="flex gap-4">
                <dt className="w-20 text-neutral-400">Time</dt>
                <dd>TBD</dd>
              </div>
              <div className="flex gap-4">
                <dt className="w-20 text-neutral-400">Location</dt>
                <dd>New Orleans</dd>
              </div>
            </dl>

            {/* VENMO BUTTON */}
            <a
              href="https://venmo.com/YOUR_VENMO_HANDLE"
              target="_blank"
              rel="noopener noreferrer"
              className="
    mt-8 flex w-full items-center justify-center
    border border-yellow-300
    px-6 py-4
    text-xs font-semibold uppercase tracking-widest
    text-yellow-300
    cursor-pointer
    hover:cursor-pointer
    transition
    hover:bg-yellow-300 hover:text-black
  "
            >
              Buy Ticket (Venmo)
            </a>

            <p className="mt-2 text-center text-xs text-neutral-400">
              Venmo payments only
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
