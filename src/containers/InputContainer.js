import React from 'react';
class InputContainer extends React.Component {

  onSubmit(e) {
    if(e.key === 'Enter') {
      this.props.updateSearch(e.target.value);
      this.props.collapse();
      e.preventDefault();
    }
  }

 render() {
  return(
   <div>
     <form onSubmit={e => { e.preventDefault(); }}>
       <input className="input-box" onKeyPress={this.onSubmit.bind(this)} />
     </form>
  </div>
   );
  }
 }

export default InputContainer;
