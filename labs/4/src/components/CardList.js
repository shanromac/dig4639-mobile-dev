/*
function ListItem(props) {
    return <li>{props.value}</li>
}

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
    <ListItem key={number.toString()}
              value={number}/>
    );
    return (
        <ul>
            {listItems}
        </ul>
    );
}

const numbers = [
    { priority: 0, title: 'Max', content: 'Enjoys the beach.' },
    { priority: 1, title: 'Maggie', content: 'Loves to run.' },
    { priority: 2, title: 'Buddy', content: 'Sniffs butts.' }
]
ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.getElementById('root')
);
*/

const Card = [
    { priority: 0, title: 'Max', content: 'Enjoys the beach.' },
    { priority: 1, title: 'Maggie', content: 'Loves to run.' },
    { priority: 2, title: 'Buddy', content: 'Sniffs butts.' }
]
