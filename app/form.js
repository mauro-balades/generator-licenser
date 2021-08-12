var {openForm} = require('ink-form');

exports.form = async () => {
  const licenses = [
    { name: 'Apache 2.0', value: 'Apache-2.0' },
    { name: 'MIT', value: 'MIT' },
    { name: 'Mozilla Public License 2.0', value: 'MPL-2.0' },
    { name: 'BSD 2-Clause (FreeBSD) License', value: 'BSD-2-Clause-FreeBSD' },
    { name: 'BSD 3-Clause (NewBSD) License', value: 'BSD-3-Clause' },
    { name: 'Internet Systems Consortium (ISC) License', value: 'ISC' },
    { name: 'GNU AGPL 3.0', value: 'AGPL-3.0' },
    { name: 'GNU GPL 3.0', value: 'GPL-3.0' },
    { name: 'GNU LGPL 3.0', value: 'LGPL-3.0' },
    { name: 'Unlicense', value: 'unlicense' },
    { name: 'No License (Copyrighted)', value: 'UNLICENSED' }
  ];

  const mardown = [
    {name: 'yes', value: true},
    {name: 'no', value: false}
  ]
  
  const form = {
    form: {
      title: 'Form title',
      sections: [
        {
          title: 'basic info',
          fields: [
            { type: 'string', name: 'name', label: 'What\'s your name?', required: true },
            { type: 'string', name: 'email', label: 'Your email (optional)', initalValue: 'null' },
            { type: 'string', name: 'website', label: 'Your website (optional)', initalValue: 'null' },
            { type: 'select', name: 'license', label: 'Select license', options: licenses, required: true },
          ],
        },
        {
          title: 'Extra information',
          fields: [
            { type: 'boolean', name: 'markdown', label: 'Markdown?' },
          ],
        },
      ],
    },
  };

  const result = await openForm(form);
  return result
}