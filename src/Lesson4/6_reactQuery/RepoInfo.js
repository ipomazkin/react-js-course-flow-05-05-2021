import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useQuery } from "react-query";

import { Form } from "./Form";
import { useLogger } from "../../utils/logger";
import * as RepoAPI from './RepoAPI';


export function RepoInfo() {
  const log = useLogger("RepoInfo", { level: 2, color: 'blue' });
  log("render started");

  const [params, setParams] = useState(null);

  const handleSubmit = ({ login, repo }) => {
    setParams({
      login,
      repo,
    });
  };

  const { isFetching, data: axiosResult, isError, error } = useQuery(['repoInfo', params], ({ queryKey }) => {
    let [_, params] = queryKey;
    return RepoAPI.getRepoInfo(params.login, params.repo);
  }, {
    enabled: params !== null,
  });

  let data = axiosResult?.data;

  return (
    <div style={{ padding: "10px", margin: "10px" }} className="repo-info">
      <div className="repo-info__form">
        <Form handleSubmit={handleSubmit} />
      </div>
      {params !== null && (
        <div>
          {isFetching ? (
            "Loading..."
          ) : isError ? (
            <div>{error.message}</div>
          ) : (
            <div>
              <h1>{data.name}</h1>
              <p>{data.description}</p>
              <div>Repo <a href={data.html_url}>link</a></div>
              <strong>👀 {data.subscribers_count}</strong>{' '}
              <strong>✨ {data.stargazers_count}</strong>{' '}
              <strong>🍴 {data.forks_count}</strong>
              <div>
                <h4>Author: {data.owner.login}</h4>
                <img src={data.owner.avatar_url} alt=""/>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

RepoInfo.propTypes = {};
