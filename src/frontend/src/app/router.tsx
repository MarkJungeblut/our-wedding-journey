import { createBrowserRouter } from 'react-router-dom'
import { HomePage } from '@/features/home/HomePage'
import { DetailsPage } from '@/features/details/DetailsPage'
import { TimelinePage } from '@/features/timeline/TimelinePage'
import { PeoplePage } from '@/features/people/PeoplePage'
import { FunPage } from '@/features/fun/FunPage'

export const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/details', element: <DetailsPage /> },
  { path: '/timeline', element: <TimelinePage /> },
  { path: '/people', element: <PeoplePage /> },
  { path: '/fun', element: <FunPage /> },
])
