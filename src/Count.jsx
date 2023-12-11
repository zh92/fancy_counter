
// props are destructured in the input
export default function Count({ count }) {
    console.log("Component rendering...")
    // useState to re-render component on click
    //const [count, setCount] = useState(0);

    return ( 
        <p className="count">
            {count}
        </p>
    )
}

