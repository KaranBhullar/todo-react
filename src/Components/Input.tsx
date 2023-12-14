interface inputFields {
    input: React.Dispatch<React.SetStateAction<string>>
}

function Input({input}:inputFields) {
    return(
        <div>
            <form>
                <input name="Enter" 
                onChange={(e) => input(e.target.value)}></input>
            </form>
        </div>
    )
}

export default Input;