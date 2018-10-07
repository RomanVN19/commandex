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
          id: 'list',
          type: Elements.TABLE,
          rowClick: this.openCommand,
          columns: [
            { title: 'Name', dataPath: 'title' },
          ],
          value: [],
        },
      ]
    });
    this.load();
  }
  async load() {
    const { response } = await this.app.Commands.getCommands();
    if (response) {
      this.content.list.value = response;
    }
  }
  openCommand = (row, index) => {
    this.app.open(this.app.allForms.CommandsItem, { id: index });
  }
}
