React Hooks :-
==============
      1. useState   -> State management
      2. useEffect  -> React Life cycle function
      3. useReducer -> State management reduce complex logic.
      4. useContext -> Global Statement Magement.
      5. useRef     -> Element Reference.
      6. useCallback -> Prevent callback 
      7. useMemo     -> Memoization issue.


      Router:
            1. useParam -> to get Url paramater
            2. useNavigate -> to navigate page
            3. useLocation 


      Redux
            1. useDispatch
            2. useSelector




useReducer 
==========


           => useReducer is a React Hook used for state management when:

           =>  Your state logic is complex

           => Updating state depends on the previous state

           => You want a Redux-like reducer pattern (action → reducer → new state)

           =>  It’s an alternative to useState.




Syntax
======

      const [state, dispatch] = useReducer(reducerfn, initialState);


            state – the current state value

            dispatch(action) – sends an action to the reducerfn

            reducerfn(state, action) – a function that returns the new state

            initialState – the starting state



Example
=======
