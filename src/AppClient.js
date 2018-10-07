// import { use } from 'katejs/lib/client';
import { use } from 'katejs/client'; // local

import { structures, title, packageName } from './structure';

import CommandsList from './forms/CommandList';
import CommandsItem from './forms/CommandItem';

import cfg from '../s-commander-data.json';

const AppClient = parent => class Client extends use(parent) {
  static title = title;
  static path = cfg.path;
  constructor(params) {
    super(params);
    this.init({ structures });
    this.addForms({ CommandsList, CommandsItem });
    this.menu.push({
      title: 'Commands',
      form: CommandsList,
    });
    this.makeApiLinks({ entities: ['Commands'] });
  }
};
AppClient.package = packageName;
export default AppClient;
