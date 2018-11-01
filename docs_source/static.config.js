import axios from 'axios'

export default {
  getSiteData: () => ({
    title: 'Wizardo',
  }),
  getRoutes: async () => {
    const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return [
      {
        path: '/',
        component: 'src/containers/Home',
      },
      {
        path: '/guides',
        component: 'src/containers/Guides',
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
}
