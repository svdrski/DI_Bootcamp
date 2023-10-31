import './App.css';
import React, {Component} from 'react'

class App extends React.Component{

constructor(props){
  super(props)
  this.state = {
    rotatesec: -(new Date().getSeconds() * 6) + 6,
    rotatemin: -(new Date().getMinutes() * 6) + 6,
    rotatehour: -(new Date().getHours() * 15) + 15,
    rotateday: -(new Date().getDate() * 11.6) + 11.6 ,
    rotatemonth: -(new Date().getMonth() * 30) ,

    seconds: 0
  }
}

seconds = []
minutes = []
hours = []
days = []
month = []


createSeconds(){
  let ugol = this.state.rotatesec
  this.seconds = []
  for(let i=1; i<61; i++) {
    this.seconds.push(<div className={`second ${(ugol === 0) && 'active'}  item`} style={{transform: `rotate(${ugol}deg)`}}>{i} sec</div>)
    ugol += 6
  }
}

createMinutes(){
  let ugol = this.state.rotatemin
  this.minutes = []
  for(let i=1; i<61; i++) {
    this.minutes.push(<div className={`Minute ${(ugol === 0) && 'active'}  item`} style={{transform: `rotate(${ugol}deg)`}}>{i} min</div>)
    ugol += 6
  }
}

createHours(){
  let ugol = this.state.rotatehour
  this.hours = []
  for(let i=1; i<25; i++) {
    this.hours.push(<div className={`hour ${(ugol === 0) && 'active'}  item`} style={{transform: `rotate(${ugol}deg)`}}>{i} hr</div>)
    ugol += 15
  }
}

createDays(){
  let ugol = this.state.rotateday
  this.days = []
  console.log(ugol)
  for(let i=1; i<32; i++) {
    this.days.push(<div className={`day ${(ugol > 0) && 'active'}  item`} style={{transform: `rotate(${ugol}deg)`}}>{i} day</div>)
    ugol += 11.6
  }
}

createMonth(){
  let ugol = this.state.rotatemonth
  this.month = []
  for(let i=1; i<13; i++) {
    this.month.push(<div className={`month ${(ugol === 0) && 'active'}  item`} style={{transform: `rotate(${ugol}deg)`}}>{i} month</div>)
    ugol += 30
  }
}



componentDidMount() {

  setInterval(()=>{
    this.setState({rotatesec: this.state.rotatesec <= -360 ? 0 : -(new Date().getSeconds() * 6)})
    this.setState({ rotatemin: this.state.rotatemin <= -360 ? 0 :  -(new Date().getMinutes() * 6) + 6})
    this.setState({ rotatehour: this.state.rotatehour <= -360 ? 0 :  -(new Date().getHours() * 15) + 15})
    this.setState({ rotateday: this.state.rotateday <= -360 ? 0 :  -(new Date().getDate() * 11.6) + 11.6})
    this.setState({ rotatemonth: this.state.rotatemonth <= -360 ? 0 :  -(new Date().getMonth() * 30)})




  }, 1000)
}



  render(){

    this.createSeconds()
    this.createMinutes()
    this.createHours()
    this.createDays()
    this.createMonth()




   return  (
    <>
    <div className='App-header'>
      <div className='box'>
         {this.seconds.map(item => item)}
         {this.minutes.map(item => item)}
         {this.hours.map(item => item)}
         {this.days.map(item => item)}
         {this.month.map(item => item)}




      </div>
    </div>
    </>
   )
  }
}

export default App;













// import './App.css';
// import React, {Component} from 'react'

// class App extends React.Component{

// constructor(props){
//   super(props)
//   this.state = {
//     rotate: -(new Date().getSeconds() * 6),
//     seconds: 0
//   }
// }

// seconds = []


// createSeconds(){
//   let ugol = this.state.rotate
//   // console.log(ugol)
//   this.seconds = []
//   for(let i=1; i<61; i++) {
//     this.seconds.push(<div className={`second ${(ugol === 0) && 'active'}  item`} style={{transform: `rotate(${ugol}deg)`}}>{i} sec</div>)
//     ugol += 6
//   }
// }


// componentDidMount() {

//   // this.setState({rotate: (new Date().getSeconds() / 6)} )
//   setInterval(()=>{
//     // console.log(this.state.rotate)

//     this.setState({rotate: this.state.rotate <= -360 ? 0 : this.state.rotate -=6})
//   }, 1000)
// }



//   render(){

//     this.createSeconds()
//    return  (
//     <>
//     <div className='App-header'>
//       <div className='box'>
//          {this.seconds.map(item => item)}
//       </div>
//     </div>
//     </>
//    )
//   }
// }

// export default App;
