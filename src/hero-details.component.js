import React from "react"
/*
export default function HeroDetails(props) {
  return (
    <section>
      <div><label>id:</label> {props.hero.id}</div>
      <div><label htmlFor="name">name</label> : <input id="name" type="text" value={props.hero.name} onChange={(e)=> props.nameChangeEvent(e.target.value)} /> </div>
      <div><label htmlFor="power">power</label> : <input id="power" type="text" value={props.hero.power} onChange={ (e)=> props.powerChangeEvent(e.target.value)} /> </div>
      <button onClick={props.onClose}>SAVE</button>
    </section>
  );
}*/
export  default  class  HeroDetails extends React.Component {
  constructor(props){
    super(props);
  }
  componentWillReceiveProps(props){
    console.log(`hero details comp ${props}`);
  }
  render(){
    var props =this.props;
      return (
        <section>
          <div><label>id:</label> {props.hero.id}</div>
          <div><label htmlFor="name">name</label> : <input id="name" type="text" value={props.hero.name} onChange={(e)=> props.nameChangeEvent(e.target.value)} /> </div>
          <div><label htmlFor="power">power</label> : <input id="power" type="text" value={props.hero.power} onChange={ (e)=> props.powerChangeEvent(e.target.value)} /> </div>
          <button onClick={props.onClose}>SAVE</button>
        </section>
      );
  }
}