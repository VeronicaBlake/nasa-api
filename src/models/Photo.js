// REVIEW ok so does this get everything we need? Or just the things we need?

export class Photo {
  constructor(data) {
    this.date = data.date
    this.explanation = data.explanation
    this.title = data.title
  }
}
