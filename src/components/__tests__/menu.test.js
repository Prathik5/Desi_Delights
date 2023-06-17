import "@testing-library/jest-dom";
import { fireEvent, render, waitFor } from "@testing-library/react";
import Menu from "../Menu"
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { Menu_data } from "../../Mocks/data";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json : () => {
            return Promise.resolve(Menu_data)
        },
    })
})


test('Add items to cart', async () => { 
    const menu = render(
        <StaticRouter>
           <Provider store={store}>
                <Header />
                <Menu />
            </Provider>
        </StaticRouter>
    )

    await waitFor(()=> expect(menu.getByTestId("menu")));


    const MenuList = menu.getByTestId("menu");
    const addBtn = menu.getAllByTestId("add-btn");
    const cart = menu.getAllByTestId("cart-status")

    fireEvent.click(addBtn[0])


    expect(cart.innerHTML).toBe(0);

    // console.log(Shimmer);
 });
