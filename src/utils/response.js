const response = (status, obj) => {
  return {
    statusCode: status,
    body: JSON.stringify(obj)
  }
}

module.exports = response
