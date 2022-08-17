import { ArrowSquareOut, GithubLogo, Users } from 'phosphor-react'
import { Link } from 'react-router-dom'
import useSWR from 'swr'
import { api } from '../../../../lib/axios'
import { Container } from './styles'

interface User {
  login: string
  name: string
  avatar_url: string
  followers: number
  following: number
  html_url: string
  bio: string
}
async function fetchUser(): Promise<User> {
  const { data } = await api.get<User>('/users/luccasecco')

  return {
    login: data.login,
    name: data.name,
    avatar_url: data.avatar_url,
    followers: data.followers,
    following: data.following,
    html_url: data.html_url,
    bio: data.bio,
  }
}

export function PrincipalCard() {
  const { data: user } = useSWR('user', fetchUser)

  return (
    <Container>
      <img src={user?.avatar_url} alt="" />
      <div className="wrapper">
        <header>
          <h1>{user?.name}</h1>

          <div className="navigation">
            <Link to={user?.html_url || '#'}>GITHUB </Link>
            <ArrowSquareOut size={18} />
          </div>
        </header>
        <p>{user?.bio}</p>
        <div className="icons-wrapper">
          <GithubLogo /> {user?.login}
          <Users /> {user?.following} seguindo
          <Users /> {user?.followers} seguidores
        </div>
      </div>
    </Container>
  )
}
