import "./index.css";
class Task {
    constructor(props) {
        this.props = props;
        this.element = document.createElement("div");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        this.element.appendChild(checkbox);
        let span = document.createElement("span");
        this.element.appendChild(span);
        span.innerHTML = this.props.content;
    }
    render() {
        return this.element;
    }
}
export default Task;