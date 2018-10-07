import { makeEntitiesFromStructures, use } from 'katejs';
import { structures, title, packageName } from './structure';

import Commands from './entities/Commands';

const AppServer = parent => class Server extends use(parent) {
  constructor(params) {
    super(params);
    this.title = title; // название приложения
    this.entities.Commands = Commands;
  }
};
AppServer.package = packageName;
export default AppServer;
