import {render} from 'react-dom';
import * as React from 'react';

class App extends React.Components<any,any>{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>Hello</div>
    )
}

}
render(<App/>, document.getElementById('root'));
