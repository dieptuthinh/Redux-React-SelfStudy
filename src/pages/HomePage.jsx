import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import HobbyList from '../components/Home/HobbyList';
// import casual from 'casual';
import { addNewHobby, setActiveHobby } from '../actions/hobby';

HomePage.propTypes = {

};
const randomNumer = () => {
    return 1000 + Math.trunc(Math.random() * 9000);
}
function HomePage(props) {
    const hobbyList = useSelector(state => state.hobby.list);
    const activeId = useSelector(state => state.hobby.activeId);
    const dispatch = useDispatch();
    const handleAddHobbyClick = () => {
        const newId=randomNumer()
        const newHobby = {
            id: newId,
            title: `hobby ${newId}`,
        }

        const action = addNewHobby(newHobby);
        dispatch(action);
    }

    const handleHobbyClick = (hobby) => {
        const action = setActiveHobby(hobby);
        dispatch(action);
    }

    return (
        <div className="home-page">
            <h1>HOME PAGE</h1>

            <button onClick={handleAddHobbyClick}> Random hobby</button>
            <HobbyList
                hobbyList={hobbyList}
                activeId={activeId}
                onHobbyClick={handleHobbyClick}
            />
        </div>
    );
}

export default HomePage;