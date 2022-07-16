// 处理数据格式文件

// 把多个导演和演员的名字转换为字符串
export const convertToCastString = (casts, splitChar) => {
  // console.log(casts);
  let castsjoin = "";
  casts.forEach((item)=>{
    castsjoin = castsjoin + item. name + splitChar;
  })
  return castsjoin.substring(0, castsjoin.length-2)
}

// 演员的图片和名字进行处理
export const convertToCastInfos = (casts) => {
  let castsArray = [];
  casts.forEach((item) => {
    const cast = {
      image: item.avatars.large ? item.avatars.large : "",
      name: item.name
    }
    castsArray.push(cast);
  })
  return castsArray;
}