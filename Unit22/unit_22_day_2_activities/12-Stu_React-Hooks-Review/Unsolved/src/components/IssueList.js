import React from "react";
import IssueItem from "../components/IssueItem";

// Here we accept an array of issues as a prop
const IssueList = ({ issues }) => {
  console.log("IssueList -> issues", issues);

  // Here we return our array of IssueItems wrapped inside a parent div
  return (
    <div className="ui relaxed divided list">
      {issues.map((issue) => {
        return <IssueItem key={issue.id} issue={issue} />;
      })}
    </div>
  );
};

export default IssueList;
