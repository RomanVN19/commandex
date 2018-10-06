import { Form, Elements } from 'katejs/client';

export default class CommandsList extends Form {
  static title = 'Commands';
  static path = '/commands';
  constructor(sys) {
    super(sys);
    this.init({
      actions: [],
      elements: [
        {
          type: Elements.INPUT,
          id: 'test',
          title: ' test input'
        },
      ]
    });
    this.load();
  }
  async load() {
    console.log('load',await this.app.Commands.get1());
  }
}
