import fs from 'fs';
import util from 'util';
import { exec as execNode } from 'child_process';

const exec = util.promisify(execNode);

export default class Commands {

  loadCommands() {
    if (!this.data) {
      const data = fs.readFileSync(`${process.cwd()}/s-commander-data.json`);
      this.data = JSON.parse(data);
    }
  }
  async getCommands() {
    this.loadCommands();
    return { response: this.data.commands };
  }
  async getCommand({ data }) {
    this.loadCommands();
    return { response: this.data.commands[data] };
  }
  async execCommand({ data }) {
    this.loadCommands();
    console.log('exec', this.data.commands[data]);
    const { stdout, stderr } = await exec(this.data.commands[data].command);
    return { response: stdout, error: stderr };
  }
}
