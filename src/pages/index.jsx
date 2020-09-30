import React from 'react';
import Head from 'next/head';
import { withRouter } from 'next/router';
import './main.css';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import DeleteIcon from '@material-ui/icons/Delete';
import HomeIcon from '@material-ui/icons/Home';
import { getTimeZone, getIP, getCities, getCities2 } from '../services/';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ip: "",
      timezone: [],
      hour: 0,
      time: "",
      timeMod: "",
      abbreviation: "",
      day: "",
      month: "",
      dayNo: "",
      cities: [],
      country: {},
      mousePosition: 15
    };
    this.gett = this.gett.bind(this);
    this.updateMousePosition = this.updateMousePosition.bind(this);
  }

  componentDidMount() {
    getCities()
      .then(({ data }) => {
        console.log(data);
        let oi = {};
        let cit = {};
        let xx = {};
        let vf = [];
        xx = Object.assign({}, Object.keys(data));
        cit = Object.values(data);
        oi = Object.keys(data);
        for(let value in cit){
          if(cit[value].find(this.gett) !== undefined){
            console.log(oi[value]);
          }
        }
        let ss= data["Mexico"];
        ss.find(this.gett);
        //console.log(ss.find(this.gett));
        console.log(vf);
        this.setState({country: oi});
      });
    let { timezone, mousePosition } = this.state;
    let time, timeMod, day, month, dayNo, hour = "", mouseP;
    let zone = [];
    getTimeZone()
      .then(({ data }) => {
        zone = data.timezone.split("/");
        time = data.datetime.substring(11, 16);
        hour = data.datetime.substring(12, 13);
        (hour > 1) ? mouseP = mousePosition+(hour*50) : mouseP = 15;
        (time.substring(0,2) > 12) ? timeMod = "pm" : timeMod = "am";
        dayNo = data.datetime.substring(8,10);
        switch(data.day_of_week){
          case 0:
            day = "Sun";
            break;
          case 1:
            day = "Mon";
            break;
          case 2:
            day = "Tue";
            break;
          case 3:
            day = "Wed";
            break;
          case 4:
            day = "Thu";
            break;
          case 5:
            day = "Fri";
            break;
          case 6:
            day = "Sat";
            break;
        }
        switch(data.datetime.substring(5,7)){
          case "01":
            month = "Jan";
            break;
          case "02":
            month = "Feb";
            break;
          case "03":
            month = "Mar";
            break;
          case "04":
            month = "Apr";
            break;
          case "05":
            month = "May";
            break;
          case "06":
            month = "Jun";
            break;
          case "07":
            month = "Jul";
            break;
          case "08":
            month = "Aug";
            break;
          case "09":
            month = "Sep";
            break;
          case "10":
            month = "Oct";
            break;
          case "11":
            month = "Nov";
            break;
          case "12":
            month = "Dec";
            break;
        }
        this.setState({timezone: zone, time, timeMod, abbreviation: data.abbreviation, day, month, dayNo, hour, mousePosition: mouseP });
      });
  }

  gett = (key) => {
    return key == "Xalapa";
  };

  updateMousePosition = (ev) => {
    let left = ev.target.offsetLeft;
    ( left < 15) ? left = 15 : left = ev.target.offsetLeft;
    this.setState({mousePosition: left});
  };

  render() {
    let { timezone, time, timeMod, abbreviation, day, month, dayNo, cities, country, mousePosition, hour } = this.state;

    let hoursAM = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    let hoursPM = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];

    const handleClick = () => {
      console.log(ip, timezone);
    };

    return (
      <React.Fragment>
        <Head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />
          <link href="https://fonts.googleapis.com/css?family=Maven+Pro:400,600&display=swap" rel="stylesheet"></link>
          <meta charset="utf-8"></meta>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
        </Head>
        <body className="">
          <div className="container-fluid p-0">
            <div className="container pt-12">
              <h1 className="text-center white-text">Worldtime Lite</h1>
              <div className="col-12 main-box">
                <div className="row">
                  <div className="col-4">
                    <div className="form-group">
                      <input type="text" className="form-control custom-textfield" id="timezone" placeholder="Find place or timezone - Press >"/>
                      {/*<Autocomplete
                        id="combo-box-demo"
                        options={country}
                        getOptionLabel={(option) => option}
                        style={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
                      />*/}
                    </div>
                  </div>
                  <div className="col-12 mt-4">
                    <div className="row">
                      <div className="col-auto">
                        <DeleteIcon className="box-icon white-bg-icon"/>
                        <HomeIcon className="box-icon"/>
                      </div>
                      <div className="col-3">
                        <div className="row">
                          <div className="col-6">
                            <p className="text-bold m-0">{timezone[1]}</p>
                            <p className="text-small">{timezone[0]}</p>
                          </div>
                          <div className="col-6">
                            <p className="text-bold m-0">{time + timeMod + " " + abbreviation}</p>
                            <p className="text-small">{`${day}, ${month} ${dayNo}`}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="container-timezone" onMouseMove={this.updateMousePosition.bind(this)}>
                          <div className="box-timezone">
                            <span className="text-time-mod mt-2">{month}</span>
                            <span className="text-time-mod">{dayNo}</span>
                          </div>
                          {hoursAM.map(function (object, i) {
                            return <div key={i} className="box-timezone">
                              <span className="text-time">{object}</span>
                              <span className="text-time-mod">am</span>
                            </div>
                          })}
                          {hoursPM.map(function (object, i) {
                            return <div key={i} className="box-timezone">
                              <span className="text-time">{object}</span>
                              <span className="text-time-mod">am</span>
                            </div>
                          })}
                          <div className="box-hover" style={{left: mousePosition}} ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
        </body>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
