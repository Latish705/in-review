// action for login of the user
import axios from 'axios';

export async function userSignup (info) {
    try {
        const response = await axios.post('http://localhost:8080/api/v1/auth/register', info)
        console.log(response.data);
        

    } catch (error) {
        return false
    }
    
};

export  async function userLogin () {
    //login function to be added
    // if success returns true 
    return true
}

export async function getQuestion (collegeId) {
    try {
        // correct the api
        // check that the return format is correct

        const response = await axios.get('.../getAllQuestionForCollege', collegeId );
        
        return {questions: response.data.questions}
    } catch (error) {
        throw new Error(error);
    }
}

export async function upvoteQuestion(questionId) {
    try {
        const response = await axios.post('....api to upvote', questionId);

        return(response.data.updatedQuestion);
    } catch (error) {
        throw new Error(error);
    }
}

export async function downVoteQuestion (questionId) {
    try {
        const response = await axios.post('...api for downvote', questionId)
        return (response.data.updatedQuestion);
    } catch (error) {
        throw new Error (error);
    }
}

export async function getQuestionDetail (questionId) {
    try {

    } catch (error) {
        throw new Error (error);
    }
}