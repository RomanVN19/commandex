
export default class Commands {
  async get({ ctx }) {
    console.log('get method call');
    ctx.status = 404;
    return [1,2,3];
  }
}
