import {gql} from "@apollo/client";

export const GET_LISTS_QUERY = gql`
    query myQuery($skip: Int, $take: Int) {
        getAllReview(skip: $skip, take: $take) {
            id
            createdAt
            updatedAt
        }
    }
`;

export const DELETE_LIST_QUERY = gql`
    mutation one ($id: ID) {
        deleteReview(id: $id) {
            id
            nickname
        }
    }
`;

export const GET_DETAIL_QUERY = gql`
    query myQuery($id: ID) {
        getReview(id: $id) {
            id
            text1
            text2
            text3
            summary
            nickname
        }
    }
`;

export const CREATE_DETAIL_QUERY = gql`
    mutation one ($text1: String, $text2: String, $text3: String, $summary: String, $nickname: String) {
        createReview(input: {text1: $text1, text2: $text2, text3: $text3, summary: $summary, nickname: $nickname}) {
            id
            text1
            text2
            text3
            summary
            nickname
        }
    }
`;

export const UPDATE_DETAIL_QUERY = gql`
    mutation one ($id: ID, $text1: String, $text2: String, $text3: String, $summary: String, $nickname: String) {
        updateReview(id: $id, input: {id: $id, text1: $text1, text2: $text2, text3: $text3, summary: $summary, nickname: $nickname}) {
            id
            text1
            text2
            text3
            summary
            nickname
        }
    }
`;