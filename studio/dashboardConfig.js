export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '61a0ba9ffa54404066a2cc40',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-zm2it32x',
                  apiId: '8e452605-4a0e-4f0c-9609-fe4072378efe'
                },
                {
                  buildHookId: '61a0baa0b6b63131c7b60cd0',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-5fp82r8k',
                  apiId: '5205e74b-c395-476e-937f-622da96b80ed'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Amaka202/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-5fp82r8k.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
