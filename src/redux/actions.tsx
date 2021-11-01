export const GET_RESULT = 'GET_RESULT';

export const getResult = (text: string) => {
  try {
    return async (dispatch: (arg0: {type: string; payload: any}) => void) => {
      if (text.length > 0) {
        const response = await fetch(
          `https://api.github.com/search/users?q=${text}+language:assembly&sort=stars&order=desc&page=1&per_page=5`,
          {
            method: 'GET',
            headers: {Accept: 'application/vnd.github.v3+json'},
          },
        );
        if (response.status === 200) {
          const result = await response.json();
          const newData = result.items;
          dispatch({
            type: GET_RESULT,
            payload: newData,
          });
        } else {
          console.log('response error ', response.status);
        }
      }
    };
  } catch (error) {
    console.log(error);
  }
};
