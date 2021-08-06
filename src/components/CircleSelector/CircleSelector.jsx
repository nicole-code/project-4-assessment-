import './CircleSelector.css'

export default function CircleSelector(props) {

    

    return (
        <div className="CircleSelector">

        <button onClick={() => props.handleClick(1)}>Select Circle 1</button>
        <button onClick={() => props.handleClick(2)}>Select Circle 2</button>
        <button onClick={() => props.handleClick(3)}>Select Circle 3</button>
        <button onClick={() => props.handleClick(4)}>Select Circle 4</button>
        </div>
    )
}