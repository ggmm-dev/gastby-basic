export default [
  {
    id: 1,
    icon: '<i className="fas fa-server" />',
    category: 'DNS',
    content: [
      {
        id: 1.1,
        label: 'A records have www and @ values',
        checked: false,
      },
      {
        id: 1.2,
        label: 'MX Records are copied from existing DNS (if applicable)',
        checked: false,
      },
      {
        id: 1.3,
        label: 'Sendgrid setup for SMTP',
        checked: false,
      },
      {
        id: 1.4,
        label: 'Verify A record via https://dnschecker.org/',
        checked: false,
      },
    ],
  },
  {
    id: 2,
    icon: '<i className="fas fa-lock-alt" />',
    category: 'SSL',
    content: [
      {
        id: 2.1,
        label: 'SSL is setup via LetsEncrypt on both https:// and https://www',
        checked: false,
      },
    ],
  },
  {
    id: 3,
    icon: '<i className="fas fa-tv" />',
    category: 'Desktop Browsers',
    content: [
      {
        id: 3.1,
        label: 'IE11',
        checked: false,
      },
      {
        id: 3.2,
        label: 'Edge',
        checked: false,
      },
      {
        id: 3.3,
        label: 'Chrome',
        checked: false,
      },
      {
        id: 3.4,
        label: 'Safari',
        checked: false,
      },
    ],
  },
  {
    id: 4,
    icon: '<i className="far fa-mobile-android-alt" />',
    category: 'Mobile Browsers',
    content: [
      {
        id: 4.1,
        label: 'iOS Safari',
        checked: false,
      },
      {
        id: 4.2,
        label: 'Chrome',
        checked: false,
      },
    ],
  },
  {
    id: 5,
    icon: '<i className="fas fa-pencil-alt" />',
    category: 'Content',
    content: [
      {
        id: 5.1,
        label: 'Spelling, grammar and formatting is correct',
        checked: false,
      },
      {
        id: 5.2,
        label: 'Page titles and meta data present',
        checked: false,
      },
      {
        id: 5.3,
        label: 'Alt Tags',
        checked: false,
      },
      {
        id: 5.4,
        label: 'Link check',
        checked: false,
      },
      {
        id: 5.5,
        label: '404 page',
        checked: false,
      },
      {
        id: 5.6,
        label: 'Terms & Condition / Privacy pages',
        checked: false,
      },
      {
        id: 5.7,
        label: 'Footer copyright notice with dynamic year',
        checked: false,
      },
    ],
  },
  {
    id: 6,
    icon: '<i className="fal fa-file-invoice" />',
    category: 'Forms',
    content: [
      {
        id: 6.1,
        label: 'Forms tested and sent to the right email(s)',
        checked: false,
      },
      {
        id: 6.2,
        label: 'Contact info is correct',
        checked: false,
      },
      {
        id: 6.3,
        label: 'Social media links are correct',
        checked: false,
      },
    ],
  },
  {
    id: 7,
    icon: '<i className="fas fa-tachometer" />',
    category: 'Performance',
    content: [
      {
        id: 7.1,
        label: 'Pagespeed results adequate1',
        checked: false,
      },
      {
        id: 7.2,
        label:
          'No Javascript errors (use Incognito to prevent extension warnings)',
        checked: false,
      },
      {
        id: 7.3,
        label: 'Mobile Friendly Test results adequate',
        checked: false,
      },
      {
        id: 7.4,
        label: 'Images and videos compressed as small as possible',
        checked: false,
      },
    ],
  },
  {
    id: 8,
    icon: '<i className="fas fa-database" />',
    category: 'Infastructure',
    content: [
      {
        id: 8.1,
        label: 'Repo setup and up-to-date',
        checked: false,
      },
      {
        id: 8.2,
        label: 'Firewall setup',
        checked: false,
      },
      {
        id: 8.3,
        label: 'CDN domains are whitelisted for live url',
        checked: false,
      },
      {
        id: 8.4,
        label: 'All live content is referring to the live url',
        checked: false,
      },
      {
        id: 8.5,
        label: 'Automatic backups on hosting or CMS',
        checked: false,
      },
      {
        id: 8.6,
        label: 'Google Analytics installed and working',
        checked: false,
      },
      {
        id: 8.7,
        label: 'Event tracking for Pixel',
        checked: false,
      },
      {
        id: 8.8,
        label: 'Search Console setup',
        checked: false,
      },
    ],
  },
  {
    id: 9,
    icon: '<i className="fab fa-accessible-icon" />',
    category: 'Accessibility',
    content: [
      {
        id: 9.1,
        label: 'All forms fields have labels (not just placeholders)',
        checked: false,
      },
      {
        id: 9.2,
        label: 'Favicons and touch icons on mobile are present',
        checked: false,
      },
      {
        id: 9.3,
        label: 'ARIA roles where appropriate',
        checked: false,
      },
    ],
  },
]
