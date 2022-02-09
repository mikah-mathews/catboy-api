export default class Name {
  static async grabName() {
    try {
      const getName = await fetch(`https://randomuser.me/api/?inc=gender,name,nat&noinfo`);
      if (!getName.ok) {
        throw (getName.statusText);
      }
      return getName.json();
    } catch(error) {
      return error.message;
    }
  }
}