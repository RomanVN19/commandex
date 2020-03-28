import { use } from 'katejs/lib/client';
// import { use } from 'katejs/client'; // local


import CommandsList from './forms/CommandList';
import CommandsItem from './forms/CommandItem';

import { structures, title, packageName } from './structure';
import env from './front.env.json';

const AppClient = parent => class Client extends use(parent) {
  static title = title;

  constructor(params) {
    super(params);
    this.baseUrl = env.apiUrl || '/api';

    this.init({ structures });
    this.forms = {
      ...this.forms,
      CommandsList,
      CommandsItem,
    };
    this.menu.push({
      title: 'Commands',
      form: 'CommandsList',
    });
    this.makeApiLinks({ entities: ['Commands'] });
  }
};
AppClient.package = packageName;
export default AppClient;
