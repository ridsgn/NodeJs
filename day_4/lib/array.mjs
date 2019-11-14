const isString = data => {
  return typeof data != "string" ? false : true
}

export const into_array = (data1, data2) => {
  let result
  let data_type = isString(data1)

  if (data_type == true) {
    result = data1 + "," + data2
  } else {
    result = "Not a String"
  }

  return result
}
