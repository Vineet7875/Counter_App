import React from "react";
class Counterapp extends React.Component {
    constructor() {
        super()
        this.state = {
            value: 0,
            color: "black"
        }
    }
    decrement() {
        this.setState({
            value: this.state.value - 1,
            color: "red"
        })
    }

    reset() {
        this.setState({
            value: 0,
            color: "black"
        })
    }

    increment() {
        this.setState({
            value: this.state.value + 1,
            color: "green"
        })
    }
    render() {
        return (<>
            <div className="grandparent">
                <div className="parent">
                    <h1 id="head1">Counter</h1>
                    <h1 id="head2" style={{ color: `${this.state.color}` }}>{this.state.value}</h1>
                    <div className="butparent">
                        <button id="button1" className="btn btn-white btn-animated" onClick={() => { this.decrement() }}>DECREASE</button>
                        <button id="button3" onClick={() => { this.increment() }}>INCREASE</button>
                        <button id="button2" onClick={() => { this.reset() }}>RESET</button>
                    </div>
                </div>
            </div>
        </>)
    }
}
export default Counterapp