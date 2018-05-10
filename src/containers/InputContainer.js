import React from 'react';
class InputContainer extends React.Component {

 render() {
  return(
   <div>
    <input className="input-box" onSubmit={e => { e.preventDefault(); }} onKeyPress={() => this.props.updateSearch() }/>/>
  </div>
   );
  }
 }

export default InputContainer;
