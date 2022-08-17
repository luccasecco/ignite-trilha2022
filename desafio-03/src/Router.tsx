import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { Posts } from './pages/Posts'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/post/:number" element={<Posts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}