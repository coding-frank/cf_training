import React, { useState } from "react";

const STANDARD_PARAMS = {
    entryID: null,
    content_type: null,
    limit: 100,
    skip: 0,
    order: null,
};

const [data, setData] = useState(null);
const [error, setError] = useState(null);
const [isLoading, setIsLoading] = useState(false);
const [isError, setIsError] = useState(false);

// const USE_PARAMS = {
//   ...STANDARD_PARAMS,
//   ...paramsObj,
// };

export const CmsContext = React.createContext({
    data,
    error,
    isLoading,
    isError,
});
