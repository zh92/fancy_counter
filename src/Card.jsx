import { useState } from "react";
import Count from "./Count";
import ResetButton from "./ResetButton";
import CountButton from "./CountButton";
import Title from "./Title";
import { useEffect } from "react";
import ButtonContainer from "./ButtonContainer";

export default function Card() {
    const [count, setCount] = useState(0);
    const locked = count === 5 ? true : false;

    // [] empty array refers to run only when component mount
    // [count] will render again once count changes
    useEffect(() => {
        const handleKeydown = (event) => {
            if (event.code === 'Space') {
                const newCount = count + 1;
                if (newCount > 5) {
                    return setCount(5);
                }
                setCount(newCount);
            }
        };
        window.addEventListener('keydown', handleKeydown);
        
        // clean up function for event listener
        return () => {
            window.removeEventListener("keydown", handleKeydown)
        }
    }, [count]);

    return (
        <div className={`card ${locked ? "card--limit" : ""}`}>
            <Title locked={locked} />
            <Count count={count} />
            <ResetButton setCount={setCount} />
            {/* passing CountButton as a child prop */}
            <ButtonContainer>
                <CountButton type="minus" setCount={setCount} locked={locked} />
                <CountButton type="plus" setCount={setCount} locked={locked} />
            </ButtonContainer>
        </div>
    )
}