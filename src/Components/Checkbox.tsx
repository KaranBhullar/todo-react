interface CheckboxProps {
    list: string[]
}

function Checkbox({list}:CheckboxProps) {

    return(
        <div>
            {list.map((element, index) => (
                <div>
                    <input key={index} type="checkbox"></input>
                    <label>{" " + element}</label>
                </div>
                ))}
        </div>
    )
}

export default Checkbox;