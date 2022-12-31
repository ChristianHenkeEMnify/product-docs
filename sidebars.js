/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
  */
  ourSidebar: [
    'cellular-iot',
    'quickstart',
    'service-stack-overview',
    'services',
    'rest-api',
    {
      type: 'category',
      label: 'Data Streamer',
      link: { 
        type: 'generated-index', 
        title: 'emnify multicloud Data Streamer',
        slug: 'data-streamer'
      },
      items: [
        'data-streamer/getting-started',
        'data-streamer/connection-types',
        'data-streamer/stream-types',
        'data-streamer/managing-data-streams',
        'data-streamer/usage',
        'data-streamer/available-integrations'
      ],
    },
    {
      type: 'category',
      label: 'Events',
      link: {
        type: 'generated-index', 
        title: 'emnify system events',
        slug: '/events'
      },
      items: [
        'events/getting-started',
        'events/event-types',
        'events/mno-events',
        'events/usage'
      ]
    },
    {
      type: 'category',
      label: 'Software Development Kits',
      link: { 
        type: 'generated-index', 
        title: 'emnify SDKs',
        description: 'The emnify software development kits (SDKs) allow developers to manage their IoT devices using an intuitive set of APIs, including SIM state management and device connectivity operations.',
        slug: '/sdks'
      },
      items: [
        {
          type: 'category',
          label: 'Python',
          link: { 
            type: 'generated-index', 
            title: 'emnify Python SDK',
            description: 'The alpha release of the new emnify Python software development kit (SDK) for SIM state management and device connectivity operations.',
            slug: '/sdks/python'
          },
          items: [
            {
              type: 'doc',
              label: 'Getting Started',
              id: 'sdk/python/getting-started'
            },
            {
              type: 'doc',
              label: 'Concepts',
              id: 'sdk/python/concepts'
            },
            {
              type: 'doc',
              label: 'Examples',
              id: 'sdk/python/examples'
            },
            {
              type: 'doc',
              label: 'Getting Help and Contributing',
              id: 'sdk/python/help'
            },
            {
              type: 'link',
              label: 'API Reference',
              href: 'https://emnify.github.io/emnify-sdk-python/autoapi/index.html'
            }
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Single Sign-On',
      link: { type: 'doc', id: 'sso/overview' },
      items: [
        {
          type: 'doc',
          label: 'Microsoft Active Directory',
          id: 'sso/microsoft-active-directory'
        },
        {
          type: 'doc',
          label: 'Google Cloud Platform',
          id: 'sso/google-cloud-platform'
        },
        {
          type: 'doc',
          label: 'Troubleshooting',
          id: 'sso/troubleshooting'
        }
      ],
    },
    'glossary',
  ]
};

module.exports = sidebars;
