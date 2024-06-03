import React from 'react';


function useLocalStorage(itemName, initialValue) {



  const [state, dispatch] = React.useReducer(reducer, initialState({ initialValue }));

  const {
    item,
    loading,
    error,
    sincronizedItem
  } = state;

  const onError = (error) => dispatch({ type: actionTypes.error, payload: error })
  const onSuccess = (item) => dispatch({ type: actionTypes.success, payload: item })
  const onSave = (item) => dispatch({ type: actionTypes.save, payload: item })
  const onSincronize = () => dispatch({ type: actionTypes.sincronize })


  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          //setItem(parsedItem);
          //onSave(parsedItem)

        }

        onSuccess(parsedItem)
        // setLoading(false);
        // setSincronizedItem(true);

      }
      catch (error) {
        onError(error)
        //setLoading(false);
        //setError(true);
      }
    }, 3000);
  }, [sincronizedItem]);




  const saveItem = (newItem) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      // setItem(newItem);
      onSave(newItem)
    } catch (error) {
      onError(error)
    }

  };

  const sincronizeItem = () => {
   onSincronize();
  }

  return {
    item,
    saveItem,
    loading,
    error,
    sincronizeItem
  };
}


const initialState = ({ initialValue }) => ({
  item: initialValue,
  loading: true,
  error: false,
  sincronizedItem: true,
});

const actionTypes = {
  error: 'ERROR',
  success: 'SUCCESS',
  save: 'SAVE', 
  sincronize: 'SINCRONIZE', 
}

const reducerObject = (state, payload) => ({
  [actionTypes.error]: {
    ...state,
    error: true,
    loading:false, 
  },
  [actionTypes.success]: {
    ...state,
    error: false,
    loading: false,
    sincronizedItem: true,
    item: payload
  },
  [actionTypes.sincronize]: {
    ...state,
    loading: true,
    sincronizedItem: false,
  },
  [actionTypes.save]: {
    ...state,
    item: payload
  },
});

const reducer = (state, action) => {
  return  reducerObject(state, action.payload)[action.type] || state;
}
// localStorage.removeItem('TODOS_V1')
// const defaultTodos = [
//   {text: 'Cortar cebolla', completed: true},
//   {text: 'Tomar el curso de Intro a React.js', completed: true}, 
//   {text: 'LLorar con la llorona', completed: false}, 
//   {text: 'Estar con mi amorcito', completed: false},
//   {text: 'Salir con mi amorcito', completed: true},
// ];


// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))

export { useLocalStorage }
