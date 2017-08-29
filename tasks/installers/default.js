const gulp = require('gulp')
const runSequence = require('run-sequence')

/**
 * # Slush Task Default
 *
 * Default. Runs create-app, create-dev-config, create-babelrc, create-database-rules-json, create-firebase-json,
 * create-firebaserc, create-gitignore, create-polypackrc, and update
 *
 * This is useful for creating the first structure of your project. Be careful when using it on an existing project.
 *
 * ## Usage
 *
 * ```bash
 * $ npm slush polyapp
 * ```
 */
gulp.task('default', (done) => {
  return runSequence(
    'create-app',
    'create-dev-config',
    'create-babelrc',
    'create-database-rules-json',
    'create-firebase-json',
    'create-firebaserc',
    'create-gitignore',
    'create-polypackrc',
    'update',
    done
  )
})