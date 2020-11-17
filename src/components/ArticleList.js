import React from "react";

const ArticleItem = props => {
  const { article } = props;
  return (

		<div className="col col-xs-12 col-sm-6 col-md-6 col-lg-4">
			<div className="card-container">
				<div className="card-image">
					<img className="img responsive" src={article.urlToImage} alt={article.urlToImage} /> 
				</div>
				<div className="card-title">
					{article.title}
				</div>
				<div className="card-description">
					{article.description}
				</div>
				<div className="card-footer">
					<div className="card-publication">
						<a href={article.url}>{article.source.name}</a>
					</div>
					<div className="card-date">
						{article.publishedAt.split("T")[0]}
					</div>
				</div>
			</div>
		</div>
  );
};

const ArticleList = props => {
	return (
		<div className="row">
			<div className="section">
				{props.articles.map((article, index) => (
		        	<ArticleItem article={article} key={article.title + index} />
		      	))}
			</div>
		</div>
	);
};

export default ArticleList;