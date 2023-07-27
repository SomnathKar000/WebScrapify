import React from "react";

const Results = (props: { results: string[] }) => {
  const { results } = props;
  return <div>Results{results}</div>;
};

export default Results;
