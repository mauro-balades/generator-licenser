var Generator = require('yeoman-generator');
var clearTerminal = require("clear-terminal")
const { form } = require('./form');

module.exports = class extends Generator {

  static data = null;

  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);

    this.option('overwrite'); // This method adds support for a `--overwrite` flag
  }

  async init() {
    clearTerminal()
    this.data = await form()
    clearTerminal()
    console.log(this.data)
  }
};