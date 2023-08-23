#!/usr/bin/env node
import { Command } from 'commander';
import { initProject, updateProject } from './project';

const program = new Command();

program.command('init').description('Initialize a new project').action(initProject);

program.command('update').description('Update the project').action(updateProject);

program.parse(process.argv);
