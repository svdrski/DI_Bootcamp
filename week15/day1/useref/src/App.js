import React, { useRef } from 'react';

function SmoothScroll() {
  const sectionRef = useRef(null);
  const finist = useRef()

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <button onClick={scrollToSection}>Scroll to Section</button>
      <button onClick={()=>{finist.current.scrollIntoView({behavior: "smooth"})}}>Scroll to Section</button>

      <div style={{ height: '100vh' }}>
        <p>Scroll down</p>
      </div>
      <div ref={sectionRef}>
        <h2>Target Section</h2>
        <p>This is the section you want to scroll to.</p>
      </div>


      <div style={{ height: '100vh' }}>
      </div>

      <p ref={finist}>Scroll down</p>

    </div>
    
  );
}

export default SmoothScroll;






// import React, { useRef, useState } from 'react';



// export default function App (){

//   const count = useRef()


//   return(
//     <>
//     <textarea ref={count}></textarea>
//     <button onClick={()=>{console.log(count.current.value.length)}}>show</button>
//     </>
//   )
// }








// import React, { useRef, useState } from 'react';

// function App() {
//   const textAreaRef = useRef(null);
//   const [charCount, setCharCount] = useState(0);

//   const handleInputChange = () => {
//     const inputText = textAreaRef.current.value;
//     setCharCount(inputText.length);
//   };

//   return (
//     <div>
//       <textarea
//         ref={textAreaRef}
//         rows="4"
//         cols="50"
//         onChange={handleInputChange}
//         placeholder="Type something..."
//       />
//       <p>Character Count: {charCount}</p>
//     </div>
//   );
// }

// export default App;



// export default function App (){

//   const timerRef = useRef()



//   useEffect(() => {
//     timerRef.current = setInterval(() => {
//       // Perform some action periodically
//     }, 1000);

//     return () => {
//       // Clear the interval when the component unmounts
//       clearInterval(timerRef.current);
//     };
//   }, []);


//   return(
//  <div>Timer is running...</div>
//   )
// }








// function App() {


//   const inputRef = useRef()

//   const handleButtonClick = () => {
//     alert(`Input value: ${inputRef.current.value}`);
//     console.log(inputRef.current.value)

//   };




//   return (
//     <>
//       <input ref={inputRef} type="text" />
//       <button onClick={handleButtonClick}>Get Input Value</button>
//     </>

//   );
// }

// export default App;
