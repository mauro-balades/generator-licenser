var Generator = require('yeoman-generator');
var clearTerminal = require("clear-terminal")
const { form } = require('./form');

module.exports = class extends Generator {

  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);

    this.option('name', {
      type: String,
      desc: 'Name of the license owner',
      required: false
    });

    this.option('email', {
      type: String,
      desc: 'Email of the license owner',
      required: false
    });

    this.option('website', {
      type: String,
      desc: 'Website of the license owner',
      required: false
    });

    this.option('year', {
      type: String,
      desc: 'Year(s) to include on the license',
      required: false,
      defaults: new Date().getFullYear()
    });

    this.option('license', {
      type: String,
      desc: 'Select a license, so no license prompt will happen, in case you want to handle it outside of this generator',
      required: false
    });

    this.option('output', {
      type: String,
      desc: 'Set the output file for the generated license',
      required: false,
      defaults: 'LICENSE'
    });
  }

  initializing() {
    clearTerminal();
    this.gitc = {
      user: {
        name: this.options.name || this.user.git.name(),
        email: this.options.email || this.user.git.email()
      }
    };
  }

  async prompt() {
    this.data = await form(this.gitc, this.options);
    clearTerminal();
  }

  writeTemplate() {
    const filename = this.data.license + '.txt';

    let author = this.data.name.trim();
    if (this.data.email)
      author += ' <' + this.data.email.trim() + '>';

    if (this.data.website)
      author += ' (' + this.data.website.trim() + ')';

    this.fs.copyTpl(
      this.templatePath(filename),
      this.destinationPath(`${this.data.output || this.options.output}${this.data.markdown ? '.md' : ''}`),
      {
        year: this.data.year,
        author: author
      }
    );
  }

};