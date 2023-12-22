import React,{useEffect, useRef} from 'react'


function Input( { label,  value, style, type, placeholder, del, id, onClick, min, max, size, name}) {
    

        // const handleChange = (ev) => {
        //     //inputchange(inputValue.current.value)
        // }
        

        // useEffect(()=>{
        //     handleChange()
        // })

        return (    
            < >
                
                {
                    label ? 
                    (<label className="form-input-label">
                        {label}
                    </label>)
                    : null }
                <input 
                id ={id}
                    className = "form-input" 
                    onChange = {(e) => onClick(e.target.value, e.target.name)} 
                    name={name}
                    value={`${value}`} 
                    style={style} 
                    type={type} 
                    placeholder={placeholder}
                    size={size} 
                    min={min}
                    max={max} 
                    required
                    /> 
                {del ? del : ''}   
            </>
        )

}


export default Input
