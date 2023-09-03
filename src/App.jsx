import { useState } from "react";
import "./App.css";
const tabData = [
    {
        id: 1,
        title: "ITEM 1",
        content: "Authorize the user data ✅",
    },
    {
        id: 2,
        title: "ITEM 2",
        content: "Redirect user to cart page 🛒",
    },
    {
        id: 3,
        title: "ITEM 3",
        content: "Create new payment for the user 💰",
    },
];

function App() {
    const [count, setCount] = useState(0);
    const [activeTab, setActiveTab] = useState(1);
    const handelActive = (id, e) => {
        setActiveTab(id);
        setCount((pc)=>pc+1)
    };

    const [toShow, setToShow] = useState(false);
    const handelToShow = () => {
        setToShow(!toShow);
    };

    return (
        <div>
            <button onClick={handelToShow}>{toShow ? "❌" : "✔"}</button>
            {toShow && (
                <div className="tab">
                    <div className="tab__header">
                        {tabData.map((i) => (
                            <button
                                onClick={() => handelActive(i.id)}
                                key={i.id}
                                className={i.id === activeTab ? "active" : ""}
                            >
                                <span>{i.title}</span>
                                <span className="tab-indicator"></span>
                            </button>
                        ))}
                    </div>
                    <div className="tab__footer">
                        {tabData[activeTab - 1].content}-{count}
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
