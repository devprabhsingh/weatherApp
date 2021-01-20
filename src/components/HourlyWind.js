import React from 'react'
import {Line} from 'react-chartjs-2'

class HourlyWind extends React.Component{
 constructor(props){
   super(props)
    this.state={
      hourlyWindSpeed:props.hWindSpeed,
      hourlyTime:props.hTime,
    }
 }

 componentWillReceiveProps(nextProps) {
  // This will erase any local state updates!
  // Do not do this.
  this.setState({ hourlyTime:nextProps.hTime,
                  hourlyWindSpeed:nextProps.hWindSpeed});
}
 
      
  
  
    render(){
        return(
         
          <Line
            data={{
              labels:this.state.hourlyTime,
              datasets: [
                {
                  label: 'Wind Speed',
                  fill:'start',
                  lineTension: 0.5,
                  backgroundColor: '#19d9fd',
                  borderColor: 'blue',
                  borderWidth: 2,
                  data:this.state.hourlyWindSpeed,
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
                       },
                        
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
                          return Number(tooltipItem.yLabel) + " mi/h";
                      }
                  },
                  bodyFontSize: 20,
                  },
                  legend:{
                    display:false
                  },
                  title:{
                    text:"Wind Speed",
                    display:true,
                    fontSize:14,
                    fontColor:"purple",
                    position:'bottom',
                    fontFamily:'helvetica',
                  }
              
              }}
               
            
          />
        
        )}
  }
export default HourlyWind;



