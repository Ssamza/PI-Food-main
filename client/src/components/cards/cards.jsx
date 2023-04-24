import Card from "../card/card";
import style from "./cards.module.css";

function Cards({ allRecipes }) {
  return (
    <div className={style.lastElement}>
      <div className={style.container}>
        {allRecipes?.map((recipe) => {
          return <Card recipe={recipe} />;
        })}
      </div>
    </div>
  );
}

export default Cards;
