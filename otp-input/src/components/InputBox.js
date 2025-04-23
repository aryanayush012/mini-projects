import React,{useState,useRef, useEffect} from 'react'

const OTP_INPUT_SIZE = 6;
const InputBox = () => {
    const [otpArray,setOtpArray] = useState(new Array(OTP_INPUT_SIZE).fill(''));
    const referenceArray = useRef([]);
    useEffect(()=>{
        referenceArray.current[0]?.focus();
    },[])
    const handleChange=(val,index)=>{
        const newArray = [...otpArray];
        newArray[index] = val.slice(-1);
        setOtpArray(newArray);
        referenceArray.current[index+1]?.focus();
    }
    const handleKeyDown=(e,index)=>{
        if (e.key === 'Backspace') {
            if (!e.target.value && index > 0) {
                const newArray = [...otpArray];
                newArray[index - 1] = '';
                setOtpArray(newArray);
                referenceArray.current[index - 1]?.focus();
            }
        }
    }
  return (
    <div className='otp-container'>
        <h1>Enter OTP Here</h1>
        {otpArray.map((element, index) =>
        <input 
            type="number" 
            name="otp_digit" 
            id="otp_digit" 
            value={otpArray[index]} 
            key={index} 
            className='otp-input'
            ref={(element)=>referenceArray.current[index] = element}
            onChange={(e)=>{handleChange(e.target.value,index)}}
            onKeyDown={(e)=>{handleKeyDown(e,index)}}
        />
      )}
    </div>
  )
}

export default InputBox