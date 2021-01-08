
import { Component } from 'react';
import './App.css';
import logo from './iconfinder-icon.svg'

class App extends Component {
  constructor(){
    super()
    this.state = {
      dropdownView: false
    }
  }
  toggleDropdown = () => {
    this.setState({dropdownView: !this.state.dropdownView})
  }
render(){
  
  return (
    <div className="App">
      
     <section className='main'>
       
     <header className='header'>
        <h2 className = 'start'>Start Bootstrap</h2>
        <nav className='navbar'>
        <span>Services</span>
        <span> Portfolio</span>
        <span>About</span>
        <span>Team</span>
        <span>Contact</span>
        </nav>
        <div className="dropdown" onClick={this.toggleDropdown}>
        <img src = {logo}/>
</div>
{this.state.dropdownView
?(
  <nav className = 'mobile-menu'>
    <span>Services</span>
        <span> Portfolio</span>
        <span>About</span>
        <span>Team</span>
        <span>Contact</span>
  </nav>
): null}
      </header>

      <section className='middle'>
          <h2 id = 'Welcome'>Welcome to our Studio!</h2>
          <h1 id = "Meet">It's Nice To Meet You</h1>
          <h2 id = 'Tell'><p>Tell Me More</p></h2>
      </section>
     </section>
    </div>
  );
  }
}

export default App;
