// 处理数据格式文件

// 把多个导演和演员的名字转换为字符串
export const convertToCastString = (casts, splitChar) => {
  let castsjoin = "";
  casts.forEach((item)=>{
    castsjoin = castsjoin + item. name + splitChar;
  })
  return castsjoin.substring(0, castsjoin.length-2)
}
