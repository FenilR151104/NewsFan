import React, { Component } from "react";

const NewsItem = (props) => {
// export class NewsItem extends Component {
  // render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      props;
      // this.props is used in class based component to access the props but in functional component we can directly use the props as above
    return (
      <div className="my-3">
        <div className="card">
          <div
            style={{
              diaplay: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
          >
            <span className="badge rounded-pill bg-danger">{source}</span>
          </div>
          <img
            src={
              !imageUrl
                ? "https://img.freepik.com/free-vector/global-news-update-illustration_1308-180215.jpg?t=st=1745610248~exp=1745613848~hmac=a8588a39cd8f9f2e0089a37ff4cf27d6f0b5a4056e379d2405fa41a669a3b634&w=996"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          {/* the above img link is used as photo when the news dosen't have any img then it is used as default image. */}
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            {/* {title}... and {description}... is used to show some title and description with dotted */}
            <p className="card-text">
              <small className="text-body-secondary">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More...
            </a>
            {/* target = "_blank"  is used to open new tab*/}
          </div>
        </div>
      </div>
    );
  // }
// }
}

export default NewsItem;
