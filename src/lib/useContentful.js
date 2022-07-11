import { useState, useEffect, useCallback } from "react";
import { client } from "./client.js";

const STANDARD_PARAMS = {
  entryID: null,
  content_type: null,
  limit: 100,
  skip: 0,
  order: null,
};

function useContentful(paramsObj) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const USE_PARAMS = {
    ...STANDARD_PARAMS,
    ...paramsObj,
  };

  const getFromContentful = useCallback(async () => {
    setIsLoading(true);
    setIsError(false);

    let response;

    try {
      // validate content type
      if (USE_PARAMS.content_type === null) {
        throw "missing value for content_type";
      }

      // get all entries
      if (!USE_PARAMS.entryID) {
        response = await client.getEntries({
          content_type: USE_PARAMS.content_type,
          skip: USE_PARAMS.skip,
          limit: USE_PARAMS.limit,
          order: USE_PARAMS.order,
        });
      }
      // get single entry
      else {
        response = await client.getEntry(USE_PARAMS.entryID);
      }

      if (response) {
        const responseItems = response?.items || null;

        if (!Array(responseItems)) {
          throw "expected response to be an array";
        }

        // output data in development mode
        if (process.env.NODE_ENV === "development" && responseItems)
          console.log({ responseItems });

        setData(responseItems);
      } else {
        setData([]);
      }
      setIsLoading(false);
    } catch (err) {
      // output error in development mode
      if (process.env.NODE_ENV === "development") console.error(err);

      setError(err);
      setData([]);
      setIsLoading(false);
      setIsError(true);
    }
  }, [USE_PARAMS]);

  useEffect(() => {
    getFromContentful();
  }, []);

  return [isLoading, isError, data, error];
}

export { useContentful };
