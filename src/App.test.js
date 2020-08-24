import App from './App';
import { shallow, mount } from 'enzyme';
import { findByTestAtrr, testStore } from './../utils';
import React from 'react';

const setUp = (initialState={}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<App store={store} />).childAt(0).dive();
    console.log('wrapper', wrapper.debug());
    
    return wrapper;
};

describe('App Component', () => {

    let wrapper;
    beforeEach(() => {
        const initialState = {
            posts: [{
                title: 'Example title 1',
                body: 'Some text'
            }, {
                title: 'Example title 2',
                body: 'Some text'
            }, {
                title: 'Example title 3',
                body: 'Some text'
            }]
        }
        wrapper = setUp(initialState);
    });

    it('Should render without errors', () => {
        console.log(wrapper);
        const component = findByTestAtrr(wrapper, 'appComponent');
        expect(component.length).toBe(1);
    });

    it('updatesState Method should update state as expected', () => {
        const classInstance = wrapper.instance();
        classInstance.updatesState();
        const newState = classInstance.state.hideButton;
        expect(newState).toBe(true);
    });

    it('returnValue Method should return value as expected', () => {
        const classInstance = wrapper.instance();
        const newValue = classInstance.returnValue(6);
        expect(newValue).toBe(7);
    });


});