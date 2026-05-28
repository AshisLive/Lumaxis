import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api/appsheet': {
          target: 'https://api.appsheet.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/appsheet/, '/api/v2'),
          secure: true,
          configure: (proxy) => {
            proxy.on('proxyReq', (proxyReq) => {
              proxyReq.setHeader('ApplicationAccessKey', env.VITE_APPSHEET_ACCESS_KEY || '')
            })
          },
        },
      },
    },
  }
})

