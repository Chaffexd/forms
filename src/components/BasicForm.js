import useInput from '../hooks/use-input';

const BasicForm = (props) => {
  const { 
    value: enteredName,
    hasError: nameInputError,
    isValid: enteredNameIsValid,
    valueChangedHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput 
  } = useInput((value) => value.trim() !== "");

  const { 
    value: enteredLastName,
    hasError: lastNameInputError,
    isValid: enteredLastNameIsValid,
    valueChangedHandler: lastNameChangedHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput 
  } = useInput((value) => value.trim() !== "");

  const { 
    value: enteredEmail,
    hasError: emailInputError,
    isValid: enteredEmailIsValid,
    valueChangedHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput 
  } = useInput((value) => value.includes("@"));


  let formIsValid = false;

  if(enteredNameIsValid && enteredEmailIsValid && enteredLastNameIsValid) {
    formIsValid = true;
  }

  const formSubmissionHanlder = (event) => {
    event.preventDefault();

    if(!enteredNameIsValid && !enteredEmailIsValid && !enteredLastNameIsValid) {
      return;
    }

    console.log(enteredName);
    console.log(enteredLastName);
    console.log(enteredEmail);

    resetNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputError ? 'form-control invalid' : 'form-control';
  const lastNameInputClasses = lastNameInputError ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHanlder}>
      <div className='control-group'>
        <div className={nameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input 
            type='text' 
            id='name' 
            value={enteredName} 
            onChange={nameChangedHandler}
            onBlur={nameBlurHandler}
          />
          {nameInputError && <p className="error-text">Name must not be empty.</p>}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input 
            type='text' 
            id='name' 
            value={enteredLastName}
            onChange={lastNameChangedHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameInputError && <p className="error-text">Last name must not be empty.</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input 
          type='text' 
          id='name' 
          value={enteredEmail}
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
        />
        {emailInputError && <p className="error-text">Email must not be empty.</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
