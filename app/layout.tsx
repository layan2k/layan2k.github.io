import './globals.css'
import { DM_Sans } from 'next/font/google'

const DM = DM_Sans({ subsets: ['latin'], weight: ['400', '500','700'] })

export const metadata = {
  title: 'Leslie Shumba',
  description: 'I am a skilled web developer proficient in React, Node, Express, Django, and Next JS, with expertise in SEO optimization and digital marketing. Contact me for your web development and online marketing needs. Based in Zimbabwe.',
  keywords:'Leslie Shumba, web developer, React, Node, Express, Django, Next JS, SEO optimization, digital marketing, Zimbabwe,HTML, CSS, JavaScript, ExpressJs, MySQL, MongoDB, Python, Software developer, Backend developer, Frontend developer, Fullstack , Zimbabwean Developers ,Zimbabwe , African Developers , Dev-ops , Node JS, Express.js , Middleman Africa , Africa , ALX, address, africa,agency, application, applying, backend,bash, basic, beta, bucket, certificate, clients, clone, contact, database, demo, developed, developer, developing, devops, django, docker, dokan, download,elementor, elevate, email, engineer, engineering, express, fireside, flask, frontend, fully, github, holberton, html, java, javascript, landing, languages,leslie, lestech, load, love, message, middleman, mongodb, movie, multivendor, mysql, near, nextjs, nginx, node, page, partnership, pixabay, platforms, playing,postgresql, present, program, programme, programming, project, projects, provided, python, react, reactjs, resposive, resume, role, school, scripting, shell, shumba, site, skills, software, stack, static, student, submit, tailwind, time, touch, used, using, version, want, websites, wordpressyear',
  viewport: 'width=device-width, initial-scale=1.0',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
          <meta property="og:title" content="Leslie Shumba | Web Developer and SEO Specialist"/>
          <meta property="og:description" content="I am a skilled web developer proficient in React, Node, Express, Django, and Next JS, with expertise in SEO optimization and digital marketing. Contact me for your web development and online marketing needs. Based in Zimbabwe."/>
          <meta property="og:image" content="[insert a relevant image of yourself or your work]"/>
          <meta property="og:url" content="[https://lesliethedev.me]"/>
          <meta name="twitter:title" content="Leslie Shumba | Web Developer and SEO Specialist"/>
          <meta name="twitter:description" content="I am a skilled web developer proficient in React, Node, Express, Django, and Next JS, with expertise in SEO optimization and digital marketing. Contact me for your web development and online marketing needs. Based in Zimbabwe."/>
          <meta name="twitter:image" content="[insert a relevant image of yourself or your work]"/>
          <meta name="twitter:card" content="summary_large_image"/>
          <meta name="twitter:site" content="@layan2k"/>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <link rel="manifest" href="/site.webmanifest" crossOrigin="use-credentials"/>
          <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/uicons-regular-straight/css/uicons-regular-straight.css'/>
          <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/uicons-solid-straight/css/uicons-solid-straight.css'/>
          <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/uicons-bold-rounded/css/uicons-bold-rounded.css'/>
          <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css'/>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.12.0/devicon.min.css"/>
      </head>
      <body className={DM.className}>{children}</body>
    </html>
  )
}