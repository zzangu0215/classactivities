import React from "react";
import { Link } from "react-router-dom";
// TODO: Add code to import necessary component for creating internal hyperlinks

const ThoughtList = ({ thoughts, title }) => {
  if (!thoughts.length) {
    return <h3>No Thoughts Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {thoughts &&
        thoughts.map((thought) => (
          <div key={thought._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {thought.thoughtAuthor} <br />
              <span style={{ fontSize: "1rem" }}>
                had this thought on {thought.createdAt}
              </span>
            </h4>
            <div className="card-body bg-light p-2">
              <p>{thought.thoughtText}</p>
            </div>
            {/* TODO: Add code to create a link to this thought's single
            thought page at `/thoughts/<id>`. Give the link a class of
            "btn btn-primary btn-block btn-squared". The displayed text should be "Join the discussion" */}
            <Link
              className="btn btn-block btn-squared btn-light text-dark"
              to={`/thoughts/${thought._id}`}
            >
              Join the discussion
            </Link>
          </div>
        ))}
    </div>
  );
};

export default ThoughtList;
