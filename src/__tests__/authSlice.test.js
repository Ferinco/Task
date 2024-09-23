import { configureStore } from "@reduxjs/toolkit";
import authReducer, { loginUser, initializeAuth, logout } from "../redux/authSlice";
import fetchMock from "jest-fetch-mock";

// Mock setup
beforeEach(() => {
  fetchMock.resetMocks();
  global.localStorage = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
  };
});
afterEach(() => {
  jest.clearAllMocks();
});

// Login thunk tests
describe("loginUser thunk", () => {   
  it("dispatches fulfilled when login is successful", async () => {
    jest.setTimeout(10000);
    fetchMock.mockResponseOnce(
      JSON.stringify({
        accessToken: "mockToken",
        user: { username: "emilys", email: "emily@example.com" }
      })
    );
    localStorage.setItem("token", "mockToken");
    const store = configureStore({ reducer: { auth: authReducer } });
    await store.dispatch(loginUser({ username: "emilys", password: "emilyspass" }));
    const state = store.getState().auth;
    expect(state.isAuthenticated).toBe(true);
    expect(localStorage.setItem).toHaveBeenCalledWith("token", "mockToken");
  });

  it("dispatches rejected when login fails", async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({ message: "Invalid credentials" }),
      { status: 400 }
    );
    const store = configureStore({ reducer: { auth: authReducer } });
    await store.dispatch(loginUser({ username: "wrong", password: "wrong" }));
    const state = store.getState().auth;
    expect(state.isAuthenticated).toBe(false);
    expect(state.error).toBe("Invalid credentials");
    expect(localStorage.getItem("token")).toBe(undefined);
  });
});

// Tests for auth initialization
describe("initializeAuth thunk", () => {
    it("dispatches fulfilled when user is authenticated", async () => {
        const store = configureStore({ reducer: { auth: authReducer } });
        store.dispatch(loginUser({ username: "emilys", password: "password" })); // user has to be logged in before this intialization
        localStorage.getItem("token")
        store.dispatch(initializeAuth());
        const state = store.getState().auth;
        expect(state.isAuthenticated).toBe(true);
      });
      
  it("dispatches fulfilled when no token is found", async () => {
    localStorage.getItem.mockReturnValue(null);
    const store = configureStore({ reducer: { auth: authReducer } });
    await store.dispatch(initializeAuth());
    const state = store.getState().auth;
    expect(state.isAuthenticated).toBe(false);
    expect(state.user).toBe(null);
  });
});

// Logout reducer tests
describe("authSlice reducers", () => {
  it("logout should reset the state", () => {
    const store = configureStore({ reducer: { auth: authReducer } });
    store.dispatch(loginUser({ username: "john", password: "password" })); // user has to be logged in before he/she can be logged out...
    store.dispatch(logout());
    const state = store.getState().auth;
    expect(state.isAuthenticated).toBe(false);
    expect(state.user).toBe(null);
    expect(localStorage.removeItem).toHaveBeenCalledWith("token");
  });
});
