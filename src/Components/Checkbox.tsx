interface CheckboxProps {
    list: JSX.Element[]
}

function Checkbox({list}:CheckboxProps) {
    console.log(list)
    return(
        <div>
            {...list}
        </div>
    )
}

export default Checkbox;