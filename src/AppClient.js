import { use } from 'katejs/lib/client';
import { AppUser } from 'katejs-modules/lib/client';

import CommandsList from './forms/CommandList';
import CommandsItem from './forms/CommandItem';

import { structures, title, packageName } from './structure';
import env from './front.env.json';

const AppClient = parent => class Client extends use(parent, AppUser) {
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
    this.menu.unshift({
      title: 'Commands',
      form: 'CommandsList',
    });
    this.makeApiLinks({ entities: ['Commands'] });
    this.menu.find(item => item.form === 'UserList').rule = {
      entity: 'User',
      method: 'put',
    };
    this.menu.find(item => item.form === 'RoleList').rule = {
      entity: 'Role',
      method: 'put',
    };

    this.saveAuth = true;
  }
};
AppClient.package = packageName;
export default AppClient;
