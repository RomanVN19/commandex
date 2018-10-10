import { makeEntitiesFromStructures, use } from 'katejs';
import Commands from 'entities/Commands';

import { title, packageName } from './structure';

import cfg from '../s-commander-data.json';

const AppServer = parent => class Server extends use(parent) {
  constructor(params) {
    super(params);
    this.title = title; // название приложения
    this.httpParams = {
      port: cfg.port,
      host: cfg.host,
    };

    this.entities.Commands = Commands;
  }
};
AppServer.package = packageName;
export default AppServer;
