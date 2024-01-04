// action for login of the user
import axios from "axios";

export async function userSignup(info) {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/v1/auth/register",
      info
    );
    // console.log(response.data);
    if (response) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
}

export async function userLogin(info) {
  //login function to be added
  // if success returns true
  console.log(info);
  const response = await axios.post(
    "http://localhost:8080/api/v1/auth/login",
    info
  );
  console.log(response);
  if (response) {
    return true;
  }
}

export async function getQuestion(collegeId) {
  try {
    // correct the api
    // check that the return format is correct

    const response = await axios.get(
      "http://localhost:8080/api/v1/get-all-question-college",
      collegeId
    );

    return { questions: response.data.questions };
  } catch (error) {
    throw new Error(error);
  }
}

export async function upvoteQuestion(questionId) {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/v1/upvote-question",
      questionId
    );

    return response.data.updatedQuestion;
  } catch (error) {
    throw new Error(error);
  }
}

export async function downVoteQuestion(questionId) {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/v1/downvote-question",
      questionId
    );
    return response.data.updatedQuestion;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getResponses(quesitonId) {
  try {
    // const response = await axios
  } catch (e) {}
}
