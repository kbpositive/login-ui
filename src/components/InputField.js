function InputField(props) {
    return (
        <div className='inputField'>
            <input
                class='text-center bg-transparent'
                className='input'
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                onChange={(e) => props.onChange(e.target.value)}
            />
        </div>
    );
}

export default InputField;