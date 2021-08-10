var Generator = require('yeoman-generator');
const { form } = require('./form');

module.exports = class extends Generator {

  static data = null;

  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);

    this.option('overwrite'); // This method adds support for a `--overwrite` flag

    this.showForm()
  }

  showForm() {
    form((res) => {
      this.data = res;
    })
  }
};