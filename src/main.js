const glob = require('@actions/glob');
const exec = require('@actions/exec');
const core = require('@actions/core');

const patterns = ['**/textures/**/*.png', '**/textures/**/*.tga', '**.json', '**/texts/*.lang', 'BP/**']
const globber = await glob.create(patterns.join('\n'))
const files = await globber.glob()

console.log(files)

/// Copy files to staging area...
///...
//await exec.exec('tar', ['-a','-c', '-f', `${core.getInput('RP_NAME')}.mcpack`, core.getInput('RP_DIR')]);