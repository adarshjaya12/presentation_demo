import {render} from 'react-dom';
import * as React from 'react';

class App extends React.Component<any,any>{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="container custom-element">
      <div className="form-group">
        <input className="form-control"></input>
      </div>
      <div className="form-group">
        <input className="form-control"></input>

      </div>
      <div className="form-group">        <button type="button" className="btn btn-primary">Primary</button></div>
    </div>
    )
}

}
render(<App/>, document.getElementById('root'));
