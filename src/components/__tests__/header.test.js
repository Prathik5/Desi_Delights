import Header from "../Header"
import { render } from "@testing-library/react"
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server"

test("Logo should load on rendering header", () =>{
    //Load Header
    const header = render(
        <StaticRouter>
            <Provider store = {store}>
                <Header/>
            </Provider>
        </StaticRouter>
    );


    const logo = header.getAllByTestId("logo");

    // console.log(logo[0]);

    expect(logo[0].src).toBe("http://localhost/dummy.png");
});
test("Check online status", () =>{
    //Load Header
    const header = render(
        <StaticRouter>
            <Provider store = {store}>
                <Header/>
            </Provider>
        </StaticRouter>
    );


    const onlineStatus = header.getByTestId("online-status")

    // console.log(logo[0]);

    expect(onlineStatus.innerHTML).toBe("🟢")
});

test("Check If cart is empty", () =>{
    //Load Header
    const header = render(
        <StaticRouter>
            <Provider store = {store}>
                <Header/>
            </Provider>
        </StaticRouter>
    );


    const cart = header.getByTestId("cart-status");

    expect(cart.innerHTML).toBe("0");
});