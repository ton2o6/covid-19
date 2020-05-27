import React from "react";
import { Cards, Chart, CountryPicker, Footer } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import covidImg from "./images/covid-19.png";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({
      data: fetchedData,
      country: country,
    });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img src={covidImg} className={styles.image} alt="COVID-19"></img>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
        <Footer />
      </div>
    );
  }
}

export default App;
