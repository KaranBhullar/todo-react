interface inputProps {
    input: React.Dispatch<React.SetStateAction<string>>,
    className?: string
    placeHolder?: string
}

function Input({input, className, placeHolder}: inputProps) {
    return(
        <div>
            <form>
                <input name="Enter" 
                placeholder={placeHolder}
                onChange={(e) => input(e.target.value)}
                className={className}></input>
            </form>
        </div>
    )
}

export default Input;