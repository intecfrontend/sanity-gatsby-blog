export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ff1f3c15559de917b1f5b45',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-2mhi3wcq',
                  apiId: '85248e78-a407-42c5-8c14-309c75b56156'
                },
                {
                  buildHookId: '5ff1f3c152def443126e4cdc',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-7ro6ej7x',
                  apiId: 'fe177f61-fd70-451f-b180-75057a3dfd05'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/intecfrontend/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-7ro6ej7x.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
