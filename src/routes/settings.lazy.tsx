import { createLazyFileRoute } from '@tanstack/react-router'
import Content from '../components/Content'
import Header from '../components/Header'

export const Route = createLazyFileRoute('/settings')({
  component: () => <>
    <Header />
    <Content />
  </> 

})