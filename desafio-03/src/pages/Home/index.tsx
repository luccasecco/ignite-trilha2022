import { useState } from 'react'
import useSWR from 'swr'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Loading } from '../../components/Loader'
import { useQuery } from '../../hooks/useQuery'
import { api } from '../../lib/axios'
import { formatCreatedAt } from '../../utils/formatCreatedAt'
import { PostCard } from './components/PostCard'
import { PrincipalCard } from './components/PrincipalCard'
import { Container, Content, Posts, SearchContainer } from './styles'

export interface Post {
  number: number
  title: string
  body: string
  created_at: string
}

async function fetchPosts(key: string) {
  const query = key.replace(/^posts\//, '')

  const { data } = await api.get<{ items: Post[] }>(
    `/search/issues?q=${query}%20repo:luccasecco/github-blog`,
  )

  return data.items.map((post): Post => {
    let body = post.body.replace(/\s/g, ' ').replace(/\s$/, '')

    const maxLength = 200

    if (body.length > maxLength) {
      body = body.substring(0, maxLength) + '...'
    }

    return {
      number: post.number,
      title: post.title,
      body,
      created_at: formatCreatedAt(post.created_at),
    }
  })
}

export function Home() {
  const [query, setQuery] = useState('')
  const queryValue = useQuery(query)
  const { data: posts } = useSWR(`posts/${queryValue}`, fetchPosts)

  return (
    <Container>
      <Header />

      <Content>
        <PrincipalCard />
        <SearchContainer>
          <header>
            <h2>Publicações</h2>
            {posts?.length === 1 ? (
              <span>{posts?.length} publicação</span>
            ) : (
              <span>{posts?.length} publicações</span>
            )}
          </header>

          <input
            type="text"
            placeholder="Buscar conteúdo"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </SearchContainer>

        {posts?.length ? (
          <Posts>
            {posts?.map((post) => (
              <PostCard key={post.number} post={post} />
            ))}
          </Posts>
        ) : (
          <Loading />
        )}
      </Content>
      <Footer />
    </Container>
  )
}
