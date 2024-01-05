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

    console.log(response);
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

export async function askQuestion(collegeId, question, description, hashtags) {
  console.log(collegeId, question, description, hashtags);
  const response = await axios.post(
    "http://localhost:8080/api/v1/askQuestion",
    { collegeId, question, description, hashtags }
  );
  console.log(response);
}
