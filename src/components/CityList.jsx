import CityItem from "./CityItem";
import styles from "./CityList.module.css";

function CityList({ cities }) {
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
