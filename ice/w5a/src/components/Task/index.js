<<<<<<< HEAD
import "./index.css";
=======
import "./index.css"
>>>>>>> 46b90aafffc8bfc39bdb4e5bfc9a2298d3dcd03b

class Task {
    constructor(props) {
        this.props = props;
        this.element = document.createElement("div");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        this.onClick = this.onClick.bind(this);
<<<<<<< HEAD
        checkbox.addEventListener("change", this.onClick);
=======
        checkbox.addEventListener("change",this.onClick);
>>>>>>> 46b90aafffc8bfc39bdb4e5bfc9a2298d3dcd03b

        this.element.appendChild(checkbox);
        let span = document.createElement("span");
        this.element.appendChild(span);
        span.innerHTML = this.props.content;
        this.element.className = "task";
    }
    onClick(e) {
        console.log(this);
        console.log(e.target);
        console.log(e.target.checked);
    }
    render() {
        return this.element;
    }
}
<<<<<<< HEAD
=======

>>>>>>> 46b90aafffc8bfc39bdb4e5bfc9a2298d3dcd03b
export default Task;