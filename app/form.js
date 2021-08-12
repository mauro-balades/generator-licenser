var { openForm } = require("ink-form");

exports.form = async (default_info, options) => {
  const licenses = [
    { label: "Apache 2.0", value: "Apache-2.0" },
    { label: "MIT", value: "MIT" },
    { label: "Mozilla Public License 2.0", value: "MPL-2.0" },
    { label: "BSD 2-Clause (FreeBSD) License", value: "BSD-2-Clause-FreeBSD" },
    { label: "BSD 3-Clause (NewBSD) License", value: "BSD-3-Clause" },
    { label: "Internet Systems Consortium (ISC) License", value: "ISC" },
    { label: "GNU AGPL 3.0", value: "AGPL-3.0" },
    { label: "GNU GPL 3.0", value: "GPL-3.0" },
    { label: "GNU LGPL 3.0", value: "LGPL-3.0" },
    { label: "Unlicense", value: "unlicense" },
    { label: "No License (Copyrighted)", value: "UNLICENSED" },
  ];

  const { user } = default_info;

  const form = {
    form: {
      title: `Create ${options.output}`,
      sections: [
        {
          title: "basic info",
          description: '\nBasic information for your license. In the exetended information tab you can see more options.\n',
          fields: [
            {
              type: "string",
              name: "name",
              label: "What's your name?"
            },
            {
              type: "string",
              name: "email",
              label: "Your email (optional)",
              initialValue: user.email || "null",
            },
            {
              type: "string",
              name: "website",
              label: "Your website (optional)",
              // initialValue: "null",
            },
            {
              type: "select",
              name: "license",
              label: "Select license",
              options: licenses,
              description: 'select between one of these available licenses for your project.',
              required: true,
            },
          ],
        },
        {
          title: "Extended information",
          description: '\nThis is the section in where you can select extended options.\n',
          fields: [
            {
              type: "boolean",
              name: "markdown",
              label: "Markdown? (optional)",
              description: 'If this options is set to True, \nthe license file will be added as a markdown file.'
            },
            {
              type: "string",
              name: 'output',
              description: 'This option will add the license with the output you whant.',
              label: 'Output name for the license (optional)'
            },
            {
              type: "integer",
              name: 'year',
              label: 'License year (optional)',
              initialValue: options.year,
              max: new Date().getFullYear(),
              min: 0
            }
          ],
        },
        {
          title: 'License Section',
          description: [
            '\nWith this software, you can create a license.\n\nMade with ink-form. Ink-form is a Node library for displaying a user-friendly form in a terminal window. It can be used in two ways, either by using the React Ink component Form exported by the package, or by using the imperative API openForm(options).\n\ncheck out licenser\'s repository here: https://github.com/maubg-debug/generator-licenser.',
          ],
          fields: [],
        }
      ],
    },
  };

  if (user.name) {
    form.form.sections[0].fields[0].initialValue = user.name;
  } else form.form.sections[0].fields[0].required = true;

  if (options.license) {
    form.form.sections[0].fields[3].required = false;
    form.form.sections[0].fields[3].initialValue = options.license;
  }

  const result = await openForm(form);
  return result;
};
