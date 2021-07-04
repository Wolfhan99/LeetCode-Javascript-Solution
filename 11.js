function mutation(arr) {
  const arrString1 = [...new Set(arr[0].split('').sort())]
  const arrString2 = [...new Set(arr[1].split('').sort())]
  return arrString1.join("") === arrString2.join("")
  
}

mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])
