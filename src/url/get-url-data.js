const zip = (kvPairs) =>
  kvPairs.reduce((acc, [k, v]) => Object.assign(acc, { [k]: v }), {});

const fragmentToPair = (fragment) => fragment.split('=');

const querystringToFragments = (querystring) => querystring.split('&');

const getQueryParams = (querystring) => {
  if (querystring.length === 0) return [];

  const queryPairs = querystringToFragments(querystring).map(fragmentToPair);
  return zip(queryPairs);
};

function getUrlPath(url) {
  const result = /^([^?]+)\??(.*)$/.exec(url);
  if (result === null) throw new Error(`Invalid url: ${url}`);
  return result.slice(1);
}

function getUrlData(url) {
  const rawUrl = url;
  const [path, querystring] = getUrlPath(url);
  const queryParams = getQueryParams(querystring);

  return { rawUrl, path, querystring, queryParams };
}

module.exports = getUrlData;
