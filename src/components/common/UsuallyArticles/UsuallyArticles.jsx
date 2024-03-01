import { dataForArticles } from "./../../../data/dataForArticles";

const UsuallyArticles = () => {
  return (
    <div className="grid grid-cols-4 gap-10 m-6  ">
      {dataForArticles.map((articles, index) => (
        <a href={articles.link} target="_blank" key={index}>
          <img src={articles.image} alt="" width={256} height={198} />
          <p className="font-nunito-sans mt-3 font-bold">
            {articles.description}
          </p>
        </a>
      ))}
    </div>
  );
};

export default UsuallyArticles;
