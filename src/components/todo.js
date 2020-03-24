import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox"

import '../css/todo.css'

const Todo = (props) => {
    const [checked, setChecked] = useState(false)

    const handleChange = (e) => {
        setChecked(e.target.checked)
    }

    return (
        <div style={{ display: "flex", flexDirection: "row", textAlign: "center", justifyContent: "center" }}>
            <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'primary checkbox' }}

            />
            <h3 className={checked ? "todo" : ""}>{props.todo}</h3>
        </div>

    )
};

export default Todo;