import React from 'react';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import { configureStore, combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import App from '../App';
// Create a Redux store with Toastr reducer
const rootReducer = combineReducers({
  toastr: toastrReducer,
});

const store = configureStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <div>
        {/* Your other components */}
        <App/>
        {/* Add ReduxToastr component */}
        <ReduxToastr
          timeOut={4000}
          newestOnTop={false}
          preventDuplicates
          position="top-right"
          transitionIn="fadeIn"
          transitionOut="fadeOut"
          progressBar
          closeOnToastrClick
        />
      </div>
    </Provider>
  );
}

export default App;
