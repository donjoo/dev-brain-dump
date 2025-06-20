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