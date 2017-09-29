import React from "react";
import HeroList from "./hero-list.component"
import HeroDetails from "./hero-details.component"

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {selectedHero:null};
    this.changeHeroName = this.changeHeroName.bind(this);
    this.changeHeroPower = this.changeHeroPower.bind(this);
    this.heroSelection = this.heroSelection.bind(this);
  }
  componentWillReceiveProps(props){
    
    console.log(`app.comp ${props}`);
  }
  heroSelection(hero){
    this.setState({selectedHero:hero});
  }
  changeHeroName(name){
    let hero= this.state.selectedHero;
    hero.name =  name;
    this.setState({selectedHero:hero});
    
  }
  changeHeroPower(power){
    let hero= this.state.selectedHero;
    hero.power =  power;
    this.setState({selectedHero:hero});
  }
  
  render(){
    if(this.state.selectedHero){
      return <HeroDetails hero={this.state.selectedHero} nameChangeEvent={this.changeHeroName} powerChangeEvent={this.changeHeroPower} onClose={()=> this.setState({selectedHero:null})} ></HeroDetails>
    } else {
      return <HeroList viewDetails={this.heroSelection}></HeroList>
    }
  }
}

/*
* TEST: check how fast setState update and how fast  receive 'this.state.count' to compare setState((prevState)=> ({count:prevState.count}))
* */
/*export default class App extends React.Component {
    constructor (props){
      super(props)
      this.state = {count:0}
      this.loop = this.loop.bind(this);
    }
    loop(){
     for(var i=0;i<10;i++){
        this.setState({count:++this.state.count});
      }
    }
    render(){
       return (<div>
         <p>{this.state.count}</p>
         <button onClick={::this.loop}>Inc</button>
       </div>)
    }
}*/
