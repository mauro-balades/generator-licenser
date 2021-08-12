var Generator = require('yeoman-generator');
var clearTerminal = require("clear-terminal")
const { form } = require('./form');

module.exports = class extends Generator {

  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);

    this.option('overwrite'); // This method adds support for a `--overwrite` flag
  }

  initializing() {
    this.gitc = {
      user: {
        name: this.user.git.name(),
        email: this.user.git.email()
      }
    };
  }

  async prompt() {
    this.data = form(this.gitc)
  }

  
};