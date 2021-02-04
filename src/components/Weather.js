import React from 'react'
import HourlyTemp from './HourlyTemp'
import HourlyWind from './HourlyWind'
import Header from './Header'

class Weather extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            userCity: "",
            isUserCity:false,
            locationKey:"",
            places:["London,London,United Kingdom","London,Ontario,Canada","London,Ohio,United States",
            "LondonLine Islands,Kiribati","London,California,United States","London,Svalbard,Svalbard And Jan Mayen"],
            keys:["328328", "55489", "333298", "335012", "1123888","453443"],
            
            // current weather conditions
                localTime:"2021-01-14T23:20",
                temp:"2",
                feelsTemp:"1",
                hasPrec:false,
                isDay:false,
                pressure:"3",
                pressureTendency:"falling",
                uvIndex:"0",
                visibility:"1",
                weatherText:"Mostly cloudy",
                wind:"23",
                windDirection:"360",

            // hourly weather conditions in arrays
                hourlyTime: ['1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
                hourlyWindSpeed:[3,2,5,1,3,2,3,5],
                hourlyTemp:[-1,-2,0,1,4,0,-1,3,2],
                
        }
        this.setKey = this.setKey.bind(this);
        this.setCity = this.setCity.bind(this);
        }

    componentDidMount(){
       this.getCity()
        
    }

    async getCity (){
        const res = await fetch("https://geolocation-db.com/json/85249190-4601-11eb-9067-21b51bc8dee3")
        const data = await res.json();
        this.setState({
            userCity: data.city,
            isUserCity:true,
        },()=>{
            this.getLocationKey();
        })
    
     }      

     async getLocationKey(){
        const res = await fetch(`https://dataservice.accuweather.com/locations/v1/cities/search?apikey=tYgqPzMGuVb2X0eBKTeMDLAODRNzpD8x&q=${this.state.userCity}`)
        const data = await res.json();
        console.log(data)
        if(data.length!==0){
        this.setState({
            places:data.map(o=>o.EnglishName+","+o.AdministrativeArea.EnglishName+","+o.Country.EnglishName),
            keys:data.map(o=>o.Key),
        })
        if(this.state.isUserCity){
            this.setState({
                locationKey:this.state.keys[0],
                isUserCity:false
            })}
    }
    else{
        alert("Please enter a valid name")
    }
    }


   


    async getCurrentWeather(){
        const res = await fetch(`https://dataservice.accuweather.com/currentconditions/v1/${this.state.locationKey}?apikey=tYgqPzMGuVb2X0eBKTeMDLAODRNzpD8x&details=true`,{mode:'cors'})
        const data = await res.json();
        const w = data[0];
        console.log(w)
        this.setState({
                temp:w.Temperature.Metric.Value,
                feelsTemp:w.RealFeelTemperature.Metric.Value,
                hasPrec:w.HasPrecipitation,
                isDay:w.IsDayTime,
                pressure:w.Pressure.Metric.Value,
                pressureTendency:w.PressureTendency.LocalizedText,
                uvIndex:w.UVIndex,
                visibility:w.Visibility.Metric.Value,
                weatherText:w.WeatherText,
                wind:w.Wind.Speed.Metric.Value,
                windDirection:w.Wind.Direction.Degrees,
                localTime:w.LocalObservationDateTime.slice(0,16).replace("T"," "),
        })
    }
     
    async getHourlyWeather(){
        
        const res = await fetch(`https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${this.state.locationKey}?apikey=tYgqPzMGuVb2X0eBKTeMDLAODRNzpD8x&details=true`)
        const data = await res.json();
        console.log(data)
        if(data.length!==0){
        this.setState({
      
        hourlyTime: data.map(o=>{
        const hour = parseInt(o.DateTime.slice(11,13))
        if(hour<=12){
          return hour+"am"
        }
        else{
          return hour-12+"pm"
        }
      }
        ),
      hourlyWindSpeed:data.map(o=>o.Wind.Speed.Value),

      hourlyTemp:data.map(o=>{
        let temp = parseInt(o.Temperature.Value)
        return Math.round(((temp-32)*5)/9);
      })
         // converting to celsius
      })
      }
      }
      

    componentDidUpdate(prevProps,prevState) {
        
        if(this.state.locationKey !== prevState.locationKey){
            this.getCurrentWeather();
            this.getHourlyWeather();
        }
      }
    

    
      setKey(e){
        document.getElementById("cities-list").style.display="none"

          let i = e.target.getAttribute('data-key')
          console.log(i)
          let finalKey = this.state.keys[i]
          this.setState({
              locationKey:finalKey
         })

      }

      setCity(){
        const cList = document.getElementById("cities-list")
        cList.style.display="block"
          this.setState({
              userCity:document.getElementById("search-city").value,
              places:[]
          },()=>{
              this.getLocationKey()
          })
      }
    render(){
        let time = this.state.localTime.slice(11);
        
            const hr = parseInt(time.slice(0,2));
            const min = time.slice(3);
                if(hr<=12) time = hr+":"+min+" am"
                  
                else 
                time = hr-12+":"+min+" pm"

        
        const back = this.state.isDay ? "https://livewire.org.au/wp-content/uploads/2019/01/sunny-day.jpg" 
        : "https://www.awarenessdays.com/wp-content/uploads/2018/07/astro.png"
        document.body.style.backgroundImage = `url(${back})`;

    return (
        <div>
        <Header city={this.state.userCity} setKey={this.setKey} places={this.state.places}
            setCity={this.setCity}/>

        <div id="main-container">
            
            <div id="inner-container">

            <div id="box1">
            <p id="temp-value">{this.state.temp}<sup style={{fontSize:18+"px"}}>o</sup>C</p>
            <p className="other-info">feels like- <span className="val-color">{this.state.feelsTemp}<sup style={{fontSize:18+"px"}}>o</sup>C</span></p>
            <span className="other-info">Pressure- <span className="val-color">{this.state.pressure}mb </span></span>
            {this.state.pressureTendency==="falling" && <i className="val-color fas fa-arrow-down"></i>}
            {this.state.pressureTendency==="rising" && <i className=" val-color fas fa-arrow-up"></i>}

            <p className="other-info">UV Index- <span className="val-color">{this.state.uvIndex}</span></p>

            <p className="other-info">Visibilty- <span className="val-color">{this.state.visibility}km</span></p>
            <p className="other-info">Wind- <span className="val-color">{this.state.wind}km/h at {this.state.windDirection}<sup>o</sup></span></p>
            
            </div>

            
            <div id="box2">
            <p id="weather-text">{this.state.weatherText}</p>
            {(this.state.hasPrec && this.state.isDay && <i className="s fas fa-cloud-sun-rain"></i>) ||
            (!this.state.hasPrec && this.state.isDay && (this.state.weatherText==="Cloudy" ||this.state.weatherText==="Mostly cloudy") && <i className="s fas fa-cloud-sun"></i>)||
            (this.state.hasPrec && !this.state.isDay && <i className="s fas fa-cloud-moon-rain"></i>)||
            (!this.state.hasPrec && !this.state.isDay && <i className="s fas fa-moon"></i>)||
            (!this.state.hasPrec && this.state.isDay && <i className="s fas fa-sun"></i>)}
            </div>

            
            <div id="box3">
            
            <HourlyTemp hTemp={this.state.hourlyTemp}
                        hTime={this.state.hourlyTime}/>
            </div>

            
            <div id="box4">
            <HourlyWind hTime={this.state.hourlyTime}
                        hWindSpeed={this.state.hourlyWindSpeed}/> 
            </div>

            
            </div>

            <div id="time-source">
            <p id="observation-time">Observed at {time}</p>
            <p id="source-logo">Data taken from 
            <img alt="accuweather" src="https://dl.dropbox.com/s/w1tn1chsknn04l9/AW_REGISTERED_Horiz_JPEG_Logo.jpg?dl=0"></img></p>
            </div>

        </div>

        </div>
    )
    }
}

export default Weather;