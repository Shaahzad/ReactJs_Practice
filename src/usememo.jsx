import { useMemo, useRef, useState } from 'react';

export const Usememohook = () => {
    const [count, setCount] = useState(0)
    const countRef = useRef(0)
    return (
        <>
        <h1 style={{ textAlign: 'center' }}>UseRef Practice</h1>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px', gap: '8px'}}>
            <span>{count}</span>
            <span>{countRef}</span>
            <button style={{padding: '10px 10px'}}>Count</button>
            <button style={{padding: '10px 10px'}}>CountRef</button>
        </div>
        </>

    );
};



