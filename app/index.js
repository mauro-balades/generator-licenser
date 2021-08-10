var Generator = require('yeoman-generator');

module.exports = class extends Generator {

    /**
     * 
     * @param {*} args
     * @param {*} opts
     */
    constructor(args, opts) {
        // Calling the super constructor is important so our generator is correctly set up
        super(args, opts);

        this.option('overwrite'); // This method adds support for a `--overwrite` flag
      }
};