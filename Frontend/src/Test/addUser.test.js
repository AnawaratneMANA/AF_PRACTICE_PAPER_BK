import React from 'react';
import { getByTestId, render } from '@testing-library/react'
import {AddUser} from "../Components/AddUser/addUser";
import {BrowserRouter} from "react-router-dom";

let container = null;

describe ( 'Testing Index file that contain a form', () => {
    beforeEach (() => {
        container  = render(<BrowserRouter><AddUser/></BrowserRouter>).container;
    })

    it('should render form tag' , () => {
        expect(getByTestId(container ,'form-id')).toBeTruthy();
    });

    it('should render Title' , () => {
        expect(getByTestId(container ,'add-user-comp')).toBeTruthy();
        expect(getByTestId(container, 'header-id').textContent).toBe('Add Users');
    });
});
