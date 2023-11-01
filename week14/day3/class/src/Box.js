import { render } from '@testing-library/react';
import React from 'react'

class Box extends React.Component {

    

    state = {
        flower: "",
      };
    
      letsChange = event => {
        this.setState({ flower: event.target.value });
      };
    
      render() {
        return (
          <label>
            Your Favourite Flower: 🌸
            <select value={this.state.flower} onChange={this.letsChange}>
              <option value="rose">Rose 🌹</option>
              <option value="sunflower">Sunflower 🌻</option>
              <option value="tulip">Tulip 🌷</option>
              <option value="hibiscus">Hibiscus 🌺</option>
            </select>
          </label>
        );
      }
    

//     state = { fluffy: "" };

//     letsChange = event => {
//         let input = event.target.value;
//         input = input.replace(/[0-9]/g, "");
//         this.setState({ fluffy: input });
//       };
      

// //   letsChange = event => {
// //     this.setState({
// //       fluffy: event.target.value,
// //     });
// //     console.log(event.target.value)
// //   };

//   render() {
//     return (
//       <label>
//         <input
//           type="text"
//           value={this.state.fluffy}
//           onChange={this.letsChange}
//         />
//       </label>
//     );
//   }

    // fluffy = React.createRef()




    // letsChange = () => {
    //     console.log(this.fluffy.current.value)
    // }
    

    // render(){

    //     return (
    //         <>
    //         <label>
    //         <input ref={this.fluffy} onChange={this.letsChange}></input> I 😍 HTML
    //         </label>
    //         </>
       
    //     )
    // }
}

export default Box