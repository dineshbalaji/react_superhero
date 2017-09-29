import React from "react";
export default class Hero extends React.Component {
  constructor(props){
    super(props)
    this.onSelect = this.onSelect.bind(this);
  }
  componentWillReceiveProps(props){
    console.log(`herosdf comp ${props}`);
  }
  static  propTypes = {
    person:React.PropTypes.object.isRequired
  }
  onSelect(){
    this.props.selection(this.props.person)
  }
  render() {
    
    return (<li>
      <span>{this.props.person.id}</span> : <span onClick={this.onSelect}>{this.props.person.name}</span>
    </li>);
  }
}