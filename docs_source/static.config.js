import axios from 'axios'

export default {
  basePath: 'wizardo',
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
        path: '/contribute',
        component: 'src/containers/Contribute',
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
