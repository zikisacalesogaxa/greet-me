'use strict';

// Returns the name in the input box...
function getName(name) {
  var namesGreeted = {};
  var greetedNames = [];

  // Loopping through the namesGreeted object
  for (let i = 0; i < namesGreeted.length; i++) {}

  if (name.value !== '' && namesGreeted[name] === !undefined) {
    return name.value;
  } else if (name.value !== '' && namesGreeted[name] === undefined) {
    namesGreeted[name] = 1;
    greetedNames.push(name.value);
    return name.value;
  } else {
    return 'Please enter a valid name';
  }
}
