import userReducer, {initStateType, followActionCreator, unfollowActionCreator, unfollowThunkCreator} from "./usersReducer";
import {ResultCodes, UserType} from "../types";
import {followUnfollowApi} from "../api";
jest.mock('../api');
const apiMock = followUnfollowApi;

apiMock.unfollowApi.mockReturnValue({
    resultCode: ResultCodes.Success,
    messages: [],
    data: {}
});
let state: initStateType;
beforeEach(() => {
    state = {
        users: [
            {id: 0, name: 'Vlad', status:'1', photos: {small:null, large: null}, followed: false},
            {id: 1, name: 'Vlad2', status:'2', photos: {small:null, large: null}, followed: true},
            {id: 2, name: 'Vladh', status:'144', photos: {small:null, large: null}, followed: true},
            {id: 6, name: 'Vlad t', status:'234', photos: {small:null, large: null}, followed: false},
        ] as Array<UserType>,
        pageSize: 10,
        totalUsersCount: 0,
        currentPage: 1
    }
})

test("follow success", () => {
    const newState = userReducer(state, followActionCreator(6));
    expect(newState.users[0].followed).toBeFalsy();
    expect(newState.users[3].followed).toBeTruthy();
});

test("unfollow success", () => {
    const newState = userReducer(state, unfollowActionCreator(2));
    expect(newState.users[0].followed).toBeFalsy();
    expect(newState.users[1].followed).toBeTruthy();
});

test("thunk unfollow success", async () => {
    const thunk = unfollowThunkCreator(6);
    const dispatchMock = jest.fn()
    await thunk(dispatchMock);
    expect(dispatchMock).toBeCalledTimes(1);
});