import React, {Component} from 'react';
import './card-temperature.scss';

export default class CardTemperature extends Component {
  constructor(props){
    super(props);

    this.state = {
      title: props.title,
      temperature: props.temperature,
      humidity: props.humidity,
      pressure: props.pressure,
      updatedAt: props.updatedAt,
      retryCallback: props.retryCallback
    };
  }

  render() {
    //Abaixo de 5 azul, de 6 a 25 laranja e acima de 25 vermelho
    let temperatureColor = this.state.temperature<=5?"blue":this.state.temperature<=25?"orange":"red";

    return (
      <card-temperature>
        <div className="title">
          {this.state.title}
        </div>
        {this.state.retryCallback!==undefined?(
          //Error Information
          <div className="error">
            <div className="error-detail">
              <div className="message">
                Something went wrong
              </div>
              <button className="button" onClick={this.state.retryCallback}>
                Try Again
              </button>
            </div>
          </div>
        ):this.state.temperature===undefined?(
          //Loading Information
          <div className="loading">
            <img src="/img/loading.svg" alt="loading..." />
          </div>
        ):(//Content Information
          <div className="content">
            <div className={"temperature "+temperatureColor}>
              {this.state.temperature}°
            </div>
            <div className="info">
              <div className="info-extra">
                {this.state.humidity!==undefined?(
                  <div className="info-extra-content">
                      <div className="info-extra-title">
                        HUMIDITY
                      </div>
                      <div className="info-extra-data">
                        <span className="info-extra-value">{this.state.humidity}</span>%
                      </div>
                  </div>
                ):("")}
                {this.state.pressure!==undefined?(
                  <div className="info-extra-content">
                    <div className="info-extra-title">
                      PRESSURE
                    </div>
                    <div className="info-extra-data">
                      <span className="info-extra-value">{this.state.pressure}</span>hPa
                    </div>
                  </div>
                ):("")}
              </div>
              <div className="updated">
                Updated at {this.state.updatedAt.format('hh:mm:ss A')}
              </div>
            </div>
          </div>)}
      </card-temperature>
    );
  }

}
