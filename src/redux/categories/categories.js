const STATUS = 'book-store/categories/STATUS';

const initialState = {
  categoreis: [],
  status: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case STATUS:
      return {
        ...state,
        status: 'Under construction',
      };
    default:
      return state;
  }
}

export function checkStatus() {
  return {
    type: STATUS,
  };
}
