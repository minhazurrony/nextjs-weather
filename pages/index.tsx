import {
  faCloud,
  faCloudRain,
  faSun,
  faTemperatureHigh,
  faTint,
  faWind,
} from '@fortawesome/free-solid-svg-icons';
import { Card, Col, Layout, Row } from 'antd';
import '../styles/home.less';
import WeatherDetails from './components/WeatherDetails';

const { Header, Content, Footer } = Layout;

const Home = () => {
  return (
    <Layout>
      <Header className="header">
        <h1>Weather</h1>
      </Header>
      <Content className="content">
        <Row gutter={[24, 24]}>
          <Col
            xs={{ span: 24 }}
            md={{ span: 18, offset: 3 }}
            lg={{ span: 12, offset: 6 }}
          >
            <Card
              title="Jessore, Khulna, Bangladesh Weather"
              bordered={false}
              hoverable={true}
              extra={<p>Updated at 7:30 PM</p>}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div>
                  <WeatherDetails
                    title="Wind"
                    iconName={faWind}
                    value={{ valueOne: 'NNW', valueTwo: '8 km/h' }}
                  />

                  <WeatherDetails
                    title="Humidity"
                    iconName={faTint}
                    value={{ valueOne: '40%' }}
                  />
                  <WeatherDetails
                    title="Precipitation"
                    iconName={faCloudRain}
                    value={{ valueOne: '0.0 mm/h' }}
                  />
                </div>
                <div className="current-temperature">
                  <img
                    src="http://cdn.weatherapi.com/weather/64x64/day/116.png"
                    alt="weather"
                  />
                  <h1>24 &deg;</h1>
                  <p>Partly Cloudy</p>
                </div>
                <div>
                  <WeatherDetails
                    title="UV"
                    iconName={faSun}
                    value={{ valueOne: '7.0' }}
                  />
                  <WeatherDetails
                    title="Cloud"
                    iconName={faCloud}
                    value={{ valueOne: '4' }}
                  />
                  <WeatherDetails
                    title="Feels Like"
                    iconName={faTemperatureHigh}
                    value={{ valueOne: '25.9' }}
                  />
                </div>
              </div>
            </Card>
          </Col>
        </Row>

        <Row gutter={[16, 16]} justify="center">
          <Col xs={{ span: 12 }} md={{ span: 8 }} lg={{ span: 3 }}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col xs={{ span: 12 }} md={{ span: 8 }} lg={{ span: 3 }}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col xs={{ span: 12 }} md={{ span: 8 }} lg={{ span: 3 }}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col xs={{ span: 12 }} md={{ span: 8 }} lg={{ span: 3 }}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col xs={{ span: 12 }} md={{ span: 8 }} lg={{ span: 3 }}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col xs={{ span: 12 }} md={{ span: 8 }} lg={{ span: 3 }}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col xs={{ span: 12 }} md={{ span: 8 }} lg={{ span: 3 }}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
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
