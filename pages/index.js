import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";

import Image from "next/image";
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import cta from "../public/cta.png";
import spotify from "../public/spotify.jpg";
import slack from "../public/slack.jpg";
import weather from "../public/weather.jpg";
import kanban from "../public/kanban.jpg";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Erik Persson Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">DeployedbyErik</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-ponter text-2xl" />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="https://www.linkedin.com/in/erik-persson-081128222/"
                >
                  Linkedin
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 ">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Erik Persson
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">Developer</h3>

            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto">
              Hello👋🏽 Im Erik Persson and im a developer. Join me down below and
              let´s get cracking!
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillGithub />
            <AiFillLinkedin />
            <AiFillTwitterCircle />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96 ">
            <Image src={deved} alt="avatar" layout="fill" objectFit="cover" />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1">My Journey</h3>
            <p className="text-md py-5 leading-8 text-gray-800">
              The last year i’ve been developing skills in the MERN stack where
              i started from the simple and later been digging deeper in the
              djungle of javascript with frameworks like React for example. I’ve
              been learning these skills in a coding bootcamp based in Stockholm
              sweden but i live in Malmö close to Copenhagen. The projects that
              i’m most proud of is my{" "}
              <span className="text-teal-500">klarna-checkout</span> where i
              integrated klarnas api with my simple webshop. I’ve also built a
              kanban Board and a{" "}
              <span className="text-teal-500">slack-clone</span> and a clone of{" "}
              <span className="text-teal-500">spotify</span>. Since i grew up
              learning and being curios has been a big part of my life and a
              also like to work with people in a team to reach the same goal.
              The idea of simplify the future with software and always evolving
              in the role as a software developer is what drives me forward.
            </p>
            <p className="text-lg py-5 leading-8 text-gray-800">
              i´m looking for junior developer job to keep evolving and grow my
              skills and at the same time bring value!
            </p>
          </div>
          <div className="lg:flex gap-10 justify-center">
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image
                src={design}
                width={150}
                height={150}
                alt="design picture"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Styling
              </h3>
              <p className="py-2">
                Creating elegant stylings with different type of css
              </p>
              <h4 className="py-4 text-teal-600">Styling tools i use</h4>
              <p className="text-gray-800 py-1">Css</p>
              <p className="text-gray-800 py-1">Scss/sass</p>
              <p className="text-gray-800 py-1">Tailwindcss</p>
              <p className="text-gray-800 py-1">Material UI</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={code} width={150} height={150} alt="design picture" />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Languages and frameworks
              </h3>
              <p className="py-2">building scalable projects with clean code</p>
              <h4 className="py-4 text-teal-600">
                coding languages and frameworks i use
              </h4>
              <p className="text-gray-800 py-1">Javascript</p>
              <p className="text-gray-800 py-1">React with Redux</p>
              <h4 className="py-4 text-teal-600">currently learning</h4>
              <p className="text-gray-800 py-1">Next</p>
              <p className="text-gray-800 py-1">Typescript</p>
            </div>
          </div>
        </section>
        <section>
          <h3 className="text-3xl py-1">Projects</h3>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image
                src={spotify}
                width={150}
                height={150}
                alt="spotify-logo"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">Spotify-clone</h3>
              <p className="py-2">
                created a clone of spotify using Spotifys API. sign in to
                spotify, play your personal playlist with pause and skip
                function.
              </p>
              <h4 className="py-4 text-teal-600">tools involved</h4>
              <p className="text-gray-800 py-1">Javascript</p>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">Redux</p>
              <p className="text-gray-800 py-1">material UI</p>
              <p className="text-gray-800 py-1">Git</p>
              <div className="">
                <a
                  className="text-gray-800 py-1 text-5xl"
                  href="https://github.com/senderman72/spotify-clone"
                >
                  <AiFillGithub />
                </a>
              </div>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={slack} width={150} height={150} alt="slack-logo" />
              <h3 className="text-lg font-medium pt-8 pb-2">Slack-clone</h3>
              <p className="py-2">
                created a clone of slack using Firebase for live chatting. sign
                in to google account, chat in two groupchats live.
              </p>
              <h4 className="py-4 text-teal-600">tools involved</h4>
              <p className="text-gray-800 py-1">Javascript</p>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">Firebase</p>
              <p className="text-gray-800 py-1">Css</p>
              <p className="text-gray-800 py-1">Git</p>
              <div className="">
                <a
                  className="text-gray-800 py-1 text-5xl"
                  href="https://github.com/senderman72/slack-clone"
                >
                  <AiFillGithub />
                </a>
              </div>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image
                src={weather}
                width={170}
                height={170}
                alt="weather picture"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">Weather app</h3>
              <p className="py-2">
                created a weather forecast connected to live-weather API. Search
                for any city in the world to see what the weather looks like.
              </p>
              <h4 className="py-4 text-teal-600">tools involved</h4>
              <p className="text-gray-800 py-1">Javascript</p>
              <p className="text-gray-800 py-1">Html5</p>
              <p className="text-gray-800 py-1">Fetch</p>
              <p className="text-gray-800 py-1">Css</p>
              <p className="text-gray-800 py-1">Git</p>
              <div className="">
                <a
                  className="text-gray-800 py-1 text-5xl"
                  href="https://github.com/senderman72/weather-app"
                >
                  <AiFillGithub />
                </a>
              </div>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={kanban} width={150} height={150} alt="kanban" />
              <h3 className="text-lg font-medium pt-8 pb-2">Kanban</h3>
              <p className="py-2">
                created a responsive drag and drog Kanban-board with. The idea
                is that you can work in an agile scrum team with help from the
                board.
              </p>
              <h4 className="py-4 text-teal-600">tools involved</h4>
              <p className="text-gray-800 py-1">Javascript</p>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">Redux</p>
              <p className="text-gray-800 py-1">Scss</p>
              <p className="text-gray-800 py-1">Git</p>
              <div className="">
                <a
                  className="text-gray-800 py-1 text-5xl"
                  href="https://github.com/senderman72/kanban-board"
                >
                  <AiFillGithub />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="lg:flex gap-10 justify-center bg-gray-200 rounded-xl">
            <div>
              <h3 className="text-3xl py-5 md:flex">Get in touch</h3>
              <Image src={cta} alt="contact details" className="rounded-xl" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
