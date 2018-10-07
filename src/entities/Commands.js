import fs from 'fs';
import util from 'util';
import { exec as execNode } from 'child_process';

const exec = util.promisify(execNode);

export default class Commands {
  constructor() {
    this.loadCommands();
  }
  loadCommands(params) {
    const force = params && params.data.force;
    if (!this.data || force) {
      const data = fs.readFileSync(`${process.cwd()}/s-commander-data.json`);
      this.data = JSON.parse(data);
    }
    return { response: this.data.commands };
  }
  getCommands() {
    return { response: this.data.commands };
  }
  getCommand({ data }) {
    return { response: this.data.commands[data] };
  }
  async execCommand({ data }) {
    let commands = this.data.commands[data].command;
    if (typeof commands === 'string') commands = [commands];
    let response = '';
    let error = '';
    for (let i = 0; i < commands.length; i++) {
      // eslint-disable-next-line no-await-in-loop
      const { stdout, stderr } = await exec(commands[i]);
      response += `${stdout}\n`;
      error += stderr ? `${stderr}\n` : '';
    }
    return { response, error };
  }
}
