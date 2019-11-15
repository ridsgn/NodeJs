const isString = data => {
  return typeof data != "string" ? false : true
}

export const into_array = (data1, data2) => {
  let result
  let arr
  let data_type = isString(data1)

  if (data_type == true) {
    arr = data1 + "," + data2
    result = arr.split(",")
  } else {
    result = "Not a String"
  }

  return result
}

export const into_array_post = (name, email) => {
  let result = { name, email }

  return result
}
