(this.webpackJsonpweatherApp=this.webpackJsonpweatherApp||[]).push([[0],{152:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(45),r=a.n(i),o=(a(51),a(3)),l=a.n(o),c=a(12),u=a(5),m=a(6),d=a(11),h=a(8),p=a(7),y=a(19),f=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={hourlyTime:e.hTime,hourlyTemp:e.hTemp},n}return Object(m.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.setState({hourlyTime:e.hTime,hourlyTemp:e.hTemp})}},{key:"render",value:function(){return s.a.createElement("div",{id:"box3"},s.a.createElement(y.Line,{data:{labels:this.state.hourlyTime,datasets:[{label:"",fill:"start",lineTension:.5,backgroundColor:"rgba(255,215,0,0.8)",borderColor:"orange",borderWidth:1,data:this.state.hourlyTemp}]},options:{scales:{xAxes:[{gridLines:{display:!1},ticks:{fontColor:"black"}}],yAxes:[{ticks:{beginAtZero:!0,display:!1},gridLines:{display:!1}}]},tooltips:{callbacks:{label:function(e){return Number(e.yLabel)+" 'C"}}},legend:{display:!1},title:{text:"Temperature",display:!0,fontSize:14,fontColor:"purple",position:"bottom",fontFamily:"helvetica"}}}))}}]),a}(s.a.Component),v=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={hourlyWindSpeed:e.hWindSpeed,hourlyTime:e.hTime},n}return Object(m.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.setState({hourlyTime:e.hTime,hourlyWindSpeed:e.hWindSpeed})}},{key:"render",value:function(){return s.a.createElement(y.Line,{data:{labels:this.state.hourlyTime,datasets:[{label:"Wind Speed",fill:"start",lineTension:.5,backgroundColor:"#19d9fd",borderColor:"blue",borderWidth:2,data:this.state.hourlyWindSpeed}]},options:{scales:{xAxes:[{gridLines:{display:!1},ticks:{fontColor:"black"}}],yAxes:[{ticks:{beginAtZero:!0,display:!1},gridLines:{display:!1}}]},tooltips:{callbacks:{label:function(e){return Number(e.yLabel)+" mi/h"}},bodyFontSize:20},legend:{display:!1},title:{text:"Wind Speed",display:!0,fontSize:14,fontColor:"purple",position:"bottom",fontFamily:"helvetica"}}})}}]),a}(s.a.Component);function b(e){var t=e.city,a=e.setKey,n=e.places,i=e.setCity;return s.a.createElement("header",null,s.a.createElement("p",{id:"title"},"Weather App"),s.a.createElement("div",{className:"search-form"},s.a.createElement("input",{type:"text",id:"search-city",placeholder:t}),s.a.createElement("div",{id:"cities-list"},n.map((function(e,t){return s.a.createElement("button",{key:t,"data-key":t,onClick:function(e){a(e)}},e)}))),s.a.createElement("i",{onClick:i,className:"fas fa-arrow-alt-circle-right"})))}var E=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={userCity:"",isUserCity:!1,locationKey:"",places:["London,London,United Kingdom","London,Ontario,Canada","London,Ohio,United States","LondonLine Islands,Kiribati","London,California,United States","London,Svalbard,Svalbard And Jan Mayen"],keys:["328328","55489","333298","335012","1123888","453443"],localTime:"2021-01-14T23:20",temp:"2",feelsTemp:"1",hasPrec:!1,isDay:!1,pressure:"3",pressureTendency:"falling",uvIndex:"0",visibility:"1",weatherText:"Mostly cloudy",wind:"23",windDirection:"360",hourlyTime:["1pm","2pm","3pm","4pm","5pm","6pm","7pm","8pm"],hourlyWindSpeed:[3,2,5,1,3,2,3,5],hourlyTemp:[-1,-2,0,1,4,0,-1,3,2]},n.setKey=n.setKey.bind(Object(d.a)(n)),n.setCity=n.setCity.bind(Object(d.a)(n)),n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.getCity()}},{key:"getCity",value:function(){var e=Object(c.a)(l.a.mark((function e(){var t,a,n=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://geolocation-db.com/json/85249190-4601-11eb-9067-21b51bc8dee3");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,this.setState({userCity:a.city,isUserCity:!0},(function(){n.getLocationKey()}));case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getLocationKey",value:function(){var e=Object(c.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://dataservice.accuweather.com/locations/v1/cities/search?apikey=tYgqPzMGuVb2X0eBKTeMDLAODRNzpD8x&q=".concat(this.state.userCity));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,console.log(a),0!==a.length?(this.setState({places:a.map((function(e){return e.EnglishName+","+e.AdministrativeArea.EnglishName+","+e.Country.EnglishName})),keys:a.map((function(e){return e.Key}))}),this.state.isUserCity&&this.setState({locationKey:this.state.keys[0],isUserCity:!1})):alert("Please enter a valid name");case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getCurrentWeather",value:function(){var e=Object(c.a)(l.a.mark((function e(){var t,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://dataservice.accuweather.com/currentconditions/v1/".concat(this.state.locationKey,"?apikey=tYgqPzMGuVb2X0eBKTeMDLAODRNzpD8x&details=true"),{mode:"cors"});case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n=a[0],console.log(n),this.setState({temp:n.Temperature.Metric.Value,feelsTemp:n.RealFeelTemperature.Metric.Value,hasPrec:n.HasPrecipitation,isDay:n.IsDayTime,pressure:n.Pressure.Metric.Value,pressureTendency:n.PressureTendency.LocalizedText,uvIndex:n.UVIndex,visibility:n.Visibility.Metric.Value,weatherText:n.WeatherText,wind:n.Wind.Speed.Metric.Value,windDirection:n.Wind.Direction.Degrees,localTime:n.LocalObservationDateTime.slice(0,16).replace("T"," ")});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getHourlyWeather",value:function(){var e=Object(c.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/".concat(this.state.locationKey,"?apikey=tYgqPzMGuVb2X0eBKTeMDLAODRNzpD8x&details=true"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,console.log(a),0!==a.length&&this.setState({hourlyTime:a.map((function(e){var t=parseInt(e.DateTime.slice(11,13));return t<=12?t+"am":t-12+"pm"})),hourlyWindSpeed:a.map((function(e){return e.Wind.Speed.Value})),hourlyTemp:a.map((function(e){var t=parseInt(e.Temperature.Value);return Math.round(5*(t-32)/9)}))});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(e,t){this.state.locationKey!==t.locationKey&&(this.getCurrentWeather(),this.getHourlyWeather())}},{key:"setKey",value:function(e){document.getElementById("cities-list").style.display="none";var t=e.target.getAttribute("data-key");console.log(t);var a=this.state.keys[t];this.setState({locationKey:a})}},{key:"setCity",value:function(){var e=this;document.getElementById("cities-list").style.display="block",this.setState({userCity:document.getElementById("search-city").value,places:[]},(function(){e.getLocationKey()}))}},{key:"render",value:function(){var e=this.state.localTime.slice(11),t=parseInt(e.slice(0,2)),a=e.slice(3);e=t<=12?t+":"+a+" am":t-12+":"+a+" pm";var n=this.state.isDay?"https://livewire.org.au/wp-content/uploads/2019/01/sunny-day.jpg":"https://www.awarenessdays.com/wp-content/uploads/2018/07/astro.png";return document.body.style.backgroundImage="url(".concat(n,")"),s.a.createElement("div",null,s.a.createElement(b,{city:this.state.userCity,setKey:this.setKey,places:this.state.places,setCity:this.setCity}),s.a.createElement("div",{id:"main-container"},s.a.createElement("div",{id:"inner-container"},s.a.createElement("div",{id:"box1"},s.a.createElement("p",{id:"temp-value"},this.state.temp,s.a.createElement("sup",{style:{fontSize:"18px"}},"o"),"C"),s.a.createElement("p",{className:"other-info"},"feels like- ",s.a.createElement("span",{className:"val-color"},this.state.feelsTemp,s.a.createElement("sup",{style:{fontSize:"18px"}},"o"),"C")),s.a.createElement("span",{className:"other-info"},"Pressure- ",s.a.createElement("span",{className:"val-color"},this.state.pressure,"mb ")),"falling"===this.state.pressureTendency&&s.a.createElement("i",{className:"val-color fas fa-arrow-down"}),"rising"===this.state.pressureTendency&&s.a.createElement("i",{className:" val-color fas fa-arrow-up"}),s.a.createElement("p",{className:"other-info"},"UV Index- ",s.a.createElement("span",{className:"val-color"},this.state.uvIndex)),s.a.createElement("p",{className:"other-info"},"Visibilty- ",s.a.createElement("span",{className:"val-color"},this.state.visibility,"km")),s.a.createElement("p",{className:"other-info"},"Wind- ",s.a.createElement("span",{className:"val-color"},this.state.wind,"km/h at ",this.state.windDirection,s.a.createElement("sup",null,"o")))),s.a.createElement("div",{id:"box2"},s.a.createElement("p",{id:"weather-text"},this.state.weatherText),this.state.hasPrec&&this.state.isDay&&s.a.createElement("i",{className:"s fas fa-cloud-sun-rain"})||!this.state.hasPrec&&this.state.isDay&&("Cloudy"===this.state.weatherText||"Mostly cloudy"===this.state.weatherText)&&s.a.createElement("i",{className:"s fas fa-cloud-sun"})||this.state.hasPrec&&!this.state.isDay&&s.a.createElement("i",{className:"s fas fa-cloud-moon-rain"})||!this.state.hasPrec&&!this.state.isDay&&s.a.createElement("i",{className:"s fas fa-moon"})||!this.state.hasPrec&&this.state.isDay&&s.a.createElement("i",{className:"s fas fa-sun"})),s.a.createElement("div",{id:"box3"},s.a.createElement(f,{hTemp:this.state.hourlyTemp,hTime:this.state.hourlyTime})),s.a.createElement("div",{id:"box4"},s.a.createElement(v,{hTime:this.state.hourlyTime,hWindSpeed:this.state.hourlyWindSpeed}))),s.a.createElement("div",{id:"time-source"},s.a.createElement("p",{id:"observation-time"},"Observed at ",e),s.a.createElement("p",{id:"source-logo"},"Data taken from",s.a.createElement("img",{alt:"accuweather",src:"https://dl.dropbox.com/s/w1tn1chsknn04l9/AW_REGISTERED_Horiz_JPEG_Logo.jpg?dl=0"})))))}}]),a}(s.a.Component),T=function(){return s.a.createElement("div",null,s.a.createElement(E,null))};r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(T,null)),document.getElementById("root"))},46:function(e,t,a){e.exports=a(152)},51:function(e,t,a){}},[[46,1,2]]]);
//# sourceMappingURL=main.5296adb5.chunk.js.map