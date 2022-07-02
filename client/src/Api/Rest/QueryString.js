let queryString = function (params, prefix) {
  const query = Object.keys(params).map((key) => {
    const value = params[key];

    if (params.constructor === Array) key = `${prefix}`;
    else if (params.constructor === Object)
      key = prefix ? `${prefix}[${key}]` : key;

    if (typeof value === "object") return queryString(value, key);
    else return `${key}=${encodeURIComponent(value)}`;
  });

  return [].concat.apply([], query).join("&");
};

export default queryString;
