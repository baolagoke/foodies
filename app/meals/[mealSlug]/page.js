//localalhost: 3000/meals/something
import classses from "./page.module.css";
import { getMeal } from "@/lib/meals";
import Image from "next/image";
import { notFound } from "next/navigation";

const MealDetailsPage = ({ params }) => {
  const meal = getMeal(params.mealSlug);

  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, "<br/>");

  return (
    <>
      <header className={classses.header}>
        <div className={classses.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classses.headText}>
          <h1>{meal.title}</h1>
          <p className={classses.creator}>
            by <a href={`mailto: ${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classses.summary}> {meal.summary}</p>
        </div>
      </header>

      <main>
        <p
          className={classses.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
};

export default MealDetailsPage;
