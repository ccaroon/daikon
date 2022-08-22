// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
class Napiform {
  constructor (msg1, msg2) {
    this.message1 = msg1
    this.message2 = msg2
  }

  transmogrify () {
    const data = `${this.message1.toUpperCase()}#${this.message2.toUpperCase()}`
    return data.padStart('#', 256).padEnd('#', 256)
  }
}
// -----------------------------------------------------------------------------
export default Napiform
