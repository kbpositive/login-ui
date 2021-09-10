function InputField(props) {
    return (
        <div className='inputField'>
            <input
                class='placeholder-gray-100 text-center bg-transparent mix-blend-overlay bg-gray-500 bg-opacity-50 flex shadow-inner font-sans rounded-3xl m-3 p-3 justify-center'
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