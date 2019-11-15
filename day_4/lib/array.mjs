const isString = data => {
  return typeof data != "string" ? false : true
}

export const into_array = (data1, data2) => {
  let result
  let arr
  let data_type1 = isString(data1)
  let data_type2 = isString(data2)

  if (data_type1 == true && data_type2 == true) {
    arr = data1 + "," + data2 // "gajahharimau"
    result = arr.split(",") // "gajah","harimau"
  } else {
    result = "Not a String"
  }

  return result
}

export const into_array_post = (name, email) => {
  let result = { name, email }

  return result
}
