function executeCallback( callback ) {
  callback();
}

// Print Hello
executeCallback(() => {
  console.log('Hello');
});

executeCallback(() => {
  console.log('Goodbye');
});