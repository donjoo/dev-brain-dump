// A Higher Order Component (HOC) is a function that takes a component and 
// returns a new component with additional behavior or logic.
// 🔧 Simple Definition:

//     A HOC is a pattern used to reuse logic across multiple 
// components by wrapping them in a function.

// 🧠 Analogy:

// Think of a HOC like a power-up in a video game — you 
// give a normal component a HOC-wrapper, and it becomes more powerful.


// 📌 Common Use Cases of HOCs
// Use Case	Description
// Authentication wrapper	Redirect or protect private routes
// Theme injection	Pass theme props or styles
// Data fetching wrapper	Fetch and pass data as props
// Logging/debugging	Track renders or props

// ❗ Limitations of HOCs

//     Can cause wrapper hell (too many nested components)

//     Harder to debug sometimes

//     Don’t work well with hooks inside the HOC function itself (but work 
// fine when the inner component uses hooks)

// 📝 Summary

//     A Higher Order Component is a function that takes a component and 
// returns a new component with enhanced behavior. It’s a pattern for 
// code reuse, often replaced by custom hooks in modern React.



import React from 'react';


function WithLogger(WrappedComponet){
  return function EnhancedComponet(props){
    console.log('props recived',props);
    return (
      <>
      <h1>hey u handsome</h1>
      <WrappedComponet {...props}/>
  </>
        )
  };
}


function Hello(props){
  return (
    <h1>Hello,{props.name}</h1>
  )
};


const EnhancedFunction = WithLogger(Hello);


function hey(params) {
  return <EnhancedFunction name='donjo' />
  
}

export default hey;