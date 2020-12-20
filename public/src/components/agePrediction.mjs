import defaultComponent from '../defaultComponent.mjs'

export default class extends defaultComponent {
  constructor() {
    super()
  }

  connectedCallback() {
    fetch('https://api.agify.io/?name=hyunbin', { method: 'get' })
    .then(response => response.json())
    .then(data => {
      const name = document.createElement('p')
      name.innerHTML = data.name
      const predictedAge = document.createElement('p')
      predictedAge.innerHTML = data.age
      this.append(name)
      this.append(predictedAge)
    })
    .catch(err => {
      console.log(err)
    })
  }
}