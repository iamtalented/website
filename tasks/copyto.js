'use strict';


module.exports = function copyto(grunt) {
	// Load task
	grunt.loadNpmTasks('grunt-copy-to');

	// Options
	return {
		build: {
			files: [{expand: true, src: ['public/**'], dest: '.build/'}],
			options: {
				ignore: [
					'public/templates/**/*'
				]
			}
		}
	};
};
