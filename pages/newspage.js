const NewsPage = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <img src={props.image} />
      <h5>{props.article}</h5>
    </div>
  );
};

export default NewsPage;
