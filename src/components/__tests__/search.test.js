import "@testing-library/jest-dom";
import { fireEvent, render, waitFor } from "@testing-library/react";
import Body from "../Body";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { Rest_Data } from "../../Mocks/data";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json : () => {
            return Promise.resolve(Rest_Data)
        },
    })
})


test('Shimmer loading on Homepage', () => { 
    const body = render(
        <StaticRouter>
           <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>
    )

    const Shimmer = body.getByTestId("Shimmer");

    expect(Shimmer.children.length).toBe(15);

    // console.log(Shimmer);
 });





 test('Restaurants should load on Homepage', async () => { 
    const body = render(
        <StaticRouter>
           <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>
    )

    await waitFor(()=> expect(body.getByTestId("search-btn")));

    const ResList = body.getByTestId("res-list");

    expect(ResList.children.length).toBe(15);

    // console.log(Shimmer);
 });


 test('Search for string(input) on Homepage', async () => { 
    const body = render(
        <StaticRouter>
           <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>
    )

    await waitFor(()=> expect(body.getByTestId("search-btn")));

    const searchBtn = body.getByTestId("search-btn")
    const input = body.getByTestId("search-input");

        fireEvent.change(input, {target:{
            value : "food",
        }})

        fireEvent.click(searchBtn)

        const ResList = body.getByTestId("res-list");

        expect(ResList.children.length).toBe(3);
    // expect(ResList.children.length).toBe(15);

    // console.log(Shimmer);
 });

 

