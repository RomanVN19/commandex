import { use } from 'katejs';
import { AppUser } from 'katejs-modules';
import Commands from 'entities/Commands';

import { title, packageName } from './structure';

const AppServer = parent => class Server extends use(parent, AppUser) {
  constructor(params) {
    super(params);
    this.title = title; // название приложения

    this.setAuthParams({ jwtSecret: this.env.jwtSecret || 'default' });

    this.entities.Commands = Commands;
  }
};
AppServer.package = packageName;
export default AppServer;
