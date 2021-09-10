function InputField(props) {
    return (
        <div className='inputField'>
            <input
                className='input'
                type={props.type}
                placeholder={props.placeholder}
                class="bg-transparent placeholder-white"
                value={props.value}
                onChange={(e) => props.onChange(e.target.value)}
            />
        </div>
    );
}

export default InputField;