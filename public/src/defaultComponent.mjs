export default class extends HTMLElement {
  static component
  constructor() {
    super()
    this.component = this.dataset.component
    fetch(this.component, { method: 'get' })
    .then(response => response.text())
    .then(data => this.innerHTML = data)
    .catch(err => {
      console.log(err)
      this.innerHTML = '<p>Page Not Found</P>'
    })
  }
}