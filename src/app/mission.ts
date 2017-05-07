export class Mission {
  id: number;
  name: string = '';
  date: string = '';
  remark: string = '';
  status: string = '';
  description: string = '';

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
