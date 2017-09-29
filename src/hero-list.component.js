import React from "react";
import {HEROS} from "./Heros"
import Hero from "./hero.component"
export default class HeroList extends React.Component {
  constructor(props){
    super(props)
    this.state = {selectedHero:null}
    this.heroSelection = this.heroSelection.bind(this);
  }
  componentWillReceiveProps(props){
    console.log(`hero list comp ${props}`);
  }
  componentWillMount(){
    this.heros = HEROS
  }
  heroSelection(hero){
    this.setState({selectedHero:hero})
  }
  
  render(){
    
    return (
        <section>
          <h3>My Hero List</h3>
          <ul>
            {
              this.heros.map((hero)=> <Hero key={hero.id} person={hero} selection={this.heroSelection}></Hero> )
            }
          </ul>
          {this.state.selectedHero && ( <div>
            <p><strong>{this.state.selectedHero.name}</strong> is my Hero</p>
            <button onClick={()=> this.props.viewDetails(this.state.selectedHero)}>view details</button>
          </div>)}
        </section>
    )
  }
}