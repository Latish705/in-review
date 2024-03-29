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
    const id = "6596df24d9194c31336a784a";
    // correct the api
    // check that the return format is correct
    console.log(collegeId);
    const response = await axios.post(
      "http://localhost:8080/api/v1/get-all-question-college",
      { collegeId }
    );
    console.log(response.data);

    return { questions: response.data };
  } catch (error) {
    throw new Error(error);
  }
}

export async function upvoteQuestion(questionId) {
  try {
    console.log(questionId);
    const response = await axios.post(
      "http://localhost:8080/api/v1/upvote-question",
      { questionId }
    );

    return response.data.upvotes;
  } catch (error) {
    throw new Error(error);
  }
}

export async function downVoteQuestion(questionId) {
  try {
    console.log(questionId);
    const response = await axios.post(
      "http://localhost:8080/api/v1/downvote-question",
      { questionId }
    );
    return response.data.downvotes;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getResponses(questionId) {
  try {
    console.log(questionId);
    const response = await axios.post(
      "http://localhost:8080/api/v1/getAnswersFor",
      { questionId }
    );
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.log(e);
  }
}

export async function handleUpvote(answerId) {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/v1/upvoteAnswer",
      answerId
    );
    return response.data.updatedAnswer;
  } catch (error) {
    throw new Error(error);
  }
}

export async function handleDownvote(answerId) {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/v1/downvoteAnswer",
      answerId
    );
    return response.data.updatedAnswer;
  } catch (error) {
    throw new Error(error);
  }
}

export async function writeResponse(questionId, answer) {
  try {
    console.log(questionId, answer);
    const response = await axios.post(
      "http://localhost:8080/api/v1/submitAnswer",
      { questionId, answer }
    );
    console.log(response);
  } catch (error) {}
}

export async function askUserQuestion(question) {
  console.log(question);
  const response = await axios.post(
    "http://localhost:8080/api/v1/ask-question",
    { question }
  );
  if (response) {
    return true;
  }
  return false;
}

export async function getUserData() {
  try {
    // console.log(id);
    console.log("hello");
    const response = await axios.post(
      "http://localhost:8080/api/v1/auth/getUserData",
      { userId: "6596e198cc1152807d1d2991" }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {}
}
