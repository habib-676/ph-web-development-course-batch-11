import SearchForMeal from "./componets/SearchForMeal";

const Meals = () => {
  const fetchMeal = async (search) => {
    try {
      const res = fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const data = await res.json();
      setMeals(data.meals);
      return data.meals;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  return (
    <div >
      <SearchForMeal />
    </div>
  );
};

export default Meals;
