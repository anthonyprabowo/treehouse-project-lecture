const title = React.createElement(
    'h1',
    { id: 'main-title', title: 'This is a title.' }, // pass null if no at attribute is present
    'My First React Element!' // children of h1 (content)
);

console.log(title);