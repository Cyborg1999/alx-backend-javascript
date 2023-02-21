/**
 * Contains the miscellaneous route handlers.
 * @author Andrew Tonui <https://github.com/Cyborg1999>
 */
class AppController {
    static getHomepage(request, response) {
      response.status(200).send('Hello Holberton School!');
    }
  }
  
  export default AppController;
  module.exports = AppController;