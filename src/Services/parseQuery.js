import queryString from 'query-string';

export default function getParseQuery(locationSearch) {
  console.log(queryString.parse(locationSearch));
  return queryString.parse(locationSearch);
}
