const jobsReducer = (state = [], action) => {

  console.log(action);

  switch (action.type) {
    case "CREATE_JOB":
      break;
    case "READ_JOB":
      break;
    case "UPDATE_JOB":
      break;
    case "DELETE_JOB":
      break;
    default:
        return state;
  }
}

export default jobsReducer;
