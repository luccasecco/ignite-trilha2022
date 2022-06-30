import { Header } from "./components/Header/Header"
import { Sidebar } from "./components/Sidebar/Sidebar"
import { Box } from "./components/Box/Box"

import './global.css'
import styles from './App.module.css'
import { Link } from "phosphor-react"

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https:github.com/luccasecco.png',
      name: 'Lucca Secco',
      role: 'Web Developer',
    },
    content:
    [
      { type: 'paragraph', content: 'Fala galeraa 👋,'},

      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},

     { type: 'link', content: '👉 jane.design/doctorcare'}
    ],
    publishedAt: new Date('2022-06-25 20:00:00'),  
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https:github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat',
    },
    content:
    [
      { type: 'paragraph', content: 'Fala galeraa 👋,'},

      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},

     { type: Link, content: '👉 <a href="">jane.design/doctorcare</a>'}
    ],
    publishedAt: new Date('2022-06-29 15:00:00'),  
  },
];

function App() {

  return (
    <>
    <Header />
    
    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        {posts.map(post => {
         return (
            <Box 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          )
        })}
      </main>
    </div>
    </>
  )
}

export default App
