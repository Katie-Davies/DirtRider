import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Auth0Provider } from '@auth0/auth0-react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import routes from './routes.tsx'

const router = createBrowserRouter(routes)
const queryClient = new QueryClient()

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <Auth0Provider
      domain="katie-d-projects.au.auth0.com"
      clientId="ThtsgHu30LnLYOTlixottB2wOArwN19T"
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: 'https://dirtrider/api',
      }}
      useRefreshTokens
      cacheLocation="localstorage"
    >
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        {/* <ReactQueryDevtools /> */}
      </QueryClientProvider>
    </Auth0Provider>,
  )
})
