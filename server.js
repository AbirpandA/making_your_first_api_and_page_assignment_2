// Boilerplate Code for HTTP Status Code API
const express = require('express');
const app = express();

const statusCodes = {
  200: 'OK: The request has succeeded. The meaning of this status depends on the HTTP method used.',
  201: 'Created: The request has been fulfilled and resulted in a new resource being created.',
  204: 'No Content: The server successfully processed the request and is not returning any content.',
  400: 'Bad Request: The server cannot process the request due to client-side errors (e.g., malformed syntax).',
  401: 'Unauthorized: The request requires user authentication.',
  403: 'Forbidden: The server understood the request, but refuses to authorize it.',
  404: 'Not Found: The server has not found anything matching the request URI. This is often caused by a missing page or resource.',
  405: 'Method Not Allowed: The request method is not supported for the requested resource.',
  429: 'Too Many Requests: The user has sent too many requests in a given amount of time ("rate limiting").',
  500: 'Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request.',
  502: 'Bad Gateway: The server was acting as a gateway or proxy and received an invalid response from the upstream server.',
  503: 'Service Unavailable: The server is currently unable to handle the request due to temporary overloading or maintenance.',
  504: 'Gateway Timeout: The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.'
};


app.get("/status-code",(req,res)=>{
  const code = parseInt(req.query.code)

  res.json({status:code , message:statusCodes[code]})
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Status Code API is running on http://localhost:${PORT}`);
});
