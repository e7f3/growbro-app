export const getInitialData = () => {
  try {
    const data = require('../assets/data/textData.json')
    return data
  } catch (err) {
    console.log(err.message)
  }
}
