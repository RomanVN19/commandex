// import { use } from 'katejs/lib/client';
import { use } from 'katejs/client'; // local

import { structures, title, packageName } from './structure';

import CommandsList from './forms/CommandList';
import CommandsItem from './forms/CommandItem';

const AppClient = parent => class Client extends use(parent) {
  static title = title;
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
