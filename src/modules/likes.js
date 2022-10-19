const addLike = async (ele) => {
  const num = ele.nextSibling.nextSibling.textContent[0];
  ele.nextSibling.nextSibling.textContent = ''.concat(+num + 1, ' likes');
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/mxaGcXNlcZdj65Ijfypb/likes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    'item_id': ele.id
}),
  })
}

const promise = async () => {
  const re = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/mxaGcXNlcZdj65Ijfypb/likes', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
  },
  })
  const ss = await re.json();
  return ss;
}
const like = await promise();

const getLikesCount = (id) => {
  const val = like.find((o) => o.item_id === id)
  return val === undefined ? 0 : val['likes'];
}

export {getLikesCount, addLike};