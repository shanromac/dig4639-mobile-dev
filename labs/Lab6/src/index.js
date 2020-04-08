import React, {Component} from "react";
import ReactDOM, { render } from "react-dom";
import "./assets/style.css";
import quizBank from "./quizBank";
import QuestionBox from "./components/QuestionBox";
import Result from "./components/Result";

class Lab6 extends Component {
  state = {
    questionBank: [],
    score: 0,
    responses: 0
  };
  getQuestions = () => {
    quizBank().then(question => {
      this.setState({
        questionBank: question
      });
    });
  };
  computeAnswer = (answer, correctAnswer) => {
    if (answer === correctAnswer) {
        this.setState({
          score: this.state.score + 1
        });
    }
    this.setState({
      responses: this.state.responses < 5 ? this.state.responses + 1 : 5
    });
  };
  playAgain = () => {
    this.getQuestions();
    this.setState({
      score: 0,
      responses: 0
    });
  };
componentDidMount() {
  this.getQuestions();
}
render() {
  return (
    <div className="container">
      <div className="title">Test Your Lord of the Rings Knowledge!</div>
      {this.state.questionBank.length > 0 &&
      this.state.responses < 5 &&
      this.state.questionBank.map(
        ({question, answers, correct, questionId}) => (
        <QuestionBox
        question={question}
        options={answers}
        key={questionId}
        selected={answer => this.computeAnswer(answer, correct)}
        />
        )
      )}

      {this.state.responses === 5 ? (
      <Result score={this.state.score} playAgain={this.playAgain} />) : null}
    </div>
    );
  }
}

ReactDOM.render(<Lab6 />, document.getElementById("root"));