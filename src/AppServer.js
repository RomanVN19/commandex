import { use } from 'katejs';
import Commands from 'entities/Commands';

import { title, packageName } from './structure';

const AppServer = parent => class Server extends use(parent) {
  constructor(params) {
    super(params);
    this.title = title; // название приложения

    this.entities.Commands = Commands;
  }
};
AppServer.package = packageName;
export default AppServer;
