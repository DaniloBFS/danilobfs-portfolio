"use client";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import myself from "../public/perfil-animated.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import appsico from "../public/appsico.png";
import roni from "../public/roni.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    
    <main className={darkMode ? "dark" : ""}>
    <div className='bg-white px-10 md:px-20 lg:px40 dark:bg-gray-900'>
      <section className='min-h-screen'>
        <nav className='font-mono py-10 mb-12 flex justify-between'>
          <h1 className='text-xl dark:text-white'>Danilo Borim</h1>
          <ul className='flex items-center'>
            <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl dark:text-white'/></li>
            <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 rounded-md ml-8' href="" target="blank">Currículo</a></li>
          </ul>
        </nav>
        <div className='text-center p-10'>
          <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Danilo Borim</h2>
          <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Desenvolvedor Front-End</h3>
          <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white'>Sou um programador aberto a freelances e novas oportunidades. <br />Me contate e vamos nessa!</p>
        </div>
        <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <a href="https://www.linkedin.com/in/dbfs/" target="blank"><AiFillLinkedin className="dark:text-white" /></a>
            <a href="https://github.com/DaniloBFS" target="blank"><FaGithub className="dark:text-white" /></a>
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
            <Image src={myself} layout="fill" objectFit="cover" />
          </div>
      </section>
      
      <section>
        <div>
          <h3 className="text-3xl py-1 dark:text-white">Sobre mim</h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">Sou Desenvolvedor Web Full Stack e já trabalhei em projetos acadêmicos e profissionais onde pude desenvolver conceitos de design, organização, habilidades técnicas e soft skills. Sou extremamente curioso e determinado a resolver o problema.</p>
        </div>
        <div>
          <h3></h3>
        </div>
        <div className="lg:flex gap-10 justify-center">
          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
            <Image src={design} width={100} height={100} className="mx-auto" />
            <h3 className="text-lg font-medium pt-8 pb-2">Front-End</h3>
            <h4 className="py-4 text-teal-600">Técnologias que conheço no Front-End</h4>
            <p className="text-gray-800 py-1">ReactJS</p>
            <p className="text-gray-800 py-1">TailWindCSS</p>
            <p className="text-gray-800 py-1">Bootstrap</p>
            <p className="text-gray-800 py-1">JavaScript Vanilla</p>
            <p className="text-gray-800 py-1">Figma</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
            <Image src={code} width={100} height={100} className="mx-auto" />
            <h3 className="text-lg font-medium pt-8 pb-2">Back-End</h3>
            <h4 className="py-4 text-teal-600">Técnologias que conheço no Back-End</h4>
            <p className="text-gray-800 py-1">NodeJS</p>
            <p className="text-gray-800 py-1">MongoDB</p>
            <p className="text-gray-800 py-1">Firebase</p>
            <p className="text-gray-800 py-1">MySQL</p>
            <p className="text-gray-800 py-1">PHP</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
            <Image src={consulting} width={100} height={100} className="mx-auto" />
            <h3 className="text-lg font-medium pt-8 pb-2">SoftSkills e outras Habilidades</h3>
            <h4 className="py-4 text-teal-600">Possuo também</h4>
            <p className="text-gray-800 py-1">Git e Github</p>
            <p className="text-gray-800 py-1">Bitbucket</p>
            <p className="text-gray-800 py-1">Docker</p>
            <p className="text-gray-800 py-1">ViteJS</p>
            <p className="text-gray-800 py-1">Wordpress</p>
            <p className="text-gray-800 py-1">Webflow</p>
            <p className="text-gray-800 py-1">Bom ouvinte</p>
            <p className="text-gray-800 py-1">Extremamente curioso</p>
            <p className="text-gray-800 py-1">Resiliente</p>
          </div>
        </div>
      </section>
      
      <section>
        
      </section>

      <section className="mb-14">
        <div>
          <h3 className="text-3xl py-1 dark:text-white">Projetos</h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">Eu venho estudando programação....</p>
        </div>
        <div className="flex flex-col gap-20 py-10 lg:flex-row lg:flex-wrap">
          <div  className="basis-1/3 flex-1">
          <a href="https://appsico.vercel.app"><Image src={appsico} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" /></a> 
          </div>
          <div  className="basis-1/3 flex-1">
            <a href="https://danilobfs.github.io/rf-portfolio/"><Image src={roni} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" /></a>
          </div>
        </div>
      </section>
      
    </div>      
    </main>
  );
}
