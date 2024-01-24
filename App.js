const heading = React.createElement("h1", {id:'heading'}, "hello world") //creates an object
/*
createElement is a part of react(main) cdn
takes 3 arguments- 
1.tag - h1, div, etc
2.props - id, class, key
3.child - text or another element
*/

console.log(heading) 
//returns an object because the createelement function creates an object which is later changed into html when rendered

const parent = React.createElement("div", {id:'parent'},
React.createElement("div", {id:'child'}, 
[//when we want multiple children of a single element those are grouped in an array => sibling elements
    React.createElement("h1", {id:'h1', key:1}, "hello world"), 
    React.createElement("h1", {id:'h2', key:2}, "hello world"), 
    React.createElement("h1", {id:'h2', key:3}, "hello world")
]
)) //the key prop isn't accessible in your component's props object 
// key is not a valid HTML attribute, so it will not be shown in the DOM when you inspect the elements in your browser.
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(parent) //changes the created object into html element