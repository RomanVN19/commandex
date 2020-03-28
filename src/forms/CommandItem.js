import { Form, Elements } from 'katejs/lib/client';
// import { Form, Elements } from 'katejs/client'; // local

export default class Command extends Form {
  static title = 'Command';

  constructor(args) {
    super(args);
    this.commandIndex = args.params.id;

    this.actions = [
      {
        type: Elements.BUTTON,
        title: 'EXEC',
        onClick: this.exec,
      },
      {
        type: Elements.BUTTON,
        title: 'CLOSE',
        onClick: this.close,
      },
    ];

    this.elements = [
      {
        id: 'label',
        type: Elements.LABEL,
        title: 'Command',
        tag: 'h5',
      },
      {
        id: 'input',
        type: Elements.INPUT,
        rows: 20,
        rowsMax: 100,
        style: { fontFamily: '"Courier New", Courier, monospace ' },
      },
    ];

    this.loadCommand();
  }

  async loadCommand() {
    const { response } = await this.app.Commands.getCommand({ commandIndex: +this.commandIndex });
    if (response) {
      this.content.label.title = Array.isArray(response.command) ? response.command.join('; ') : response.command;
      this.content.form.title = `Command: ${response.title}`;
    }
  }

  exec = async () => {
    const { response, error } = await this.app
      .Commands.execCommand({ commandIndex: this.commandIndex });
    this.content.input.value = response || error;
  };

  close = () => {
    this.app.open('CommandsList');
  }
}
