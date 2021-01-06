// const title = React.createElement(
//     'h1',
//     { id: 'main-title', title: 'This is a title.' }, // pass null if no at attribute is present
//     'My First React Element!' // children of h1 (content)
// );

// const title = <h1>My First React Element</h1> JSX

// const desc = React.createElement(
//     'p',
//     null,
//     'I just learned how to create a React node and render it into the dom'
// );

//  const desc = <p>I just learned how to create a React node and render it into the dom</p>


// const header = React.createElement(
//     'header',
//     null,
//     title,
//     desc
// );

// const title = 'My First React Element'
const desc = 'I just learned how to create a React node and render it into the dom'

// the {} in for title and desc is called JSX expression

const myTitleID = 'main-title';
const name = 'Anthony';

const header = (
    <header>
    {/* This is a comment */}
        <h1 id={myTitleID}>{ name }'s First React Element!</h1> 
        <p className="main-desc">{ desc }</p>
    </header>
);

ReactDOM.render( // render node tree created by createElement()
    header,
    document.getElementById('root')
);