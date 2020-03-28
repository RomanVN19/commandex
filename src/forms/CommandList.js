import { Form, Elements } from 'katejs/lib/client';
// import { Form, Elements } from 'katejs/client'; // local

export default class CommandsList extends Form {
  static title = 'Commands';
  constructor(sys) {
    super(sys);
    this.elements = [
      {
        id: 'list',
        type: Elements.TABLE,
        rowClick: this.openCommand,
        columns: [
          { title: 'Name', dataPath: 'title' },
        ],
        value: [],
      },
    ];
    this.actions = [
      {
        type: Elements.BUTTON,
        onClick: this.reload,
        title: 'Reload',
      },
    ];

    this.load();
  }
  async load() {
    const { response } = await this.app.Commands.getCommands();
    if (response) {
      this.content.list.value = response;
    }
  }
  reload = async () => {
    const { response } = await this.app.Commands.loadCommands({ force: true });
    if (response) {
      this.content.list.value = response;
    }
  }
  openCommand = (row, index) => {
    this.app.open('CommandsItem', { id: index });
  }
}
