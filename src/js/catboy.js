export default class Catboy {  
  static async getMatch() {
    try {
      const response = await fetch(`https://api.catboys.com/img`);
      if (!response === 200) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}