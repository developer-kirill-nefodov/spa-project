const initialState = ["text1", "text2", "text3", "summary", "nickname"]

export const uid = () => {
  function chr4() {
    return Math.random().toString(32).slice(-4);
  }

  return chr4() + chr4() +
    '-' + chr4() +
    '-' + chr4() +
    '-' + chr4() +
    '-' + chr4() + chr4() + chr4();
}

export const dataGeneration = (maxObj: number) => {
  const data = [];
  for (let idx = 0; idx <= maxObj; idx++) {
    const obj: any = {};
    for (let key of initialState) {
      obj[key] = generatorString();
    }
    data.push(createCustom(obj));
  }
  return data;
}

export const createCustom = (input: any) => {
  return {
    ...input,
    id: uid(),
    createdAt: `${Date.now()}`,
    updatedAt: `${Date.now()}`,
  }
}

export const generatorString = () => {
  let alphabet = 'QqWwEe RrTtYyUuIiOoPpAaSs DdFfGgHhJjKkLl ZzXxCcVv BbNnMm - 1234567890 !@#$%^&()=*+`~/\\.,<>?',
    word = '';
  for (let i = 0; i < Math.round(Math.random() * 30); i++) {
    word += alphabet[Math.round(Math.random() * (alphabet.length - 1))];
  }

  return word;
}
