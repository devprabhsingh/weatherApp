import React from 'react'
import {Line} from 'react-chartjs-2'

class HourlyTemp extends React.Component{
 constructor(props){
   super(props)
    this.state={
      hourlyTime:props.hTime,
      hourlyTemp:props.hTemp,
    }
 }

 componentWillReceiveProps(nextProps) {
  // This will erase any local state updates!
  // Do not do this.
  this.setState({ hourlyTime:nextProps.hTime,
                  hourlyTemp:nextProps.hTemp});
}
 
      
  
  
    render(){
        return(
          <div id="box3">
          <Line
            data={{
              labels:this.state.hourlyTime,
              datasets: [
                {
                  label: '',
                  fill:'start',
                  lineTension: 0.5,
                  backgroundColor: 'rgba(255,215,0,0.8)',
                  borderColor: 'orange',
                  borderWidth: 1,
                  data:this.state.hourlyTemp,
                }
              ],
            }
            }
              options={{
                scales: {
                     xAxes: [{
                        gridLines: {
                           display: false
                        },
                        
                        ticks: {
                          fontColor:'black',
                       }
                     }],
                     yAxes: [{
                        ticks: {
                           beginAtZero: true, 
                           display:false
                        },
                        gridLines: {
                           display: false
                        }
                     }]
                    },
                  tooltips:{
                    callbacks: {
                      label: function(tooltipItem) {
                          return Number(tooltipItem.yLabel) + " 'C";
                      }
                  }
                  },
                  legend:{
                    display:false
                  },
                  title:{
                    text:"Temperature",
                    display:true,
                    fontSize:14,
                    fontColor:"purple",
                    position:'bottom',
                    fontFamily:'helvetica',
                  }
              
              }}
               
            
          />
        </div>
        )}
  }
export default HourlyTemp;



