function executeCallback( callback ) {
  callback();
}

// Print Hello
executeCallback(() => console.log('Hello'));

//print Goodbye
executeCallback(() => console.log('Goodbye'));