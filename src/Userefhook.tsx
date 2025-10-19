import { useRef, useState } from "react";

const Userefhook = () => {
    const [count, setCount] = useState(0)
    const countRef = useRef(0)
console.log(countRef);

    const HandleState = () => {
        console.log('CountState:', count);
        setCount(count + 1)
    }

    const HandleRef = () => {
        countRef.current = countRef.current + 1;
        console.log('CountRef:', countRef.current); 
    }

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>UseRef Practice</h1>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100px', gap: '8px' }}>
                <div style={{ display: 'flex', gap: '76px' }}>
                    <span>{count}</span>
                    <span>{countRef.current}</span>
                </div>
                <div >
                    <button onClick={HandleState} style={{ padding: '10px 10px' }}>Count</button>
                    <button onClick={HandleRef} style={{ padding: '10px 10px' }}>CountRef</button>
                </div>
            </div>
        </>

    );
}

export default Userefhook