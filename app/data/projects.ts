// Project Data export function
interface ProjectObject {
  id: number,
  title: string,
  about: string,
  tags: Array<string>,
  demo: string,
  github: string,
  image: string,
}

export const ProjectData = [
  {
    id: 1,
    title: 'Pixabay Project',
    about: ' Here We Use The API Provided By Pixabay To Load A Pixabay Clone WIth React JS. ',
    tags: ['React Js', 'Pixabay API'],
    demo: 'https://priceless-beaver-db33c0.netlify.app/',
    github: 'https://github.com/layan2k/pixabay-tailwind-react',
    image: 'https://firesidebackapp.s3.amazonaws.com/mypics/PixabayProject.png',
  },
  {
    id: 2,
    title: 'Elevate',
    about: ' A Multivendor Developed Using WordPress, Dokan and Elementor.',
    tags: ['WordPress', 'Elementor', 'Dokan'],
    demo: 'https://creativeyadleydemo.com/codetestzim/',
    image: 'https://firesidebackapp.s3.amazonaws.com/mypics/Screenshot+2021-09-21+093209.png',
  },
  // {
  //     id:3,
  //     title:"_printf",
  //     about:"This a group project of 2 members. We aim to create a version of C's printf function found in the standard library <stdio.h>. This was an assigned task By ALX-Holberton.",
  //     tags:["C", "Low-Level"],
  //     github:"https://github.com/layan2k/printf",
  //     image:"http://creativeyadleydemo.com/codetestzim/wp-content/uploads/sites/65/2021/08/c.png",
  // },
  {
    id: 3,
    title: 'LESTECH, ALX Application',
    about:
      'A Near Fully Resposive Static page. This was used in applying for the ALX Software Engineering Programme.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/layan2k/ALX',
    demo: 'https://lestech.netlify.app/',
    image: 'https://firesidebackapp.s3.amazonaws.com/mypics/lestech.png',
  },
  {
    id: 4,
    title: 'FireSide Movie App',
    about: 'A Beta Version Of A Movie App Project.',
    tags: ['React', 'Django', 'NextJs', 'AWS S3 Bucket'],
    github: 'https://github.com/layan2k/fireside-front',
    demo: 'https://fireside.vercel.app/',
    image: 'https://firesidebackapp.s3.amazonaws.com/mypics/Fireside.png',
  },
  {
    id: 5,
    title: 'Agency Site (Basic Landing Page)',
    about: 'A Basic React Landing Page',
    tags: ['React', 'JavaScript'],
    github: 'https://github.com/layan2k/agency-site',
    demo: 'https://agenctdemolds.netlify.app/',
    image: 'https://firesidebackapp.s3.amazonaws.com/mypics/AgencySite.png',
  },
  {
    id: 6,
    title: 'Pizza UI',
    about: 'Basic React Pizza UI',
    tags: ['React', 'JavaScript'],
    github: '',
    demo: 'https://foodui.lesliethedev.me/',
    image: 'https://firesidebackapp.s3.amazonaws.com/mypics/mobile+(6).png'
  },
  {
    id: 7,
    title: 'IntraSpark',
    about: 'React Three Project , exploring 3D development with React',
    tags: ['React', 'Three', 'React Three', 'Vite'],
    github: 'https://github.com/layan2k/react_three_intraSpark',
    demo: 'https://intraspark.lesliethedev.me/',
    image: 'https://firesidebackapp.s3.amazonaws.com/mypics/mobile+(8).png'
  },
  {
    id: 8,
    title: 'Frontend Mentor QR Code Component',
    about: '',
    tags: ['HTML', 'CSS'],
    github: 'https://github.com/layan2k/qr-code-component-main',
    demo: 'https://qr-code-component-main-blond.vercel.app/',
    image: 'https://firesidebackapp.s3.amazonaws.com/mypics/mobile+(9).png'
  },
  {
    id: 9,
    title: 'Node Blog ',
    about: 'Serverside rendered simple blog developed using ExpressJS',
    tags: ['Node', 'Express', 'MongoDB', 'EJS'],
    github: 'https://github.com/layan2k/nodeblog',
    demo: 'https://nodeblog-z0dz.onrender.com/',
    image: 'https://firesidebackapp.s3.amazonaws.com/mypics/mobile+(5).png'
  },
  {
    id: 10,
    title: 'MotivCenter ',
    about: '',
    tags: ['React', 'Framer-motion', 'Styled-Components', 'Vite'],
    github: 'https://github.com/layan2k/nodeblog',
    demo: 'https://motivcenter.lesliethedev.me/',
    image: 'https://firesidebackapp.s3.amazonaws.com/mypics/mobile+(7).png'
  },
]
