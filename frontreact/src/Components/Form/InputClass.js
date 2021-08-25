export class Input {
  constructor(name, placeholder='', type='text'){
    this.name = name
    this.placeholder = placeholder
    this.type = type
    this.key = name + type
    this.required = true
  }
}
