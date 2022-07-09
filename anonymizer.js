/* eslint-disable max-lines-per-function */
let Account = (function() {

  let userEmail;
  let userPassword;
  let userFirstName;
  let userLastName;

  function createDisplayName() {
    const VALID_CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');
    let name = '';
    for (let count = 1; count <= 16; count += 1) {
      name += VALID_CHARS[Math.floor(Math.random() * VALID_CHARS.length)];
    }
    return name;
  }

  function passwordIsValid(testPassword) {
    return testPassword === userPassword;
  }

  return {
    init(email, password, firstName, lastName) {
      userEmail = email;
      userPassword = password;
      userFirstName = firstName;
      userLastName = lastName;
      this.displayName = createDisplayName();
      return this;
    },

    reanonymize(password) {
      if (passwordIsValid(password)) {
        this.displayName = createDisplayName();
        return true;
      } else return 'Invalid Password';
    },

    resetPassword(currentPassword, newPassword) {
      if (passwordIsValid(currentPassword)) {
        userPassword = newPassword;
        return true;
      } else return 'Invalid Password';
    },

    firstName(password) {
      if (passwordIsValid(password)) {
        return userFirstName;
      } else return 'Invalid Password';
    },

    lastName(password) {
      if (passwordIsValid(password)) {
        return userLastName;
      } else return 'Invalid Password';
    },

    email(password) {
      if (passwordIsValid(password)) {
        return userEmail;
      } else return 'Invalid Password';
    },
  };
})();

let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'));    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')); // logs true

let displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false