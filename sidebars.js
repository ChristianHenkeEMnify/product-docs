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
    {
      type: 'category',
      label: 'Quickstart',
      link: {
        type: 'generated-index',
        title: 'Quickstart guide',
        slug: 'quickstart'
      },
      items: [
        'quickstart/order-a-sim-package',
        'quickstart/registering-sims',
        {
          type: 'category',
          label: 'Devices',
          link: {
            type: 'generated-index',
            title: 'Devices',
            slug: 'devices',
          },
          items: [
            'quickstart/devices/creating-a-device',
            'quickstart/devices/getting-the-first-device-online',
            'quickstart/devices/android',
            'quickstart/devices/ios-devices',
            'quickstart/devices/cellular-modules',
            'quickstart/devices/gps-trackers',
            'quickstart/devices/industrial-routers',
          ],
        },
        'quickstart/troubleshooting',
      ],
    },
    'service-stack-overview',
    {
      type: 'category',
      label: 'Services',
      // link: {type: 'doc', id: 'integration/'},
      items: [
        'services/global-iot-sim',
        'services/global-iot-network',
        'services/iot-cloud-communication-platform',
        'services/data-streamer',
        'services/security',
        'services/cloud-connect',
        'services/openvpn',
        'services/sms',
        'services/user-management',
        'services/business-intelligence-and-analytics-reports',
        'services/no-code-workflow-automation',
        'services/sim-life-cycle-management',
        'services/endpoint-management-and-group-policies',
      ],
    },
    {
      type: 'category',
      label: 'REST API',
      link: {type: 'doc', id: 'rest-api/index'},
      items: [
        'rest-api/api-authentication',
        'rest-api/sending-and-receiving-sms',
        'rest-api/code-samples',
      ],
    },
    {
      type: 'category',
      label: 'Data Streamer',
      link: { 
        type: 'generated-index', 
        title: 'emnify multicloud Data Streamer',
        slug: 'data-streamer'
      },
      items: [
        {
          type: 'doc',
          label: 'Getting Started',
          id: 'data-streamer/getting-started'
        },
        {
          type: 'doc',
          label: 'Connection Types',
          id: 'data-streamer/connection-types'
        },
        {
          type: 'doc',
          label: 'Stream Types',
          id: 'data-streamer/stream-types'
        },
        {
          type: 'doc',
          label: 'Managing Data Streams',
          id: 'data-streamer/managing-data-streams'
        },
        {
          type: 'doc',
          label: 'Using the Data Streamer',
          id: 'data-streamer/usage'
        },
        {
          type: 'doc',
          label: 'Available Integrations',
          id: 'data-streamer/available-integrations'
        }
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
