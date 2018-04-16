import React, { Component } from 'react';
import die1 from './images/inverted-dice-1.svg';
import die2 from './images/inverted-dice-2.svg';
import die3 from './images/inverted-dice-3.svg';
import die4 from './images/inverted-dice-4.svg';
import die5 from './images/inverted-dice-5.svg';
import die6 from './images/inverted-dice-6.svg';
import "./DiceApp.css"

class DiceApp extends Component {
    constructor(props) {
        super(props);
        const rand1 = Math.ceil(Math.random() * 6);
        const rand2 = Math.ceil(Math.random() * 6);
        this.state = {
            die1Val: rand1,
            die2Val: rand2,
            runningTotal: rand1 + rand2
        };

        this.handleClickRoll = this.handleClickRoll.bind(this);
    }
    handleClickRoll(event) {
        const randomNum1 = Math.ceil(Math.random() * 6);
        const randomNum2 = Math.ceil(Math.random() * 6);

        this.setState((prevState) => {
            return {
                die1Val: randomNum1,
                die2Val: randomNum2,
                runningTotal: prevState.runningTotal + randomNum1 + randomNum2
            };
        });

    }
    renderDie(dieNum, dieVal) {
        var dieImgFile;
        if (dieVal === 1) {
            dieImgFile = die1;
        } else if (dieVal === 2) {
            dieImgFile = die2;
        } else if (dieVal === 3) {
            dieImgFile = die3;
        } else if (dieVal === 4) {
            dieImgFile = die4;
        } else if (dieVal === 5) {
            dieImgFile = die5;
        } else if (dieVal === 6) {
            dieImgFile = die6;
        }
        const divClass = 'die-image-' + dieNum;
        return (
            <div className={divClass}>
                <img src={dieImgFile} alt="" />
            </div>
        )
    }
    renderRollBtn() {
        return (
            <button className="roll-btn" onClick={this.handleClickRoll}>
                Roll
            </button>
        )

    }
    renderAppScore() {
        var doubleClass = "";
        if (this.state.die1Val === this.state.die2Val) {
            doubleClass = " doubleScore";
        }
        return (
            <div className="app-score">
                <div className={"die-1-num" + doubleClass}>Die 1: {this.state.die1Val}</div>
                <div className={"die-2-num" + doubleClass}>Die 2: {this.state.die2Val}</div>
                <div className="current-total">Current Roll Total: {this.state.die1Val + this.state.die2Val}</div>
                <div className="running-total">Running Total: {this.state.runningTotal}</div>
            </div>
        )

    }
    render() {
        return (
            <div className="dice-app">
                {this.renderDie(1, this.state.die1Val)}
                {this.renderDie(2, this.state.die2Val)}
                {this.renderRollBtn()}
                {this.renderAppScore()}
            </div>
        )
    }
}
export default DiceApp;