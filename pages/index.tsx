import {
  faCloud,
  faCloudRain,
  faSun,
  faTemperatureHigh,
  faTint,
  faWind,
} from '@fortawesome/free-solid-svg-icons';
import { Card, Col, Layout, Row } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import '../styles/home.less';
import WeatherDetails from './components/WeatherDetails';

const { Header, Content, Footer } = Layout;

const apiEndpoint =
  'http://api.weatherapi.com/v1/forecast.json?key=878ea06c1f9245bcbe974601201512&q=Dhaka&days=7';

const Home = () => {
  const [weatherData, setWeatherData] = useState({
    location: { name: '' },
    current: {
      wind_kph: '',
      wind_dir: '',
      humidity: '',
      precip_mm: '',
      uv: '',
      cloud: '',
      feelslike_c: '',
      temp_c: '',
      condition: { text: '', icon: '' },
    },
    forecast: {
      forecastday: [],
    },
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await axios.get(apiEndpoint).then((res) => setWeatherData(res.data));
      setLoading(false);
    };

    fetchData();
  }, []);

  let newImage = weatherData.current.condition.icon.replace(/^/, 'http:');

  return (
    <Layout>
      <Header className="header">
        <h1>Weather</h1>
      </Header>
      <Content className="content">
        <Row gutter={[24, 24]}>
          <Col xs={{ span: 24 }} lg={{ span: 12, offset: 6 }}>
            <Card
              loading={loading}
              title={weatherData.location.name}
              bordered={false}
              hoverable={true}
            >
              <div className="weather-details-container">
                <div>
                  <WeatherDetails
                    title="Wind"
                    iconName={faWind}
                    value={{
                      valueOne: `${weatherData.current.wind_dir}`,

                      valueTwo: `${weatherData.current.wind_kph} km/h`,
                    }}
                  />

                  <WeatherDetails
                    title="Humidity"
                    iconName={faTint}
                    value={{ valueOne: `${weatherData.current.humidity}%` }}
                  />
                  <WeatherDetails
                    title="Precipitation"
                    iconName={faCloudRain}
                    value={{
                      valueOne: `${weatherData.current.precip_mm} mm/h`,
                    }}
                  />
                </div>
                <div className="current-temperature">
                  <img src={newImage} alt="weather-icon" />
                  <h1>{weatherData.current.temp_c}&deg;</h1>
                  <p>{weatherData.current.condition.text}</p>
                </div>
                <div>
                  <WeatherDetails
                    title="UV"
                    iconName={faSun}
                    value={{ valueOne: `${weatherData.current.uv}` }}
                  />
                  <WeatherDetails
                    title="Cloud"
                    iconName={faCloud}
                    value={{ valueOne: `${weatherData.current.cloud}` }}
                  />
                  <WeatherDetails
                    title="Feels Like"
                    iconName={faTemperatureHigh}
                    value={{
                      valueOne: `${weatherData.current.feelslike_c}`,
                    }}
                  />
                </div>
              </div>
            </Card>
          </Col>
        </Row>

        <Row gutter={[16, 16]} justify="center">
          {weatherData.forecast.forecastday.map((item) => {
            let forecastImage = item.day.condition.icon.replace(/^/, 'http:');
            return (
              <Col xs={{ span: 24 }} lg={{ span: 8 }} key={item.date}>
                <Card
                  loading={loading}
                  title={item.date}
                  bordered={false}
                  headStyle={{ textAlign: 'center' }}
                  hoverable={true}
                >
                  <div className="weather-details-container">
                    <div>
                      <WeatherDetails
                        title="Wind"
                        iconName={faWind}
                        value={{
                          valueOne: `${item.day.maxwind_kph} km/h`,
                        }}
                      />

                      <WeatherDetails
                        title="Humidity"
                        iconName={faTint}
                        value={{ valueOne: `${item.day.avghumidity}%` }}
                      />
                      <WeatherDetails
                        title="Precipitation"
                        iconName={faCloudRain}
                        value={{
                          valueOne: `${item.day.totalprecip_mm} mm/h`,
                        }}
                      />
                    </div>
                    <div className="current-temperature">
                      <img src={forecastImage} alt="weather-icon" />
                      <h1>{item.day.avgtemp_c}&deg;</h1>
                      <p>{item.day.condition.text}</p>
                    </div>
                    <div>
                      <WeatherDetails
                        title="UV"
                        iconName={faSun}
                        value={{ valueOne: `${item.day.uv}` }}
                      />
                      <WeatherDetails
                        title="Sun Rise"
                        iconName={faCloud}
                        value={{ valueOne: `${item.astro.sunrise}` }}
                      />
                      <WeatherDetails
                        title="Sun Set"
                        iconName={faTemperatureHigh}
                        value={{
                          valueOne: `${item.astro.sunset}`,
                        }}
                      />
                    </div>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Content>
      <Footer className="footer">
        Powered by{' '}
        <a href="https://www.weatherapi.com/" title="Free Weather API">
          WeatherAPI.com
        </a>
      </Footer>
    </Layout>
  );
};

export default Home;
