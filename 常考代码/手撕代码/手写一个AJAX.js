const SERVER_URL = '/server'

let xhr = new XMLHttpRequest()

// 创建 Http 请求 第三个参数为async，指定请求是否为异步方式，默认为 true。
xhr.open('GET', SERVER_URL, true)

// 设置请求头信息
xhr.responseType = 'json'
xhr.setRequestHeader('Accept', 'application/json')

// 设置状态监听函数
xhr.onreadystatechange = function () {
  if (this.readyState !== 4) return

  // 当请求成功时
  if (this.status === 200) {
    handle(this.responseText)
  } else {
    console.error(this.statusText)
  }
}

// 设置请求失败时的监听函数
xhr.onerror = function () {
  console.error(this.statusText)
}

// 发送 Http 请求
xhr.send(null)
