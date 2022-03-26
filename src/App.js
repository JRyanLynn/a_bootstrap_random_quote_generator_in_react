import React from "react";
import './App.css';

const myArray = [
  { quote: "Kim K is legit, all caps!", author: "Ray Bradbury" },
  { quote: "YOLO", author: "Steven Hawking" },
  { quote: "High heelz, high hopes.", author: "George Washington" },
  { quote: "I live in a van down by the river", author: "Mark Twain" },
  { quote: "Pull my finger", author: "Shakesphere" },
  { quote: "God is dog spelled backward", author: "Plato" },
  { quote: "Robots have feelings too!", author: "Mark Zukerburg" },
  { quote: "The shozzberries taste like shozzberries", author: "Elon Musk" },
  { quote: "You ain't all that n a bag of chips", author: "Noam Chomsky" },
  { quote: "E equals MC Hammer", author: "Einstein" },
  { quote: "Don't stop belevin", author: "Motzart" },
  { quote: "Stupid is as stupid does", author: "Charles Darwin" }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "Puke and rally.",
      author: "Ralph Emerson"
    };
  }

  handleClick() {
    const randomItem = myArray[Math.floor(Math.random() * myArray.length)];
    window.onload = this.state;

    this.setState({
      quote: randomItem.quote,
      author: randomItem.author
    });
  }

  render() {
    return (
      <div className="App container-fluid">
        <wrapper
          id="quote-box"
          className="d-flex align-items-center justify-content-center vh-100"
        >
          <div id="quote-container" className="col-6 box p-5 rounded">
            <div id="text" className="text-center">
              {" "}
              "{this.state.quote}"
            </div>

            <div id="author" className="text-right">
              {this.state.author}
            </div>

            <div className=" buttons d-flex justify-content-between">
              <a id="tweet-quote" class="btn btn-secondary active" role="button" aria-pressed="true" href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="
              >
                #tweet
              </a>

              <button
                id="new-quote"
class="btn btn-primary active" role="button" aria-pressed="true"
                onClick={this.handleClick.bind(this)}
              >
                Hit Me!
              </button>
            </div>
          </div>
        </wrapper>
      </div>
    );
  }
}

export default App;