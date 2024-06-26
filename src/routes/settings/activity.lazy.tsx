import { createLazyFileRoute } from '@tanstack/react-router'
import { ActivityContent } from '../../views/activity/ActivityContent'

export const Route = createLazyFileRoute('/settings/activity')({
  component: ActivityContent
})