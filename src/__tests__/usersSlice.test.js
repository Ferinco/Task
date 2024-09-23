import { configureStore } from "@reduxjs/toolkit";
import usersReducer, { fetchAllUsers } from "../redux/usersSlice";
import fetchMock from "jest-fetch-mock";

describe("fetchAllUsers thunk", () => {
  it("dispatches fulfilled when users are fetched", async () => {
    // Mock data 
    const mockData = {
      users: [{}], 
      total: 208, 
      limit: 8,
      skip: 0,
    };
    fetchMock.mockResponseOnce(JSON.stringify(mockData));
    const store = configureStore({ reducer: { users: usersReducer }});
    await store.dispatch(fetchAllUsers({ limit: 8, skip: 0 }));
    const state = store.getState().users;
    expect(state.users.length).toBeGreaterThan(0); 
    expect(state.total).toBe(mockData.total);
    expect(state.limit).toBe(mockData.limit);
    expect(state.skip).toBe(mockData.skip);
    expect(state.pages).toBe(Math.floor(mockData.total / mockData.limit));
  });
});
