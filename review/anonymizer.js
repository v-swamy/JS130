let Account = (function() {

  let userEmail;
  let userPassword;
  let userFirstName;
  let userLastName;

  function anonymize() {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let sequence = '';

    for (let num = 1; num <= 16; num += 1) {
      let index = Math.floor(Math.random() * chars.length);
      sequence += chars[index];
    }

    return sequence;
  }

  function passwordIsValid(test) {
    return test === userPassword;
  }

  return {
    init(email, password, firstName, lastName) {
      userEmail = email;
      userPassword = password;
      userFirstName = firstName;
      userLastName = lastName;
      this.displayName = anonymize();
      return this;
    },

    reanonymize(testPassword) {
      if (passwordIsValid(testPassword)) {
        this.displayName = anonymize();
        return true;
      } else {
        return "Invalid Password";
      }
    },

    resetPassword(testPassword, newPassword) {
      if (passwordIsValid(testPassword)) {
        userPassword = newPassword;
        return true;
      } else {
        return "Invalid Password";
      }
    },

    firstName(testPassword) {
      if (passwordIsValid(testPassword)) {
        return userFirstName;
      } else {
        return "Invalid Password";
      }
    },

    lastName(testPassword) {
      if (passwordIsValid(testPassword)) {
        return userLastName;
      } else {
        return "Invalid Password";
      }
    },

    email(testPassword) {
      if (passwordIsValid(testPassword)) {
        return userEmail;
      } else {
        return "Invalid Password";
      }
    }
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