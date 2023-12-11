import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

// refactor out the buttons into a seperate function
// pass in the type beside the props
export default function CountButton({ type, setCount, locked }) {
    const handleClick = (event) => {
        setCount((prev) => {
            if (type === "minus") {
                const newCount = prev - 1;
                if (newCount < 0) {
                    return 0;
                }
                return newCount;
            } else {
                const newCount = prev + 1;
                if (newCount > 5) {
                    return 5;
                }
                return newCount;
            }
        });
        // this is to unfocus the button after click, to prevent clicking the button
        // when pressing the spacebar as programmed
        event.currentTarget.blur();
    }

    return <button disabled={locked} onClick={handleClick} className="count-btn">
        {
            type === 'minus' ? <MinusIcon className="count-btn-icon"/> : 
                <PlusIcon className="count-btn-icon"/>
        }
        

    </button>
}